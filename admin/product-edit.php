<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

$id = $_GET['id'] ?? null;
$product = $id ? find_product_by_id($id) : null;
$isNew = !$product;

if ($id && !$product) {
    header('Location: /admin/products.php?error=' . rawurlencode('Product not found.'));
    exit;
}

$product = $product ?? [
    'id' => '', 'title' => '', 'brand' => '', 'category' => '', 'sizeRange' => '',
    'materials' => '', 'standards' => '', 'info' => '', 'aboutProduct' => '', 'image' => null, 'customAttrs' => [],
];
// Build a single editable list of attribute name/value rows. Brand, Size Range, Material and
// Standards/Specs are folded into this list (alongside any custom attributes) so the admin can
// rename or delete them just like any other attribute. Category stays a separate dropdown field
// since it drives category filtering/navigation on the public site.
$attributeRows = [];
if (!empty($product['brand'])) $attributeRows[] = ['name' => 'Brand', 'value' => $product['brand']];
if (!empty($product['sizeRange'])) $attributeRows[] = ['name' => 'Size Range', 'value' => $product['sizeRange']];
if (!empty($product['materials'])) $attributeRows[] = ['name' => 'Material', 'value' => $product['materials']];
if (!empty($product['standards'])) $attributeRows[] = ['name' => 'Standards / Specs', 'value' => $product['standards']];
foreach (($product['customAttrs'] ?? []) as $attr) {
    if (!empty($attr['name']) || !empty($attr['value'])) $attributeRows[] = $attr;
}
$categories = get_categories();
$imagePreview = product_image_url($product);
// When no custom "about" text has been saved yet, pre-fill with the auto-generated SEO
// description (matching the live product page's fallback) instead of leaving it blank.
$aboutProductValue = !empty($product['aboutProduct']) ? $product['aboutProduct'] : ($isNew ? '' : build_seo_description($product));

$adminActiveTab = 'products';
require __DIR__ . '/includes/layout.php';
?>
<div style="background:#fff;border-radius:16px;padding:24px;max-width:640px;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
    <h3 style="font-size:16px;font-weight:700;margin:0;"><?= $isNew ? 'Add' : 'Edit' ?> Product Details</h3>
    <a href="/admin/products.php" style="background:none;border:none;font-size:18px;color:hsl(215 20% 50%);">✕</a>
  </div>
  <form method="post" action="/admin/product-save.php" enctype="multipart/form-data">
    <input type="hidden" name="id" value="<?= h($product['id']) ?>">
    <input type="hidden" name="is_new" value="<?= $isNew ? '1' : '0' ?>">

    <div style="margin-bottom:14px;">
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Product Image</label>
      <div style="display:flex;gap:14px;align-items:center;">
        <img src="<?= h($imagePreview) ?>" style="width:80px;height:80px;object-fit:contain;background:hsl(210 20% 96%);border-radius:8px;border:1px solid hsl(214 25% 88%);" />
        <input type="file" name="image" accept="image/*" style="font-size:13px;">
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:14px;">
      <div>
        <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Item Description / Title</label>
        <input type="text" name="title" required value="<?= h($product['title']) ?>" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
      </div>
      <div>
        <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Category</label>
        <select name="category" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;">
          <option value="">Select a category…</option>
          <?php foreach ($categories as $c): ?>
          <option value="<?= h($c) ?>" <?= $product['category'] === $c ? 'selected' : '' ?>><?= h($c) ?></option>
          <?php endforeach; ?>
        </select>
      </div>
    </div>

    <div style="margin-bottom:18px;">
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:8px;">Attributes</label>
      <div id="attr-rows" style="display:flex;flex-direction:column;gap:8px;">
        <?php foreach ($attributeRows as $attr): ?>
        <div class="attr-row" style="display:flex;gap:8px;">
          <input type="text" name="attr_name[]" placeholder="Attribute name" value="<?= h($attr['name']) ?>" style="flex:1;height:36px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:12px;" />
          <input type="text" name="attr_value[]" placeholder="Attribute value" value="<?= h($attr['value']) ?>" style="flex:1;height:36px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:12px;" />
          <button type="button" class="attr-remove" style="background:none;border:none;color:hsl(0 84% 55%);cursor:pointer;font-size:16px;padding:0 6px;" title="Remove attribute">✕</button>
        </div>
        <?php endforeach; ?>
      </div>
      <button type="button" id="add-attr-btn" style="margin-top:10px;background:hsl(210 20% 96%);color:hsl(210 30% 10%);font-weight:600;font-size:12px;padding:8px 14px;border-radius:6px;border:1px solid hsl(214 25% 88%);cursor:pointer;">+ Add more attributes</button>
    </div>

    <div style="margin-bottom:14px;">
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Product Information</label>
      <textarea name="info" rows="3" style="width:100%;padding:10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;resize:vertical;"><?= h($product['info']) ?></textarea>
    </div>
    <div style="margin-bottom:14px;">
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">About This Product</label>
      <textarea name="aboutProduct" rows="4" style="width:100%;padding:10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;resize:vertical;"><?= h($aboutProductValue) ?></textarea>
    </div>

    <div style="display:flex;gap:10px;">
      <button type="submit" style="background:hsl(207 89% 42%);color:#fff;font-weight:700;font-size:13px;padding:10px 20px;border-radius:6px;border:none;cursor:pointer;">Save Product</button>
      <a href="/admin/products.php" style="background:hsl(210 20% 96%);color:hsl(210 30% 10%);font-weight:600;font-size:13px;padding:10px 20px;border-radius:6px;">Cancel</a>
    </div>
  </form>
</div>
<script>
(function () {
  var container = document.getElementById('attr-rows');
  var addBtn = document.getElementById('add-attr-btn');

  function bindRemove(row) {
    var btn = row.querySelector('.attr-remove');
    if (btn) btn.addEventListener('click', function () { row.remove(); });
  }

  Array.prototype.forEach.call(container.querySelectorAll('.attr-row'), bindRemove);

  addBtn.addEventListener('click', function () {
    var row = document.createElement('div');
    row.className = 'attr-row';
    row.style.display = 'flex';
    row.style.gap = '8px';
    row.innerHTML =
      '<input type="text" name="attr_name[]" placeholder="Attribute name" style="flex:1;height:36px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:12px;" />' +
      '<input type="text" name="attr_value[]" placeholder="Attribute value" style="flex:1;height:36px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:12px;" />' +
      '<button type="button" class="attr-remove" style="background:none;border:none;color:hsl(0 84% 55%);cursor:pointer;font-size:16px;padding:0 6px;" title="Remove attribute">✕</button>';
    container.appendChild(row);
    bindRemove(row);
    row.querySelector('input[name="attr_name[]"]').focus();
  });
})();
</script>
<?php require __DIR__ . '/includes/layout-footer.php'; ?>
