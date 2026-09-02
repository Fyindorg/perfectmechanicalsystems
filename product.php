<?php
require_once __DIR__ . '/includes/functions.php';

$slug = $_GET['slug'] ?? '';
$product = find_product_by_slug($slug);

if (!$product) {
    http_response_code(404);
    $activePage = 'products';
    $pageTitle = 'Product Not Found - Perfect Mechanical System Est.';
    require __DIR__ . '/includes/header.php';
    echo '<div style="max-width:1400px;margin:0 auto;padding:80px 32px;text-align:center;">';
    echo '<h1 style="font-size:28px;">Product not found</h1>';
    echo '<p><a href="/products">' . h(t('pd.backToProducts')) . '</a></p>';
    echo '</div>';
    require __DIR__ . '/includes/footer.php';
    exit;
}

$activePage = 'products';
$pageTitle = $product['title'] . ' - Perfect Mechanical System Est.';
$contact = get_contact();
$imageUrl = product_image_url($product);
$seoDescription = !empty($product['aboutProduct']) ? $product['aboutProduct'] : build_seo_description($product);
$whatsappHrefQuote = whatsapp_href($contact['whatsapp'], 'Can you please quote for ' . $product['title']);
$customAttrs = $product['customAttrs'] ?? [];

require __DIR__ . '/includes/header.php';
?>
<div style="min-height:100vh;background:hsl(210 20% 98%);">
  <div style="max-width:1400px;margin:0 auto;padding:32px 32px 48px;">
    <nav style="margin-bottom:16px;font-size:14px;color:hsl(215 20% 50%);">
      <a href="/products" style="font-weight:500;"><?= h(t('pd.breadcrumbProducts')) ?></a> › <span style="color:hsl(210 30% 10%);font-weight:500;"><?= h($product['title']) ?></span>
    </nav>
    <a href="/products" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:hsl(215 20% 50%);margin-bottom:24px;">← <?= h(t('pd.backToProducts')) ?></a>
    <div style="display:grid;grid-template-columns:500px 1fr;gap:48px;">
      <div>
        <div style="position:relative;">
          <div style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid hsl(214 25% 88%);box-shadow:0 20px 60px -20px hsl(207 89% 30% / 0.35);width:375px;height:375px;max-width:100%;">
            <img src="<?= h($imageUrl) ?>" alt="<?= h($product['title']) ?>" style="width:100%;height:100%;object-fit:contain;padding:32px;" />
          </div>
          <span style="position:absolute;top:16px;left:16px;font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;background:hsl(207 89% 42%);color:#fff;padding:6px 12px;border-radius:4px;"><?= h($product['brand']) ?></span>
        </div>
      </div>
      <div style="min-width:280px;">
        <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:hsl(207 89% 42%);margin:0 0 12px;"><?= h($product['category']) ?></p>
        <h1 style="font-size:32px;font-weight:700;margin:0 0 20px;line-height:1.25;"><?= h($product['title']) ?></h1>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;gap:12px;padding-bottom:12px;border-bottom:1px solid hsl(214 25% 88%);"><div><div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:hsl(215 20% 50%);"><?= h(t('pd.brand')) ?></div><div style="font-size:14px;margin-top:2px;"><?= h($product['brand']) ?></div></div></div>
          <div style="display:flex;gap:12px;padding-bottom:12px;border-bottom:1px solid hsl(214 25% 88%);"><div><div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:hsl(215 20% 50%);"><?= h(t('pd.category')) ?></div><div style="font-size:14px;margin-top:2px;"><?= h($product['category']) ?></div></div></div>
          <div style="display:flex;gap:12px;padding-bottom:12px;border-bottom:1px solid hsl(214 25% 88%);"><div><div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:hsl(215 20% 50%);"><?= h(t('pd.sizeRange')) ?></div><div style="font-size:14px;margin-top:2px;"><?= h($product['sizeRange']) ?></div></div></div>
          <div style="display:flex;gap:12px;padding-bottom:12px;border-bottom:1px solid hsl(214 25% 88%);"><div><div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:hsl(215 20% 50%);"><?= h(t('pd.material')) ?></div><div style="font-size:14px;margin-top:2px;"><?= h($product['materials']) ?></div></div></div>
          <?php foreach ($customAttrs as $attr): ?>
          <div style="display:flex;gap:12px;padding-bottom:12px;border-bottom:1px solid hsl(214 25% 88%);"><div style="width:36px;height:36px;border-radius:8px;background:hsl(207 89% 42% / 0.1);flex-shrink:0;"></div><div><div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:hsl(215 20% 50%);"><?= h($attr['name']) ?></div><div style="font-size:14px;margin-top:2px;"><?= h($attr['value']) ?></div></div></div>
          <?php endforeach; ?>
          <div style="display:flex;gap:12px;"><div><div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:hsl(215 20% 50%);"><?= h(t('pd.standards')) ?></div><div style="font-size:14px;margin-top:2px;"><?= h($product['standards']) ?></div></div></div>
        </div>
      </div>
    </div>
    <div style="margin-top:24px;background:hsl(210 20% 96% / 0.6);border:1px solid hsl(214 25% 88%);border-radius:12px;padding:20px;">
      <h2 style="font-size:16px;font-weight:700;margin:0 0 8px;"><?= h(t('pd.productInfo')) ?></h2>
      <p style="font-size:14px;color:hsl(215 20% 50%);line-height:1.7;white-space:pre-line;margin:0;"><?= h($product['info']) ?></p>
    </div>
    <div style="margin-top:16px;background:hsl(210 20% 96% / 0.6);border:1px solid hsl(214 25% 88%);border-radius:12px;padding:20px;">
      <h2 style="font-size:16px;font-weight:700;margin:0 0 8px;"><?= h(t('pd.aboutProduct')) ?></h2>
      <p style="font-size:14px;color:hsl(215 20% 50%);line-height:1.7;margin:0;"><?= h($seoDescription) ?></p>
    </div>
    <a href="<?= h($whatsappHrefQuote) ?>" target="_blank" rel="noopener noreferrer" style="margin-top:24px;display:inline-flex;align-items:center;gap:8px;background:hsl(207 89% 42%);color:#fff;font-weight:600;padding:12px 24px;border-radius:8px;"><?= h(t('pd.requestQuote')) ?></a>
  </div>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
