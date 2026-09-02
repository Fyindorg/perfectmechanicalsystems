<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /admin/');
    exit;
}

$action = $_GET['action'] ?? ($_POST['action'] ?? '');
$site = get_site();

function save_uploaded_image($fileField, $destDir, $prefix) {
    if (empty($_FILES[$fileField]) || $_FILES[$fileField]['error'] !== UPLOAD_ERR_OK) return null;
    $tmp = $_FILES[$fileField]['tmp_name'];
    $origName = $_FILES[$fileField]['name'];
    $ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
    if (!in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'], true)) return null;
    if (!is_dir($destDir)) mkdir($destDir, 0755, true);
    $filename = $prefix . '-' . time() . '-' . substr(md5(uniqid('', true)), 0, 8) . '.' . $ext;
    $dest = $destDir . '/' . $filename;
    if (!move_uploaded_file($tmp, $dest)) return null;
    return $filename;
}

switch ($action) {
    case 'hero_upload':
        $filename = save_uploaded_image('hero_image', SITE_ROOT . '/src/assets/uploads', 'hero');
        if ($filename) $site['heroImage'] = 'src/assets/uploads/' . $filename;
        save_site($site);
        break;

    case 'hero_remove':
        $site['heroImage'] = null;
        save_site($site);
        break;

    case 'about_upload':
        $filename = save_uploaded_image('about_image', SITE_ROOT . '/src/assets/uploads', 'about');
        if ($filename) $site['aboutImage'] = 'src/assets/uploads/' . $filename;
        save_site($site);
        break;

    case 'about_remove':
        $site['aboutImage'] = null;
        save_site($site);
        break;

    case 'brand_update':
        $index = (int) ($_POST['index'] ?? -1);
        $submitAction = $_POST['submit_action'] ?? 'save';
        if (isset($site['brands'][$index])) {
            if ($submitAction === 'delete') {
                array_splice($site['brands'], $index, 1);
            } else {
                $name = trim($_POST['name'] ?? $site['brands'][$index]['name']);
                if ($name !== '') $site['brands'][$index]['name'] = $name;
                $filename = save_uploaded_image('logo', SITE_ROOT . '/src/assets/uploads', 'brand');
                if ($filename) $site['brands'][$index]['logo'] = 'src/assets/uploads/' . $filename;
            }
        }
        save_site($site);
        break;

    case 'brand_add':
        $name = trim($_POST['name'] ?? '');
        $filename = save_uploaded_image('logo', SITE_ROOT . '/src/assets/uploads', 'brand');
        if ($name !== '') {
            $site['brands'][] = [
                'name' => $name,
                'logo' => $filename ? 'src/assets/uploads/' . $filename : 'src/assets/product-placeholder.jpg',
            ];
            save_site($site);
        }
        break;
}

header('Location: /admin/?saved=1');
exit;
