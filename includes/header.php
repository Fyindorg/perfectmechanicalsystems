<?php
// Shared page header. Expects $activePage and optionally $pageTitle to be set
// by the including page before requiring this file.
require_once __DIR__ . '/functions.php';

$lang = current_lang();
$isRTL = $lang === 'ar';
$contact = get_contact();
$activePage = $activePage ?? 'home';
$pageTitle = $pageTitle ?? 'Perfect Mechanical System Est.';

$phoneHref = 'tel:' . preg_replace('/[^+\d]/', '', $contact['phone']);
$emailHref = 'mailto:' . $contact['email'];

$navItems = [
    ['key' => 'home', 'href' => '/', 'label' => t('nav.home')],
    ['key' => 'about', 'href' => '/about-us', 'label' => t('nav.about')],
    ['key' => 'products', 'href' => '/products', 'label' => t('nav.products')],
    ['key' => 'catalogs', 'href' => '/catalogs', 'label' => t('nav.catalogs')],
    ['key' => 'contact', 'href' => '/contact', 'label' => t('nav.contact')],
];
?>
<!DOCTYPE html>
<html lang="<?= h($lang) ?>" dir="<?= $isRTL ? 'rtl' : 'ltr' ?>">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= h($pageTitle) ?></title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="icon" href="/src/assets/pms-logo.png">
<style>
  body{margin:0;}
  *{box-sizing:border-box;}
  a{color:hsl(207 89% 42%);text-decoration:none;}
  a:hover{color:hsl(207 89% 28%);}
  input,select,textarea,button{font-family:inherit;}
  @keyframes heroZoom{from{transform:scale(1);}to{transform:scale(1.12);}}
  .wa-fab{display:flex;align-items:center;gap:12px;}
  .wa-fab .wa-label-wrap{max-width:0;opacity:0;overflow:hidden;white-space:nowrap;transition:max-width .35s ease,opacity .35s ease;}
  .wa-fab:hover .wa-label-wrap{max-width:220px;opacity:1;}
  .hoverlift{transition:transform .3s ease,box-shadow .3s ease;}
  .hoverlift:hover{transform:translateY(-4px);box-shadow:0 20px 45px -15px hsl(207 89% 30% / 0.35);}
  .hoverscale:hover{transform:translateY(-3px) scale(1.03);}
  .navlink{padding:8px 20px;border-radius:6px;font-size:14px;font-weight:500;display:inline-block;}
</style>
</head>
<body style="font-family:'Inter',sans-serif;background:hsl(210 20% 98%);color:hsl(210 30% 10%);min-height:100vh;margin:0;">
<div dir="<?= $isRTL ? 'rtl' : 'ltr' ?>">

  <div style="background:hsl(207 89% 42%);color:#fff;padding:8px 0;">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:500;flex-wrap:wrap;gap:8px;">
      <span style="opacity:0.9;"><?= h(t('nav.topBar')) ?></span>
      <div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
        <a href="<?= h($phoneHref) ?>" dir="ltr" style="color:#fff;unicode-bidi:isolate;"><?= h($contact['phone']) ?></a>
        <a href="<?= h($emailHref) ?>" style="color:#fff;"><?= h($contact['email']) ?></a>
      </div>
    </div>
  </div>

  <header style="position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid hsl(214 25% 88%);">
    <nav style="max-width:1400px;margin:0 auto;padding:12px 32px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
      <a href="/" style="display:flex;align-items:center;gap:10px;flex-shrink:0;">
        <img src="/src/assets/pms-logo.png" alt="PMS Logo" style="height:48px;width:auto;display:block;" />
        <div>
          <div style="font-weight:700;color:hsl(207 89% 42%);font-size:16px;line-height:1.2;letter-spacing:-0.02em;"><?= h(t('nav.brandLine1')) ?></div>
          <div style="color:hsl(207 89% 42% / 0.6);font-size:10px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;"><?= h(t('nav.brandLine2')) ?></div>
        </div>
      </a>
      <ul style="display:flex;align-items:center;gap:4px;list-style:none;margin:0;padding:0;flex-wrap:wrap;">
        <?php foreach ($navItems as $item): $active = $item['key'] === $activePage; ?>
        <li>
          <a href="<?= h($item['href']) ?>" class="navlink" style="background:<?= $active ? 'hsl(207 89% 42%)' : 'transparent' ?>;color:<?= $active ? '#fff' : 'hsl(210 30% 10%)' ?>;"><?= h($item['label']) ?></a>
        </li>
        <?php endforeach; ?>
      </ul>
      <div style="display:flex;align-items:center;gap:12px;flex-shrink:0;">
        <a href="<?= h(lang_toggle_url()) ?>" style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:500;color:hsl(207 89% 42%);border:1px solid hsl(207 89% 42% / 0.3);padding:8px 14px;border-radius:6px;background:transparent;">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="hsl(207 89% 42%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg><?= $isRTL ? 'English' : 'العربية' ?>
        </a>
        <a href="<?= h($phoneHref) ?>" style="display:flex;align-items:center;gap:8px;background:hsl(207 89% 42%);color:#fff;font-weight:600;font-size:13px;padding:10px 20px;border-radius:6px;white-space:nowrap;"><?= h(t('nav.callUs')) ?></a>
      </div>
    </nav>
  </header>
