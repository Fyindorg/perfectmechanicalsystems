<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $file = $_POST['file'] ?? '';
    $catalogs = get_catalogs();
    $catalogs = array_values(array_filter($catalogs, function ($c) use ($file) { return $c['file'] !== $file; }));
    save_catalogs($catalogs);
}

header('Location: /admin/catalogs.php?saved=1');
exit;
