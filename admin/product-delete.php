<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? '';
    $products = get_products();
    $products = array_values(array_filter($products, function ($p) use ($id) { return $p['id'] !== $id; }));
    save_products($products);
}

header('Location: /admin/products.php?saved=1');
exit;
