<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

$site = get_site();
$heroPreview = $site['heroImage'] ? '/' . ltrim($site['heroImage'], '/') : '/src/assets/hero-bg.jpg';
$aboutPreview = $site['aboutImage'] ? '/' . ltrim($site['aboutImage'], '/') : '/src/assets/about-bg.jpg';

$adminActiveTab = 'home';
require __DIR__ . '/includes/layout.php';
?>
<div style="display:flex;flex-direction:column;gap:24px;">
  <div style="background:#fff;border-radius:16px;border:1px solid hsl(214 25% 88%);padding:24px;">
    <h3 style="font-size:16px;font-weight:700;margin:0 0 14px;">Hero Image</h3>
    <form method="post" action="/admin/home-save.php" enctype="multipart/form-data" style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;">
      <input type="hidden" name="action" value="hero_upload">
      <img src="<?= h($heroPreview) ?>" style="width:220px;height:130px;object-fit:cover;border-radius:8px;border:1px solid hsl(214 25% 88%);" />
      <div style="display:flex;flex-direction:column;gap:8px;">
        <input type="file" name="hero_image" accept="image/*" style="font-size:13px;">
        <div style="display:flex;gap:12px;">
          <button type="submit" style="align-self:flex-start;background:hsl(207 89% 42%);color:#fff;font-weight:600;font-size:12px;padding:8px 14px;border-radius:6px;border:none;cursor:pointer;">Upload</button>
          <?php if ($site['heroImage']): ?>
          <button type="submit" formaction="/admin/home-save.php?action=hero_remove" style="align-self:flex-start;font-size:12px;font-weight:600;color:hsl(0 84% 55%);background:none;border:none;cursor:pointer;">Remove custom image</button>
          <?php endif; ?>
        </div>
      </div>
    </form>
  </div>

  <div style="background:#fff;border-radius:16px;border:1px solid hsl(214 25% 88%);padding:24px;">
    <h3 style="font-size:16px;font-weight:700;margin:0 0 14px;">"Who We Are" Image</h3>
    <form method="post" action="/admin/home-save.php" enctype="multipart/form-data" style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;">
      <input type="hidden" name="action" value="about_upload">
      <img src="<?= h($aboutPreview) ?>" style="width:130px;height:160px;object-fit:cover;border-radius:8px;border:1px solid hsl(214 25% 88%);" />
      <div style="display:flex;flex-direction:column;gap:8px;">
        <input type="file" name="about_image" accept="image/*" style="font-size:13px;">
        <div style="display:flex;gap:12px;">
          <button type="submit" style="align-self:flex-start;background:hsl(207 89% 42%);color:#fff;font-weight:600;font-size:12px;padding:8px 14px;border-radius:6px;border:none;cursor:pointer;">Upload</button>
          <?php if ($site['aboutImage']): ?>
          <button type="submit" formaction="/admin/home-save.php?action=about_remove" style="align-self:flex-start;font-size:12px;font-weight:600;color:hsl(0 84% 55%);background:none;border:none;cursor:pointer;">Remove custom image</button>
          <?php endif; ?>
        </div>
      </div>
    </form>
  </div>

  <div style="background:#fff;border-radius:16px;border:1px solid hsl(214 25% 88%);padding:24px;">
    <h3 style="font-size:16px;font-weight:700;margin:0 0 14px;">Brand Logos <span style="color:hsl(215 20% 50%);font-weight:400;font-size:13px;">(shown on Home &amp; About Us)</span></h3>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <?php foreach ($site['brands'] as $i => $b): ?>
      <form method="post" action="/admin/home-save.php" enctype="multipart/form-data" style="display:flex;align-items:center;gap:12px;padding:10px;border:1px solid hsl(214 25% 88%);border-radius:10px;flex-wrap:wrap;">
        <input type="hidden" name="action" value="brand_update">
        <input type="hidden" name="index" value="<?= (int) $i ?>">
        <img src="/<?= h(ltrim($b['logo'], '/')) ?>" style="width:56px;height:56px;object-fit:contain;background:hsl(210 20% 96%);border-radius:6px;" />
        <input type="text" name="name" value="<?= h($b['name']) ?>" style="flex:1;min-width:160px;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
        <input type="file" name="logo" accept="image/*" style="font-size:12px;max-width:180px;">
        <button type="submit" name="submit_action" value="save" style="font-size:12px;font-weight:600;color:hsl(207 89% 42%);background:none;border:none;cursor:pointer;">Save</button>
        <button type="submit" name="submit_action" value="delete" style="font-size:12px;font-weight:600;color:hsl(0 84% 55%);background:none;border:none;cursor:pointer;">Delete</button>
      </form>
      <?php endforeach; ?>
    </div>
    <form method="post" action="/admin/home-save.php" enctype="multipart/form-data" style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:16px;padding-top:16px;border-top:1px solid hsl(214 25% 88%);">
      <input type="hidden" name="action" value="brand_add">
      <input type="text" name="name" placeholder="New brand name" style="height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;min-width:180px;">
      <input type="file" name="logo" accept="image/*" style="font-size:12px;">
      <button type="submit" style="background:hsl(207 89% 42%);color:#fff;font-weight:600;font-size:13px;padding:9px 16px;border-radius:6px;border:none;cursor:pointer;">Add Brand</button>
    </form>
  </div>
</div>
<?php require __DIR__ . '/includes/layout-footer.php'; ?>
