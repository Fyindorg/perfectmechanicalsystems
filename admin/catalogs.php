<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

$catalogs = get_catalogs();
$editFile = $_GET['edit'] ?? null;
$editingCatalog = null;
if ($editFile !== null) {
    foreach ($catalogs as $c) { if ($c['file'] === $editFile) { $editingCatalog = $c; break; } }
}
$isAdding = isset($_GET['add']);

$adminActiveTab = 'catalogs';
require __DIR__ . '/includes/layout.php';
?>
<div style="background:#fff;border-radius:16px;border:1px solid hsl(214 25% 88%);padding:20px;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:12px;">
    <h3 style="font-size:15px;font-weight:700;margin:0;">Catalogs</h3>
    <a href="/admin/catalogs.php?add=1" style="background:hsl(207 89% 42%);color:#fff;font-weight:600;font-size:13px;padding:9px 16px;border-radius:6px;">+ Add Catalog</a>
  </div>

  <?php if ($isAdding || $editingCatalog): ?>
  <div style="border:1px solid hsl(207 89% 42%);border-radius:10px;padding:16px;margin-bottom:16px;">
    <h4 style="font-size:14px;font-weight:700;margin:0 0 12px;"><?= $editingCatalog ? 'Edit' : 'Add' ?> Catalog</h4>
    <form method="post" action="/admin/catalog-save.php" enctype="multipart/form-data" style="display:flex;flex-direction:column;gap:10px;max-width:420px;">
      <input type="hidden" name="original_file" value="<?= h($editingCatalog['file'] ?? '') ?>">
      <input type="text" name="title" required placeholder="Catalog title" value="<?= h($editingCatalog['title'] ?? '') ?>" style="height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
      <input type="file" name="pdf" accept=".pdf,application/pdf" style="font-size:13px;">
      <?php if ($editingCatalog): ?><p style="font-size:11px;color:hsl(215 20% 50%);margin:0;">Current file: <?= h($editingCatalog['file']) ?>.pdf — leave blank to keep it.</p><?php endif; ?>
      <div style="display:flex;gap:10px;">
        <button type="submit" style="background:hsl(207 89% 42%);color:#fff;font-weight:700;font-size:13px;padding:9px 18px;border-radius:6px;border:none;cursor:pointer;">Save</button>
        <a href="/admin/catalogs.php" style="background:hsl(210 20% 96%);font-weight:600;font-size:13px;padding:9px 18px;border-radius:6px;color:hsl(210 30% 10%);">Cancel</a>
      </div>
    </form>
  </div>
  <?php endif; ?>

  <div style="display:flex;flex-direction:column;gap:8px;">
    <?php foreach ($catalogs as $c): ?>
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 12px;border:1px solid hsl(214 25% 88%);border-radius:8px;">
      <div style="font-size:13px;font-weight:600;"><?= h($c['title']) ?></div>
      <div style="display:flex;gap:8px;flex-shrink:0;">
        <a href="/admin/catalogs.php?edit=<?= rawurlencode($c['file']) ?>" style="font-size:12px;font-weight:600;color:hsl(207 89% 42%);">Edit</a>
        <form method="post" action="/admin/catalog-delete.php" onsubmit="return confirm('Delete this catalog?');" style="display:inline;">
          <input type="hidden" name="file" value="<?= h($c['file']) ?>">
          <button type="submit" style="font-size:12px;font-weight:600;color:hsl(0 84% 55%);background:none;border:none;cursor:pointer;">Delete</button>
        </form>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
</div>
<?php require __DIR__ . '/includes/layout-footer.php'; ?>
