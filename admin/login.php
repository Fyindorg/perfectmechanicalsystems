<?php
require_once __DIR__ . '/includes/auth.php';

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    if (admin_verify_credentials($username, $password)) {
        session_regenerate_id(true);
        $_SESSION['pms_admin_authed'] = true;
        $redirect = $_POST['redirect'] ?? '/admin/';
        if (strpos($redirect, '/admin') !== 0) $redirect = '/admin/';
        header('Location: ' . $redirect);
        exit;
    }
    $error = 'Invalid username or password.';
}

if (admin_is_logged_in()) {
    header('Location: /admin/');
    exit;
}

$redirect = $_GET['redirect'] ?? '/admin/';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Admin Login - Perfect Mechanical System Est.</title>
<link rel="icon" href="/src/assets/pms-logo.png">
<style>body{margin:0;font-family:'Inter',Arial,sans-serif;background:hsl(210 20% 96%);}*{box-sizing:border-box;}</style>
</head>
<body>
<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;">
  <div style="background:#fff;border-radius:16px;padding:40px;max-width:380px;width:100%;box-shadow:0 20px 60px -20px hsl(207 89% 30% / 0.35);border:1px solid hsl(214 25% 88%);">
    <div style="text-align:center;margin-bottom:24px;">
      <img src="/src/assets/pms-logo.png" alt="PMS Logo" style="height:56px;width:auto;margin-bottom:12px;" />
      <h1 style="font-size:18px;font-weight:700;margin:0;">Admin Login</h1>
    </div>
    <?php if ($error): ?>
    <div style="background:hsl(0 84% 55% / 0.12);border:1px solid hsl(0 84% 55% / 0.35);color:hsl(0 70% 40%);padding:10px 14px;border-radius:8px;margin-bottom:16px;font-size:13px;font-weight:600;"><?= htmlspecialchars($error) ?></div>
    <?php endif; ?>
    <form method="post" style="display:flex;flex-direction:column;gap:14px;">
      <input type="hidden" name="redirect" value="<?= htmlspecialchars($redirect) ?>">
      <div>
        <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Username</label>
        <input type="email" name="username" required autofocus style="width:100%;height:42px;padding:0 12px;border:1px solid hsl(214 25% 88%);border-radius:8px;font-size:14px;" />
      </div>
      <div>
        <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Password</label>
        <input type="password" name="password" required style="width:100%;height:42px;padding:0 12px;border:1px solid hsl(214 25% 88%);border-radius:8px;font-size:14px;" />
      </div>
      <button type="submit" style="margin-top:6px;background:hsl(207 89% 42%);color:#fff;font-weight:700;padding:12px;border-radius:8px;border:none;font-size:14px;cursor:pointer;">Log In</button>
    </form>
  </div>
</div>
</body>
</html>
