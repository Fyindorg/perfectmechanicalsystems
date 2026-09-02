<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $contact = [
        'phone' => trim($_POST['phone'] ?? ''),
        'email' => trim($_POST['email'] ?? ''),
        'addressLine1' => trim($_POST['addressLine1'] ?? ''),
        'addressLine2' => trim($_POST['addressLine2'] ?? ''),
        'hours1' => trim($_POST['hours1'] ?? ''),
        'hours2' => trim($_POST['hours2'] ?? ''),
        'whatsapp' => preg_replace('/[^0-9]/', '', $_POST['whatsapp'] ?? ''),
    ];
    save_contact($contact);
}

header('Location: /admin/contact.php?saved=1');
exit;
