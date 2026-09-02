<?php
require_once __DIR__ . '/includes/functions.php';

$activePage = 'catalogs';
$pageTitle = 'Catalogs - Perfect Mechanical System Est.';

$catalogDefs = array_map(function ($c) {
    $c['pdfUrl'] = '/' . ltrim($c['pdf'], '/');
    $hasThumb = !empty($c['thumb']) && file_exists(SITE_ROOT . '/' . ltrim($c['thumb'], '/'));
    $c['hasThumb'] = $hasThumb;
    $c['thumbUrl'] = $hasThumb ? '/' . ltrim($c['thumb'], '/') : null;
    return $c;
}, get_catalogs());

require __DIR__ . '/includes/header.php';
?>
<main>
  <section style="position:relative;overflow:hidden;background:hsl(207 89% 42%);color:#fff;padding:96px 0;text-align:center;">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;position:relative;">
      <p style="display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.2em;color:hsl(0 0% 100% / 0.8);margin:0 0 16px;"><span style="width:24px;height:1px;background:hsl(0 0% 100% / 0.6);display:inline-block;"></span><?= h(t('catalogs.eyebrow')) ?></p>
      <h1 style="font-size:56px;font-weight:700;margin:0 0 20px;letter-spacing:-0.02em;"><?= h(t('catalogs.title')) ?></h1>
      <p style="max-width:640px;margin:0 auto;color:hsl(0 0% 100% / 0.8);font-size:18px;line-height:1.6;"><?= h(t('catalogs.desc')) ?></p>
    </div>
  </section>
  <section style="padding:80px 0;background:hsl(210 20% 98%);">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:28px;">
      <?php foreach ($catalogDefs as $c): ?>
      <a href="<?= h($c['pdfUrl']) ?>" target="_blank" rel="noopener noreferrer" style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid hsl(214 25% 88%);display:flex;flex-direction:column;color:hsl(210 30% 10%);">
        <div style="position:relative;background:hsl(210 20% 96%);height:300px;flex-shrink:0;border-bottom:1px solid hsl(214 25% 88%);">
          <?php if ($c['hasThumb']): ?>
          <img src="<?= h($c['thumbUrl']) ?>" alt="<?= h($c['title']) ?> catalog cover" loading="lazy" style="width:100%;height:100%;object-fit:contain;background:#fff;" />
          <?php else: ?>
          <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:hsl(215 20% 50%);">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="hsl(207 89% 42%)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><path d="M14 2v6h6"></path></svg>
            <span style="font-size:12px;font-weight:600;"><?= h(t('catalogs.pdfDocument')) ?></span>
          </div>
          <?php endif; ?>
          <div style="position:absolute;top:12px;left:12px;background:hsl(207 89% 42%);color:#fff;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:4px 10px;border-radius:999px;display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><path d="M14 2v6h6"></path></svg>PDF</div>
        </div>
        <div style="padding:20px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex:1;min-height:96px;">
          <div style="min-width:0;">
            <h3 style="font-size:16px;font-weight:700;margin:0 0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"><?= h($c['title']) ?></h3>
            <p style="font-size:12px;color:hsl(215 20% 50%);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"><?= h($c['file']) ?>.pdf</p>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
            <span style="width:36px;height:36px;border-radius:50%;background:hsl(207 89% 42% / 0.1);color:hsl(207 89% 42%);display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="hsl(207 89% 42%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path></svg></span>
            <span onclick="event.preventDefault();event.stopPropagation();var l=document.createElement('a');l.href='<?= h($c['pdfUrl']) ?>';l.download='<?= h($c['title']) ?>.pdf';document.body.appendChild(l);l.click();l.remove();" style="width:36px;height:36px;border-radius:50%;background:hsl(210 20% 96%);color:hsl(210 30% 10%);display:flex;align-items:center;justify-content:center;cursor:pointer;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="hsl(210 30% 10%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></span>
          </div>
        </div>
      </a>
      <?php endforeach; ?>
    </div>
  </section>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
