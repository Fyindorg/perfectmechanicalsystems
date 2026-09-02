<?php
// Shared admin layout header. Requires functions.php + auth.php to be loaded, and admin_require_login() already called.
require_once __DIR__ . '/../../includes/functions.php';

$adminActiveTab = $adminActiveTab ?? 'home';
$adminTabs = [
    ['key' => 'home', 'href' => '/admin/', 'label' => 'Home Page'],
    ['key' => 'products', 'href' => '/admin/products.php', 'label' => 'Products'],
    ['key' => 'catalogs', 'href' => '/admin/catalogs.php', 'label' => 'Catalogs'],
    ['key' => 'contact', 'href' => '/admin/contact.php', 'label' => 'Contact Info'],
    ['key' => 'change-password', 'href' => '/admin/change-password.php', 'label' => 'Change Password'],
];
$flash = $_GET['saved'] ?? null;
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Admin Panel - Perfect Mechanical System Est.</title>
<link rel="icon" href="/src/assets/pms-logo.png">
<style>
  body{margin:0;font-family:'Inter',Arial,sans-serif;background:hsl(210 20% 96%);color:hsl(210 30% 10%);}
  *{box-sizing:border-box;}
  a{color:hsl(207 89% 42%);text-decoration:none;}
  input,select,textarea,button{font-family:inherit;}
</style>
</head>
<body>
<div style="min-height:100vh;">
  <div style="background:hsl(207 89% 42%);color:#fff;padding:12px 32px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
    <div style="font-weight:700;font-size:15px;">Perfect Mechanical System — Admin</div>
    <div style="display:flex;align-items:center;gap:16px;font-size:13px;">
      <a href="/" style="color:#fff;">View Site</a>
      <a href="/admin/logout.php" style="color:#fff;">Logout</a>
    </div>
  </div>
  <div style="max-width:1400px;margin:0 auto;padding:32px;">
    <h1 style="font-size:28px;font-weight:700;margin:0 0 6px;">Admin Panel</h1>
    <p style="color:hsl(215 20% 50%);font-size:14px;margin:0 0 24px;">Changes save to the server immediately and are visible to all site visitors right away.</p>

    <?php if ($flash): ?>
    <div style="background:hsl(142 71% 45% / 0.12);border:1px solid hsl(142 71% 45% / 0.35);color:hsl(142 71% 25%);padding:12px 16px;border-radius:8px;margin-bottom:20px;font-size:13px;font-weight:600;">Saved successfully.</div>
    <?php endif; ?>
    <?php if (!empty($_GET['error'])): ?>
    <div style="background:hsl(0 84% 55% / 0.12);border:1px solid hsl(0 84% 55% / 0.35);color:hsl(0 70% 40%);padding:12px 16px;border-radius:8px;margin-bottom:20px;font-size:13px;font-weight:600;"><?= h($_GET['error']) ?></div>
    <?php endif; ?>

    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;border-bottom:1px solid hsl(214 25% 88%);">
      <?php foreach ($adminTabs as $tab): $active = $tab['key'] === $adminActiveTab; ?>
      <a href="<?= h($tab['href']) ?>" style="padding:10px 18px;font-size:14px;font-weight:600;border-bottom:2px solid <?= $active ? 'hsl(207 89% 42%)' : 'transparent' ?>;color:hsl(210 30% 10%);"><?= h($tab['label']) ?></a>
      <?php endforeach; ?>
    </div>
