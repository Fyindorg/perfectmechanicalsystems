<?php
require_once __DIR__ . '/includes/functions.php';

$activePage = 'products';
$pageTitle = 'Products - Perfect Mechanical System Est.';

$search = trim(strtolower($_GET['search'] ?? ''));
$brandFilter = $_GET['brand'] ?? 'ALL';
$categoryFilter = $_GET['category'] ?? 'ALL';
$page = isset($_GET['page']) ? max(1, (int) $_GET['page']) : 1;

$ALL = get_products();

$categoryScoped = array_values(array_filter($ALL, function ($p) use ($categoryFilter) {
    return $categoryFilter === 'ALL' || $p['category'] === $categoryFilter;
}));
$brandsList = array_values(array_unique(array_map(function ($p) { return $p['brand']; }, $categoryScoped)));
sort($brandsList);

$allCategoryNames = get_categories();
$categories = array_map(function ($name) use ($ALL, $categoryFilter) {
    $count = 0;
    foreach ($ALL as $p) { if ($p['category'] === $name) $count++; }
    return [
        'name' => $name,
        'count' => $count,
        'active' => $name === $categoryFilter,
        'href' => products_page_url(1, ['category' => $name === $categoryFilter ? null : $name, 'page' => null]),
    ];
}, $allCategoryNames);

$filtered = array_values(array_filter($ALL, function ($p) use ($categoryFilter, $brandFilter, $search) {
    if ($categoryFilter !== 'ALL' && $p['category'] !== $categoryFilter) return false;
    if ($brandFilter !== 'ALL' && $p['brand'] !== $brandFilter) return false;
    if ($search === '') return true;
    return strpos(strtolower($p['category']), $search) !== false || strpos(strtolower($p['title']), $search) !== false;
}));

$pills = [];
if ($categoryFilter !== 'ALL') $pills[] = ['label' => t('products.categoryPill') . ' ' . $categoryFilter, 'href' => products_page_url(1, ['category' => null, 'page' => null])];
if ($brandFilter !== 'ALL') $pills[] = ['label' => t('products.brandPill') . ' ' . $brandFilter, 'href' => products_page_url(1, ['brand' => null, 'page' => null])];
if ($search !== '') $pills[] = ['label' => t('products.searchPill') . ' "' . trim($_GET['search']) . '"', 'href' => products_page_url(1, ['search' => null, 'page' => null])];
$hasActiveFilters = count($pills) > 0;

$totalPages = max(1, (int) ceil(count($filtered) / PAGE_SIZE));
$page = min($page, $totalPages);
$pageStart = ($page - 1) * PAGE_SIZE;
$pageItemsRaw = array_slice($filtered, $pageStart, PAGE_SIZE);
$pageItems = array_map(function ($p) {
    $p['href'] = '/products/' . slugify($p['title']);
    $p['imageUrl'] = product_image_url($p);
    return $p;
}, $pageItemsRaw);

$pages = [];
$win = 1;
for ($i = 1; $i <= $totalPages; $i++) {
    if ($i === 1 || $i === $totalPages || ($i >= $page - $win && $i <= $page + $win)) {
        $pages[] = ['isPage' => true, 'isEllipsis' => false, 'label' => (string) $i, 'href' => products_page_url($i), 'active' => $i === $page];
    } elseif (count($pages) && !$pages[count($pages) - 1]['isEllipsis']) {
        $pages[] = ['isPage' => false, 'isEllipsis' => true, 'label' => '…'];
    }
}

$showingCountTpl = t('products.showingCount');
$showingCountParts = explode('{shown}', $showingCountTpl);
$showingCountPrefix = $showingCountParts[0] ?? '';
$showingCountSuffix = str_replace('{total}', (string) count($ALL), $showingCountParts[1] ?? '');

$showingRangeTpl = t('products.showingRange');
$showingRangeParts1 = explode('{start}', $showingRangeTpl);
$showingRangeParts2 = explode('{end}', $showingRangeParts1[1] ?? '');
$showingRangePrefix = $showingRangeParts1[0] ?? '';
$showingRangeMid = $showingRangeParts2[0] ?? '';
$showingRangeSuffix = str_replace('{total}', (string) count($filtered), $showingRangeParts2[1] ?? '');

$browseDescText = str_replace('{count}', (string) count($ALL), t('products.browseDesc'));

