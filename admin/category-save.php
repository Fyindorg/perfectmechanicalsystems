<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $categories = get_categories();
    $oldName = trim($_POST['old_name'] ?? '');
    $newName = trim($_POST['new_name'] ?? '');

    if ($oldName !== '' && $newName !== '') {
        // Rename existing category
        $idx = array_search($oldName, $categories, true);
        if ($idx !== false && $newName !== $oldName) {
            $categories[$idx] = $newName;
            $categories = array_values(array_unique($categories));
            sort($categories);
            save_categories($categories);

            $products = get_products();
            foreach ($products as &$p) {
                if ($p['category'] === $oldName) $p['category'] = $newName;
            }
            unset($p);
            save_products($products);
        }
    } elseif ($newName !== '') {
        // Add new category
        if (!in_array($newName, $categories, true)) {
            $categories[] = $newName;
            sort($categories);
            save_categories($categories);
        }
    }
}

header('Location: /admin/products.php?saved=1');
exit;
