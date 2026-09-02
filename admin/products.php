<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

$categories = get_categories();
$products = get_products();
$search = trim(strtolower($_GET['search'] ?? ''));

$counts = [];
foreach ($categories as $c) $counts[$c] = 0;
foreach ($products as $p) {
    if (isset($counts[$p['category']])) $counts[$p['category']]++;
}

$filteredProducts = array_values(array_filter($products, function ($p) use ($search) {
    if ($search === '') return true;
    return strpos(strtolower($p['title']), $search) !== false || strpos(strtolower($p['brand']), $search) !== false || strpos(strtolower($p['category']), $search) !== false;
}));
$shownLimit = 60;
$shownProducts = array_slice($filteredProducts, 0, $shownLimit);
$shownNote = count($filteredProducts) > $shownLimit
    ? 'Showing first ' . $shownLimit . ' of ' . count($filteredProducts) . ' matching products — refine your search to narrow down.'
    : 'Showing ' . count($filteredProducts) . ' of ' . count($products) . ' total products.';

$editCategory = $_GET['edit_category'] ?? null;

$adminActiveTab = 'products';
require __DIR__ . '/includes/layout.php';
?>
<div style="display:grid;grid-template-columns:280px 1fr;gap:24px;align-items:start;">
  <div style="background:#fff;border-radius:16px;border:1px solid hsl(214 25% 88%);padding:20px;">
    <h3 style="font-size:15px;font-weight:700;margin:0 0 12px;">Categories</h3>
    <div style="max-height:400px;overflow-y:auto;display:flex;flex-direction:column;gap:6px;">
      <?php foreach ($categories as $cat): ?>
        <?php if ($editCategory === $cat): ?>
        <form method="post" action="/admin/category-save.php" style="display:flex;gap:6px;">
          <input type="hidden" name="old_name" value="<?= h($cat) ?>">
          <input type="text" name="new_name" value="<?= h($cat) ?>" style="flex:1;height:32px;padding:0 8px;border:1px solid hsl(207 89% 42%);border-radius:6px;font-size:12px;" />
          <button type="submit" style="font-size:11px;font-weight:700;color:hsl(207 89% 42%);background:none;border:none;cursor:pointer;">Save</button>
          <a href="/admin/products.php" style="font-size:11px;color:hsl(215 20% 50%);">✕</a>
        </form>
        <?php else: ?>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">
          <span style="font-size:12px;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"><?= h($cat) ?><span style="color:hsl(215 20% 50%);"> (<?= (int) ($counts[$cat] ?? 0) ?>)</span></span>
          <a href="/admin/products.php?edit_category=<?= rawurlencode($cat) ?>" style="font-size:11px;font-weight:600;color:hsl(207 89% 42%);flex-shrink:0;">Edit</a>
          <form method="post" action="/admin/category-delete.php" onsubmit="return confirm('Delete category &quot;<?= h($cat) ?>&quot;? Products keep their category text but it will no longer appear in this list unless re-added.');" style="display:inline;">
            <input type="hidden" name="name" value="<?= h($cat) ?>">
            <button type="submit" style="font-size:11px;font-weight:600;color:hsl(0 84% 55%);background:none;border:none;cursor:pointer;flex-shrink:0;">✕</button>
          </form>
        </div>
        <?php endif; ?>
      <?php endforeach; ?>
    </div>
    <form method="post" action="/admin/category-save.php" style="display:flex;gap:6px;margin-top:14px;padding-top:14px;border-top:1px solid hsl(214 25% 88%);">
      <input type="text" name="new_name" placeholder="New category" style="flex:1;height:34px;padding:0 8px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:12px;" />
      <button type="submit" style="background:hsl(207 89% 42%);color:#fff;font-weight:600;font-size:12px;padding:0 12px;border-radius:6px;border:none;cursor:pointer;">Add</button>
    </form>
  </div>

  <div>
    <div style="background:#fff;border-radius:16px;border:1px solid hsl(214 25% 88%);padding:20px;margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap;">
        <h3 style="font-size:15px;font-weight:700;margin:0;">Products</h3>
        <a href="/admin/product-edit.php" style="background:hsl(207 89% 42%);color:#fff;font-weight:600;font-size:13px;padding:9px 16px;border-radius:6px;">+ Add Product</a>
      </div>
      <form method="get" action="/admin/products.php" style="margin-bottom:6px;">
        <input type="text" name="search" value="<?= h($_GET['search'] ?? '') ?>" placeholder="Search products to edit or delete…" style="width:100%;height:40px;padding:0 12px;border:1px solid hsl(214 25% 88%);border-radius:8px;font-size:13px;" onchange="this.form.submit()" />
      </form>
      <p style="font-size:11px;color:hsl(215 20% 50%);margin:0 0 12px;"><?= h($shownNote) ?></p>
      <div style="max-height:520px;overflow-y:auto;display:flex;flex-direction:column;gap:8px;">
        <?php foreach ($shownProducts as $p): ?>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 12px;border:1px solid hsl(214 25% 88%);border-radius:8px;">
          <div style="min-width:0;">
            <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"><?= h($p['title']) ?></div>
            <div style="font-size:11px;color:hsl(215 20% 50%);"><?= h($p['brand']) ?> · <?= h($p['category']) ?></div>
          </div>
          <div style="display:flex;gap:8px;flex-shrink:0;">
            <a href="/admin/product-edit.php?id=<?= rawurlencode($p['id']) ?>" style="font-size:12px;font-weight:600;color:hsl(207 89% 42%);">Edit</a>
            <form method="post" action="/admin/product-delete.php" onsubmit="return confirm('Delete this product?');" style="display:inline;">
              <input type="hidden" name="id" value="<?= h($p['id']) ?>">
              <button type="submit" style="font-size:12px;font-weight:600;color:hsl(0 84% 55%);background:none;border:none;cursor:pointer;">Delete</button>
            </form>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</div>
<?php require __DIR__ . '/includes/layout-footer.php'; ?>