require __DIR__ . '/includes/header.php';
?>
<div style="min-height:100vh;background:hsl(210 20% 98%);">
  <section style="position:relative;background:linear-gradient(135deg, hsl(207 89% 42%), hsl(207 89% 28%));color:#fff;padding:40px 0;overflow:hidden;">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;position:relative;">
      <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:hsl(0 0% 100% / 0.8);margin:0 0 8px;"><?= h(t('products.eyebrow')) ?></p>
      <h1 style="font-size:32px;font-weight:700;margin:0 0 8px;letter-spacing:-0.02em;"><?= h(t('products.title')) ?></h1>
      <p style="color:hsl(0 0% 100% / 0.85);max-width:640px;font-size:15px;"><?= h($browseDescText) ?></p>
    </div>
  </section>

  <div style="position:sticky;top:0;z-index:40;background:hsl(210 20% 96% / 0.9);backdrop-filter:blur(8px);border-top:1px solid hsl(214 25% 88%);border-bottom:1px solid hsl(214 25% 88%);">
    <div style="max-width:1400px;margin:0 auto;padding:12px 32px;">
      <form method="get" action="/products" style="display:flex;gap:10px;flex-wrap:wrap;">
        <?php if ($categoryFilter !== 'ALL'): ?><input type="hidden" name="category" value="<?= h($categoryFilter) ?>"><?php endif; ?>
        <input type="text" name="search" value="<?= h($_GET['search'] ?? '') ?>" placeholder="<?= h(t('products.searchPlaceholder')) ?>" style="flex:1;min-width:220px;height:44px;padding:0 14px;border-radius:8px;border:1px solid hsl(214 25% 88%);background:#fff;font-size:14px;" />
        <select name="brand" onchange="this.form.submit()" style="height:44px;padding:0 12px;border-radius:8px;border:1px solid hsl(214 25% 88%);background:#fff;font-size:14px;font-weight:500;min-width:200px;">
          <option value="ALL"><?= h(t('products.allBrands')) ?></option>
          <?php foreach ($brandsList as $b): ?>
          <option value="<?= h($b) ?>" <?= $brandFilter === $b ? 'selected' : '' ?>><?= h($b) ?></option>
          <?php endforeach; ?>
        </select>
        <button type="submit" style="display:none;">Search</button>
      </form>
      <p style="margin:8px 0 0;font-size:12px;color:hsl(215 20% 50%);"><?= h($showingCountPrefix) ?><span style="font-weight:600;color:hsl(210 30% 10%);"><?= count($filtered) ?></span><?= h($showingCountSuffix) ?></p>
      <?php if ($hasActiveFilters): ?>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
        <?php foreach ($pills as $pill): ?>
        <a href="<?= h($pill['href']) ?>" style="display:flex;align-items:center;gap:6px;background:hsl(207 89% 42% / 0.1);color:hsl(207 89% 42%);border:1px solid hsl(207 89% 42% / 0.25);border-radius:999px;padding:5px 10px;font-size:12px;font-weight:600;"><?= h($pill['label']) ?> ✕</a>
        <?php endforeach; ?>
        <a href="/products" style="font-size:12px;font-weight:600;color:hsl(215 20% 50%);text-decoration:underline;padding:5px 4px;"><?= h(t('products.clearAll')) ?></a>
      </div>
      <?php endif; ?>
    </div>
  </div>

  <section style="max-width:1400px;margin:0 auto;padding:32px 32px 48px;display:grid;grid-template-columns:260px 1fr;gap:32px;align-items:start;">
    <aside style="background:#fff;border:1px solid hsl(214 25% 88%);border-radius:12px;overflow:hidden;">
      <div style="padding:16px 18px;border-bottom:1px solid hsl(214 25% 88%);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:hsl(210 30% 10%);"><?= h(t('products.categoriesHeading')) ?></div>
      <div style="max-height:520px;overflow-y:auto;display:flex;flex-direction:column;padding:8px;">
        <a href="<?= h(products_page_url(1, ['category' => null, 'page' => null])) ?>" style="text-align:left;padding:8px 10px;border-radius:6px;font-size:13px;font-weight:600;background:<?= $categoryFilter === 'ALL' ? 'hsl(207 89% 42%)' : 'transparent' ?>;color:<?= $categoryFilter === 'ALL' ? '#fff' : 'hsl(210 30% 10%)' ?>;"><?= h(t('products.allCategories')) ?></a>
        <?php foreach ($categories as $cat): ?>
        <a href="<?= h($cat['href']) ?>" style="text-align:left;padding:8px 10px;border-radius:6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;background:<?= $cat['active'] ? 'hsl(207 89% 42%)' : 'transparent' ?>;color:<?= $cat['active'] ? '#fff' : 'hsl(210 30% 10%)' ?>;">
          <span><?= h($cat['name']) ?></span><span style="opacity:0.6;"><?= $cat['count'] ?></span>
        </a>
        <?php endforeach; ?>
      </div>
    </aside>
    <div>
    <?php if (count($pageItems) > 0): ?>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;">
        <?php foreach ($pageItems as $p): ?>
        <a href="<?= h($p['href']) ?>" style="background:#fff;border-radius:12px;border:1px solid hsl(214 25% 88%);overflow:hidden;display:flex;flex-direction:column;color:hsl(210 30% 10%);">
          <div style="aspect-ratio:4/3;background:#fff;border-bottom:1px solid hsl(214 25% 88%);display:flex;flex-shrink:0;">
            <img src="<?= h($p['imageUrl']) ?>" alt="<?= h($p['title']) ?>" loading="lazy" style="width:100%;height:100%;object-fit:contain;padding:16px;" />
          </div>
          <div style="padding:16px;display:flex;flex-direction:column;gap:8px;flex:1;">
            <span style="width:fit-content;font-size:10px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;background:hsl(207 89% 42% / 0.1);color:hsl(207 89% 42%);padding:2px 8px;border-radius:4px;"><?= h($p['brand']) ?></span>
            <h3 style="font-size:14px;font-weight:600;margin:0;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"><?= h($p['category']) ?></h3>
            <p style="font-size:12px;color:hsl(215 20% 50%);margin:0;"><?= h($p['title']) ?></p>
            <p style="font-size:11px;color:hsl(215 20% 50%);margin-top:auto;padding-top:8px;border-top:1px solid hsl(214 25% 88%);"><span style="font-weight:600;color:hsl(210 30% 10%);"><?= h(t('pd.sizeShort')) ?></span> <?= h($p['sizeRange']) ?></p>
          </div>
        </a>
        <?php endforeach; ?>
      </div>
    <?php else: ?>
      <p style="padding:40px;text-align:center;color:hsl(215 20% 50%);">No products found.</p>
    <?php endif; ?>
    <?php if ($totalPages > 1): ?>
      <nav style="margin-top:40px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <p style="font-size:12px;color:hsl(215 20% 50%);"><?= h($showingRangePrefix) ?><span style="font-weight:600;color:hsl(210 30% 10%);"><?= $pageStart + 1 ?></span><?= h($showingRangeMid) ?><span style="font-weight:600;color:hsl(210 30% 10%);"><?= $pageStart + count($pageItemsRaw) ?></span><?= h($showingRangeSuffix) ?></p>
        <ul style="display:flex;align-items:center;gap:6px;list-style:none;margin:0;padding:0;flex-wrap:wrap;justify-content:center;">
          <li><a href="<?= h(products_page_url(max(1, $page - 1))) ?>" style="height:36px;width:36px;border-radius:6px;border:1px solid hsl(214 25% 88%);background:#fff;display:flex;align-items:center;justify-content:center;opacity:<?= $page === 1 ? '0.4' : '1' ?>;">‹</a></li>
          <?php foreach ($pages as $pg): ?>
          <li>
            <?php if ($pg['isEllipsis']): ?><span style="padding:0 6px;color:hsl(215 20% 50%);font-size:14px;">…</span>
            <?php else: ?><a href="<?= h($pg['href']) ?>" style="height:36px;min-width:36px;padding:0 12px;border-radius:6px;font-size:14px;font-weight:500;display:flex;align-items:center;justify-content:center;background:<?= $pg['active'] ? 'hsl(207 89% 42%)' : '#fff' ?>;color:<?= $pg['active'] ? '#fff' : 'hsl(210 30% 10%)' ?>;border:1px solid <?= $pg['active'] ? 'hsl(207 89% 42%)' : 'hsl(214 25% 88%)' ?>;"><?= h($pg['label']) ?></a>
            <?php endif; ?>
          </li>
          <?php endforeach; ?>
          <li><a href="<?= h(products_page_url(min($totalPages, $page + 1))) ?>" style="height:36px;width:36px;border-radius:6px;border:1px solid hsl(214 25% 88%);background:#fff;display:flex;align-items:center;justify-content:center;opacity:<?= $page === $totalPages ? '0.4' : '1' ?>;">›</a></li>
        </ul>
      </nav>
    <?php endif; ?>
    </div>
  </section>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
