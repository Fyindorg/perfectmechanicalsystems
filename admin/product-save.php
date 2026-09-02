<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /admin/products.php');
    exit;
}

$id = trim($_POST['id'] ?? '');
$isNew = ($_POST['is_new'] ?? '0') === '1' || $id === '';
$title = trim($_POST['title'] ?? '');

if ($title === '') {
    header('Location: /admin/product-edit.php?id=' . rawurlencode($id) . '&error=' . rawurlencode('Title is required.'));
    exit;
}

$products = get_products();

// Attribute rows from the admin form double as the legacy Brand / Size Range / Material /
// Standards fields: a row named exactly one of those (case-insensitive) is folded back into
// that field so the rest of the site keeps working unchanged. Anything else becomes a custom
// attribute. Renaming or deleting a row in the admin UI is what disconnects it from the legacy
// field (it just becomes empty, or becomes a plain custom attribute instead).
$legacyFieldMap = [
    'brand' => 'brand',
    'size range' => 'sizeRange',
    'material' => 'materials',
    'materials' => 'materials',
    'standards / specs' => 'standards',
    'standards' => 'standards',
];
$legacyValues = ['brand' => '', 'sizeRange' => '', 'materials' => '', 'standards' => ''];
$customAttrs = [];
$names = $_POST['attr_name'] ?? [];
$values = $_POST['attr_value'] ?? [];
foreach ($names as $i => $name) {
    $name = trim($name);
    $value = trim($values[$i] ?? '');
    if ($name === '' || $value === '') continue;
    $key = strtolower($name);
    if (isset($legacyFieldMap[$key])) {
        $legacyValues[$legacyFieldMap[$key]] = $value;
    } else {
        $customAttrs[] = ['name' => $name, 'value' => $value];
    }
}

$imageField = null;
if (!empty($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $ext = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
    if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'], true)) {
        if (!is_dir(PRODUCT_IMAGES_DIR)) mkdir(PRODUCT_IMAGES_DIR, 0755, true);
        $baseSlug = $id !== '' ? $id : slugify($title);
        $filename = $baseSlug . '-' . substr(md5(uniqid('', true)), 0, 6) . '.' . $ext;
        if (move_uploaded_file($_FILES['image']['tmp_name'], PRODUCT_IMAGES_DIR . '/' . $filename)) {
            $imageField = $filename;
        }
    }
}

$data = [
    'title' => $title,
    'brand' => $legacyValues['brand'],
    'category' => trim($_POST['category'] ?? ''),
    'sizeRange' => $legacyValues['sizeRange'],
    'materials' => $legacyValues['materials'],
    'standards' => $legacyValues['standards'],
    'info' => trim($_POST['info'] ?? ''),
    'aboutProduct' => trim($_POST['aboutProduct'] ?? ''),
    'customAttrs' => $customAttrs,
];

if ($isNew) {
    $newId = slugify($title) . '-' . substr(md5(uniqid('', true)), 0, 6);
    $data['id'] = $newId;
    $data['image'] = $imageField;
    $products[] = $data;
} else {
    $found = false;
    foreach ($products as &$p) {
        if ($p['id'] === $id) {
            $p = array_merge($p, $data);
            if ($imageField) $p['image'] = $imageField;
            $found = true;
            break;
        }
    }
    unset($p);
    if (!$found) {
        header('Location: /admin/products.php?error=' . rawurlencode('Product not found.'));
        exit;
    }
}

save_products($products);

// Auto-add category if it's new and non-empty
$category = trim($_POST['category'] ?? '');
if ($category !== '') {
    $categories = get_categories();
    if (!in_array($category, $categories, true)) {
        $categories[] = $category;
        sort($categories);
        save_categories($categories);
    }
}

header('Location: /admin/products.php?saved=1');
exit;
