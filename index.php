<?php
require_once __DIR__ . '/includes/functions.php';
$activePage = 'home';
$pageTitle = t('about.companyName') . ' — ' . t('hero.badge');
require __DIR__ . '/includes/header.php';

$site = get_site();
$contact = get_contact();
$phoneHref = 'tel:' . preg_replace('/[^+\d]/', '', $contact['phone']);
$emailHref = 'mailto:' . $contact['email'];
$heroBg = $site['heroImage'] ? '/' . ltrim($site['heroImage'], '/') : '/src/assets/hero-bg.jpg';
$aboutBg = $site['aboutImage'] ? '/' . ltrim($site['aboutImage'], '/') : '/src/assets/about-bg.jpg';
$brands = array_map(function ($b) {
    $b['logo'] = '/' . ltrim($b['logo'], '/');
    return $b;
}, $site['brands'] ?: []);

$sectorKeys = ['sector.oilGas', 'sector.water', 'sector.fire', 'sector.steam', 'sector.plumbing', 'sector.industrial'];
?>
<main>
  <section style="position:relative;overflow:hidden;background:hsl(207 89% 42%);">
    <div style="position:absolute;inset:0;background-image:url(<?= h($heroBg) ?>);background-size:cover;background-position:center;opacity:0.3;animation:heroZoom 16s ease-in-out infinite alternate;"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(135deg, hsl(207 89% 12% / 0.9) 0%, hsl(207 89% 28% / 0.7) 100%);"></div>
    <div style="position:relative;max-width:1400px;margin:0 auto;padding:95px 32px;">
      <div style="max-width:720px;">
        <div style="display:inline-flex;align-items:center;gap:8px;background:hsl(0 0% 100% / 0.1);border:1px solid hsl(0 0% 100% / 0.3);color:#fff;font-size:12px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;padding:6px 16px;border-radius:999px;margin-bottom:28px;">
          <span style="width:6px;height:6px;border-radius:50%;background:#fff;display:inline-block;"></span><?= h(t('hero.badge')) ?>
        </div>
        <h1 style="font-size:64px;font-weight:700;color:#fff;line-height:1.05;margin:0 0 24px;letter-spacing:-0.02em;">
          <?= h(t('hero.title1')) ?><br/><span style="color:hsl(0 0% 100% / 0.7);"><?= h(t('hero.title2')) ?></span>
        </h1>
        <p style="font-size:20px;color:hsl(0 0% 100% / 0.8);max-width:640px;margin:0 0 40px;line-height:1.6;"><?= h(t('hero.desc')) ?></p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;">
          <a href="/products" class="hoverscale" style="display:inline-flex;align-items:center;gap:8px;background:#fff;color:hsl(207 89% 42%);font-weight:700;padding:16px 32px;border-radius:12px;font-size:16px;transition:transform .3s ease,box-shadow .3s ease;"><?= h(t('hero.viewProducts')) ?> →</a>
          <a href="/contact" class="hoverscale" style="display:inline-flex;align-items:center;gap:8px;background:hsl(0 0% 100% / 0.1);border:1px solid hsl(0 0% 100% / 0.4);color:#fff;font-weight:600;padding:16px 32px;border-radius:12px;font-size:16px;"><?= h(t('hero.contactUs')) ?></a>
        </div>
      </div>
    </div>
  </section>

  <section style="padding:96px 0;background:hsl(210 20% 98%);">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;">
      <div>
        <p style="display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:hsl(207 89% 42%);margin:0 0 16px;">
          <span style="width:24px;height:1px;background:hsl(207 89% 42%);display:inline-block;"></span><?= h(t('home.whoWeAre')) ?>
        </p>
        <h2 style="font-size:40px;font-weight:700;line-height:1.2;margin:0 0 24px;letter-spacing:-0.02em;"><?= h(t('home.aboutTitle')) ?></h2>
        <p style="color:hsl(215 20% 50%);line-height:1.7;margin:0 0 20px;"><?= h(t('home.aboutP1')) ?></p>
        <p style="color:hsl(215 20% 50%);line-height:1.7;margin:0 0 32px;"><?= h(t('home.aboutP2')) ?></p>
        <ul style="display:grid;grid-template-columns:1fr 1fr;gap:12px 16px;list-style:none;margin:0 0 40px;padding:0;">
          <?php foreach ($sectorKeys as $sk): ?>
          <li style="display:flex;align-items:center;gap:10px;font-size:14px;font-weight:500;">
            <span style="width:20px;height:20px;border-radius:50%;background:hsl(207 89% 42% / 0.1);flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="hsl(207 89% 42%)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </span><?= h(t($sk)) ?>
          </li>
          <?php endforeach; ?>
        </ul>
        <a href="/about-us" style="display:inline-flex;align-items:center;gap:8px;background:hsl(207 89% 42%);color:#fff;font-weight:600;padding:14px 28px;border-radius:12px;"><?= h(t('home.learnMore')) ?> →</a>
      </div>
      <div style="border-radius:24px;overflow:hidden;box-shadow:0 20px 60px -20px hsl(207 89% 30% / 0.35);aspect-ratio:16/15;">
        <img src="<?= h($aboutBg) ?>" alt="Mechanical pipe systems and industrial fittings" style="width:100%;height:100%;object-fit:cover;display:block;" />
      </div>
    </div>
  </section>

  <section style="padding:96px 0;background:hsl(210 20% 96%);">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;">
      <div style="text-align:center;max-width:640px;margin:0 auto 56px;">
        <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:hsl(207 89% 42%);margin:0 0 16px;"><?= h(t('brands.ourPartners')) ?></p>
        <h2 style="font-size:40px;font-weight:700;margin:0 0 20px;letter-spacing:-0.02em;"><?= h(t('brands.title')) ?></h2>
        <p style="color:hsl(215 20% 50%);font-size:18px;margin:0;"><?= h(t('brands.desc')) ?></p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px;">
        <?php foreach ($brands as $brand): ?>
        <div class="hoverlift" style="background:#fff;border-radius:16px;padding:20px;text-align:center;border:1px solid hsl(214 25% 88%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;min-height:140px;box-shadow:0 1px 2px hsl(207 30% 20% / 0.04), 0 8px 24px -8px hsl(207 89% 42% / 0.12);">
          <div style="flex:1;display:flex;align-items:center;justify-content:center;width:100%;overflow:hidden;">
            <img src="<?= h($brand['logo']) ?>" alt="<?= h($brand['name']) ?> logo" loading="lazy" style="height:48px;width:auto;max-width:110px;object-fit:contain;" />
          </div>
          <span style="font-size:12px;font-weight:600;line-height:1.3;text-align:center;"><?= h($brand['name']) ?></span>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section style="padding:96px 0;background:hsl(207 89% 42%);text-align:center;">
    <div style="max-width:720px;margin:0 auto;padding:0 32px;">
      <h2 style="font-size:40px;font-weight:700;color:#fff;margin:0 0 20px;letter-spacing:-0.02em;"><?= h(t('cta.title')) ?></h2>
      <p style="color:hsl(0 0% 100% / 0.8);font-size:18px;margin:0 0 40px;line-height:1.6;"><?= h(t('cta.desc')) ?></p>
      <a href="/products" class="hoverscale" style="display:inline-flex;align-items:center;gap:8px;background:#fff;color:hsl(207 89% 42%);font-weight:700;padding:16px 40px;border-radius:12px;"><?= h(t('cta.browse')) ?> →</a>
    </div>
  </section>

  <section style="padding:64px 0;background:hsl(210 20% 98%);border-top:1px solid hsl(214 25% 88%);">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;">
      <a href="<?= h($phoneHref) ?>" class="hoverlift" style="display:flex;align-items:center;gap:16px;padding:24px;background:#fff;border:1px solid hsl(214 25% 88%);border-radius:16px;">
        <div style="width:56px;height:56px;border-radius:16px;background:hsl(207 89% 42% / 0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="hsl(207 89% 42%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
        <div><div style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:hsl(215 20% 50%);font-weight:600;margin-bottom:4px;"><?= h(t('contact.phone')) ?></div><div dir="ltr" style="font-weight:700;color:hsl(210 30% 10%);unicode-bidi:isolate;"><?= h($contact['phone']) ?></div></div>
      </a>
      <a href="<?= h($emailHref) ?>" class="hoverlift" style="display:flex;align-items:center;gap:16px;padding:24px;background:#fff;border:1px solid hsl(214 25% 88%);border-radius:16px;">
        <div style="width:56px;height:56px;border-radius:16px;background:hsl(207 89% 42% / 0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="hsl(207 89% 42%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 6-10 7L2 6"></path></svg></div>
        <div style="min-width:0;"><div style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:hsl(215 20% 50%);font-weight:600;margin-bottom:4px;"><?= h(t('contact.email')) ?></div><div style="font-weight:700;color:hsl(210 30% 10%);font-size:14px;"><?= h($contact['email']) ?></div></div>
      </a>
      <div class="hoverlift" style="display:flex;align-items:center;gap:16px;padding:24px;background:#fff;border:1px solid hsl(214 25% 88%);border-radius:16px;">
        <div style="width:56px;height:56px;border-radius:16px;background:hsl(207 89% 42% / 0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="hsl(207 89% 42%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
        <div><div style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:hsl(215 20% 50%);font-weight:600;margin-bottom:4px;"><?= h(t('contact.address')) ?></div><div style="font-weight:700;color:hsl(210 30% 10%);font-size:14px;"><?= h($contact['addressLine1']) ?></div></div>
      </div>
    </div>
  </section>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
