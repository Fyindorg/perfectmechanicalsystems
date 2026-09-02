<?php
// Shared page footer. Requires functions.php to already be loaded (via header.php).
$contact = get_contact();
$isRTL = current_lang() === 'ar';
$phoneHref = 'tel:' . preg_replace('/[^+\d]/', '', $contact['phone']);
$emailHref = 'mailto:' . $contact['email'];
$whatsappHref = whatsapp_href($contact['whatsapp'], "Hello! I'm interested in your products and services.");

$footerLinks = [
    ['href' => '/', 'label' => t('nav.home')],
    ['href' => '/about-us', 'label' => t('nav.about')],
    ['href' => '/products', 'label' => t('nav.products')],
    ['href' => '/catalogs', 'label' => t('nav.catalogs')],
    ['href' => '/contact', 'label' => t('nav.contact')],
];
$footerBrandNames = ['CRANE', 'WIKA', 'PEGLER', 'Mueller Co.', 'POTTER', 'HITACHI METALS, LTD', 'NATIONAL', 'BOTH-WELL'];
?>
  <footer style="background:hsl(207 89% 8%);color:#fff;">
    <div style="max-width:1400px;margin:0 auto;padding:56px 32px;display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;">
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <img src="/src/assets/pms-logo.png" alt="PMS Logo" style="height:56px;width:auto;" />
          <div><div style="font-weight:700;font-size:16px;"><?= h(t('about.companyName')) ?></div><div style="color:hsl(207 89% 42%);font-size:12px;"><?= h($contact['addressLine2']) ?></div></div>
        </div>
        <p style="color:hsl(0 0% 100% / 0.6);font-size:14px;line-height:1.7;max-width:380px;"><?= h(t('footer.desc')) ?></p>
        <div style="margin-top:20px;display:flex;flex-direction:column;gap:8px;font-size:14px;">
          <a href="<?= h($phoneHref) ?>" dir="ltr" style="color:hsl(0 0% 100% / 0.7);unicode-bidi:isolate;text-align:<?= $isRTL ? 'right' : 'left' ?>;"><?= h($contact['phone']) ?></a>
          <a href="<?= h($emailHref) ?>" style="color:hsl(0 0% 100% / 0.7);"><?= h($contact['email']) ?></a>
          <span style="color:hsl(0 0% 100% / 0.7);"><?= h($contact['addressLine1']) ?>, <?= h($contact['addressLine2']) ?></span>
        </div>
      </div>
      <div>
        <h3 style="font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 16px;"><?= h(t('footer.quickLinks')) ?></h3>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;">
          <?php foreach ($footerLinks as $l): ?>
          <li><a href="<?= h($l['href']) ?>" style="color:hsl(0 0% 100% / 0.6);font-size:14px;"><?= h($l['label']) ?></a></li>
          <?php endforeach; ?>
        </ul>
      </div>
      <div>
        <h3 style="font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 16px;"><?= h(t('footer.keyBrands')) ?></h3>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;">
          <?php foreach ($footerBrandNames as $name): ?>
          <li><a href="/products" style="color:hsl(0 0% 100% / 0.6);font-size:14px;"><?= h($name) ?></a></li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
    <div style="border-top:1px solid hsl(0 0% 100% / 0.1);">
      <div style="max-width:1400px;margin:0 auto;padding:20px 32px;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;text-align:center;font-size:12px;color:hsl(0 0% 100% / 0.4);">
        <span>© <?= date('Y') ?> <?= h(t('about.companyName')) ?> <?= h(t('footer.rights')) ?></span>
        <a href="/admin/" style="color:hsl(0 0% 100% / 0.35);">Admin</a>
      </div>
    </div>
  </footer>

  <a href="<?= h($whatsappHref) ?>" target="_blank" rel="noopener noreferrer" class="wa-fab" style="position:fixed;bottom:24px;<?= $isRTL ? 'left' : 'right' ?>:24px;z-index:50;text-decoration:none;">
    <span class="wa-label-wrap"><span style="display:inline-block;background:hsl(207 89% 42%);color:#fff;font-size:14px;font-weight:600;padding:10px 16px;border-radius:999px;white-space:nowrap;"><?= h(t('fab.chatWhatsapp')) ?></span></span>
    <span style="width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 30px -8px hsl(207 89% 30% / 0.5);flex-shrink:0;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white" aria-hidden="true"><path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.628 4.56 1.724 6.474L2.667 29.333l6.998-1.698A13.28 13.28 0 0 0 16.004 29.333c7.36 0 13.33-5.973 13.33-13.333S23.363 2.667 16.004 2.667zm0 2.4c6.038 0 10.933 4.895 10.933 10.933 0 6.038-4.895 10.933-10.933 10.933a10.89 10.89 0 0 1-5.56-1.524l-.4-.24-4.153 1.008 1.04-4.053-.264-.42A10.893 10.893 0 0 1 5.07 16c0-6.038 4.895-10.933 10.933-10.933zm-3.6 5.28c-.2 0-.52.075-.79.37-.27.296-1.032 1.008-1.032 2.46s1.056 2.854 1.204 3.053c.147.2 2.068 3.16 5.012 4.43.7.304 1.247.484 1.673.62.702.224 1.342.192 1.848.117.563-.083 1.733-.708 1.978-1.392.246-.683.246-1.27.172-1.393-.073-.12-.27-.196-.565-.343-.296-.147-1.748-.862-2.02-.96-.27-.1-.466-.147-.663.148-.196.295-.76.96-.93 1.156-.172.196-.344.22-.64.074-.296-.148-1.248-.46-2.376-1.467-.878-.783-1.47-1.75-1.643-2.045-.172-.296-.018-.456.13-.603.132-.133.295-.345.444-.518.147-.172.196-.295.295-.492.1-.196.05-.37-.025-.517-.074-.147-.663-1.6-.908-2.19-.24-.575-.484-.497-.663-.507-.172-.009-.37-.011-.566-.011z"/></svg>
    </span>
  </a>

</div>
</body>
</html>
