<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /admin/change-password.php');
    exit;
}

$current = $_POST['current_password'] ?? '';
$new = $_POST['new_password'] ?? '';
$confirm = $_POST['confirm_password'] ?? '';

if ($new !== $confirm) {
    header('Location: /admin/change-password.php?error=' . rawurlencode('New password and confirmation do not match.'));
    exit;
}

$result = admin_change_password($current, $new);

if (!$result['ok']) {
    header('Location: /admin/change-password.php?error=' . rawurlencode($result['error']));
    exit;
}

header('Location: /admin/change-password.php?saved=1');
exit;
