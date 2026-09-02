<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $categories = get_categories();
    $categories = array_values(array_filter($categories, function ($c) use ($name) { return $c !== $name; }));
    save_categories($categories);
}

header('Location: /admin/products.php?saved=1');
exit;
