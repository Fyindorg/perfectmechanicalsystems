<?php
// Session-based admin authentication guard. Require this at the top of every protected admin page.
require_once __DIR__ . '/../../includes/functions.php';

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

// Bootstrap defaults, only used the very first time this runs (before data/admin.json exists).
define('ADMIN_DEFAULT_USERNAME', 'admin@perfectms.com');
define('ADMIN_DEFAULT_PASSWORD', 'Mechanical@perfectsys@2026');
define('ADMIN_CREDENTIALS_FILE', 'admin.json');
define('ADMIN_LOGIN_NOTE_FILE', DATA_DIR . '/admin-login.txt');

function get_admin_credentials() {
    $data = load_json(ADMIN_CREDENTIALS_FILE, null);
    if ($data === null || empty($data['username']) || empty($data['passwordHash'])) {
        // First run: bootstrap the credential store from the defaults and write the reference note.
        $data = [
            'username' => ADMIN_DEFAULT_USERNAME,
            'passwordHash' => password_hash(ADMIN_DEFAULT_PASSWORD, PASSWORD_DEFAULT),
        ];
        save_json(ADMIN_CREDENTIALS_FILE, $data);
        write_admin_login_note($data['username'], ADMIN_DEFAULT_PASSWORD);
    }
    return $data;
}

// Keeps a plain-text reference of the current admin login in the (HTTP-blocked) data/ folder,
// so it's easy to find in File Manager. Rewritten every time the password changes.
function write_admin_login_note($username, $plainPassword) {
    $lines = [
        'Perfect Mechanical System -- Admin Login',
        'Last updated: ' . date('Y-m-d H:i:s'),
        '',
        'Email: ' . $username,
        'Password: ' . $plainPassword,
        '',
        'This file is auto-updated whenever the admin password is changed from /admin/change-password.php.',
    ];
    @file_put_contents(ADMIN_LOGIN_NOTE_FILE, implode("\n", $lines) . "\n");
}

function admin_verify_credentials($username, $password) {
    $creds = get_admin_credentials();
    return hash_equals($creds['username'], (string) $username) && password_verify($password, $creds['passwordHash']);
}

function admin_change_password($currentPassword, $newPassword) {
    $creds = get_admin_credentials();
    if (!password_verify($currentPassword, $creds['passwordHash'])) {
        return ['ok' => false, 'error' => 'Current password is incorrect.'];
    }
    if (strlen($newPassword) < 8) {
        return ['ok' => false, 'error' => 'New password must be at least 8 characters.'];
    }
    $creds['passwordHash'] = password_hash($newPassword, PASSWORD_DEFAULT);
    save_json(ADMIN_CREDENTIALS_FILE, $creds);
    write_admin_login_note($creds['username'], $newPassword);
    return ['ok' => true];
}

function admin_is_logged_in() {
    return !empty($_SESSION['pms_admin_authed']);
}

function admin_require_login() {
    if (!admin_is_logged_in()) {
        $redirect = $_SERVER['REQUEST_URI'] ?? '/admin/';
        header('Location: /admin/login.php?redirect=' . rawurlencode($redirect));
        exit;
    }
}

// Ensure the credential store (and its plain-text reference note) exist from the very first request.
get_admin_credentials();
