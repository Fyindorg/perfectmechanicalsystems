<?php
require_once __DIR__ . '/includes/functions.php';
$activePage = 'about';
$pageTitle = t('about.header') . ' — ' . t('about.companyName');
require __DIR__ . '/includes/header.php';

$site = get_site();
$contact = get_contact();
$phoneHref = 'tel:' . preg_replace('/[^+\d]/', '', $contact['phone']);
$emailHref = 'mailto:' . $contact['email'];
$aboutBg = $site['aboutImage'] ? '/' . ltrim($site['aboutImage'], '/') : '/src/assets/about-bg.jpg';
$brands = array_map(function ($b) {
    $b['logo'] = '/' . ltrim($b['logo'], '/');
    return $b;
}, $site['brands'] ?: []);

$sectorKeys = ['about.sector1', 'about.sector2', 'about.sector3', 'about.sector4', 'about.sector5', 'about.sector6', 'about.sector7', 'about.sector8'];
?>
<main>
  <section style="position:relative;overflow:hidden;background:hsl(207 89% 42%);color:#fff;">
    <div style="position:absolute;inset:0;background-image:url(<?= h($aboutBg) ?>);background-size:cover;background-position:center;opacity:0.25;"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(135deg, hsl(207 89% 12% / 0.9) 0%, hsl(207 89% 28% / 0.6) 100%);"></div>
    <div style="position:relative;max-width:1400px;margin:0 auto;padding:112px 32px;">
      <div style="max-width:720px;">
        <p style="display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.2em;color:hsl(0 0% 100% / 0.8);margin:0 0 16px;"><span style="width:24px;height:1px;background:hsl(0 0% 100% / 0.6);display:inline-block;"></span><?= h(t('about.header')) ?></p>
        <h1 style="font-size:56px;font-weight:700;color:#fff;margin:0 0 20px;line-height:1.15;letter-spacing:-0.02em;"><?= h(t('about.companyName')) ?></h1>
        <p style="color:hsl(0 0% 100% / 0.8);font-size:18px;max-width:640px;line-height:1.6;"><?= h(t('about.headerDesc')) ?></p>
      </div>
    </div>
  </section>

  <section style="padding:96px 0;background:hsl(210 20% 98%);">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:5fr 7fr;gap:56px;">
      <div>
        <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:hsl(207 89% 42%);margin:0 0 16px;"><?= h(t('about.intro')) ?></p>
        <h2 style="font-size:40px;font-weight:700;margin:0 0 24px;line-height:1.2;letter-spacing:-0.02em;"><?= h(t('about.whoWeAre')) ?></h2>
        <p style="color:hsl(215 20% 50%);font-size:17px;line-height:1.7;"><?= h(t('about.introText')) ?></p>
      </div>
      <div style="background:#fff;border-radius:24px;padding:40px;border:1px solid hsl(214 25% 88%);box-shadow:0 20px 60px -20px hsl(207 89% 30% / 0.35);">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px;">
          <div style="width:48px;height:48px;border-radius:16px;background:linear-gradient(135deg, hsl(207 89% 28%), hsl(207 89% 48%));flex-shrink:0;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
          <div><div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:hsl(207 89% 42%);"><?= h(t('about.intro')) ?></div><div style="font-size:20px;font-weight:700;"><?= h(t('about.sectorsWeServe')) ?></div></div>
        </div>
        <ul style="display:grid;grid-template-columns:1fr 1fr;gap:12px;list-style:none;margin:0;padding:0;">
          <?php foreach ($sectorKeys as $i => $sk): ?>
          <li style="display:flex;align-items:flex-start;gap:12px;padding:16px;border-radius:12px;background:hsl(210 20% 96% / 0.6);">
            <span style="font-size:12px;font-weight:700;color:hsl(207 89% 42% / 0.4);width:20px;flex-shrink:0;"><?= sprintf('%02d', $i + 1) ?></span>
            <span style="font-size:14px;font-weight:500;"><?= h(t($sk)) ?></span>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </section>

  <section style="padding:96px 0;background:hsl(210 20% 96%);">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;">
      <div style="text-align:center;max-width:640px;margin:0 auto 56px;">
        <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:hsl(207 89% 42%);margin:0 0 16px;"><?= h(t('about.foundation')) ?></p>
        <h2 style="font-size:40px;font-weight:700;margin:0;letter-spacing:-0.02em;"><?= h(t('about.vmv')) ?></h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;">
        <div style="background:#fff;border-radius:24px;padding:32px;border:1px solid hsl(214 25% 88%);">
          <div style="width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg, hsl(207 89% 28%), hsl(207 89% 48%));margin-bottom:24px;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
          <h3 style="font-size:24px;font-weight:700;margin:0 0 12px;"><?= h(t('about.vision')) ?></h3>
          <p style="color:hsl(215 20% 50%);line-height:1.7;font-size:14px;"><?= h(t('about.visionDesc')) ?></p>
        </div>
        <div style="background:#fff;border-radius:24px;padding:32px;border:1px solid hsl(214 25% 88%);">
          <div style="width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg, hsl(207 89% 28%), hsl(207 89% 48%));margin-bottom:24px;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg></div>
          <h3 style="font-size:24px;font-weight:700;margin:0 0 12px;"><?= h(t('about.mission')) ?></h3>
          <p style="color:hsl(215 20% 50%);line-height:1.7;font-size:14px;"><?= h(t('about.missionDesc')) ?></p>
        </div>
        <div style="background:#fff;border-radius:24px;padding:32px;border:1px solid hsl(214 25% 88%);">
          <div style="width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg, hsl(207 89% 28%), hsl(207 89% 48%));margin-bottom:24px;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
          <h3 style="font-size:24px;font-weight:700;margin:0 0 12px;"><?= h(t('about.values')) ?></h3>
          <p style="color:hsl(215 20% 50%);line-height:1.7;font-size:14px;"><?= h(t('about.valuesDesc')) ?></p>
        </div>
      </div>
    </div>
  </section>

  <section style="padding:80px 0;background:hsl(207 89% 42%);color:#fff;text-align:center;">
    <div style="max-width:720px;margin:0 auto;padding:0 32px;">
      <div style="display:inline-flex;width:64px;height:64px;border-radius:16px;background:hsl(0 0% 100% / 0.15);border:1px solid hsl(0 0% 100% / 0.3);align-items:center;justify-content:center;margin-bottom:24px;"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg></div>
      <h2 style="font-size:32px;font-weight:700;margin:0 0 20px;letter-spacing:-0.02em;"><?= h(t('about.authDistributor')) ?></h2>
      <p style="color:hsl(0 0% 100% / 0.85);font-size:18px;line-height:1.6;"><?= h(t('about.authDesc')) ?></p>
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

  <section style="padding:64px 0;background:hsl(210 20% 96%);border-top:1px solid hsl(214 25% 88%);">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;">
      <div style="background:#fff;border-radius:24px;padding:48px;border:1px solid hsl(214 25% 88%);box-shadow:0 20px 60px -20px hsl(207 89% 30% / 0.35);max-width:1100px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:32px;flex-wrap:wrap;">
        <div>
          <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:hsl(207 89% 42%);margin:0 0 12px;"><?= h(t('about.getInTouch')) ?></p>
          <h2 style="font-size:28px;font-weight:700;margin:0 0 20px;"><?= h(t('about.getInTouch')) ?></h2>
          <div style="display:flex;gap:32px;flex-wrap:wrap;font-size:14px;font-weight:500;">
            <a href="<?= h($phoneHref) ?>" style="display:flex;align-items:center;gap:8px;"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="hsl(207 89% 42%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><span dir="ltr" style="unicode-bidi:isolate;"><?= h($contact['phone']) ?></span></a>
            <a href="<?= h($emailHref) ?>" style="display:flex;align-items:center;gap:8px;"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="hsl(207 89% 42%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 6-10 7L2 6"></path></svg><?= h($contact['email']) ?></a>
            <span style="display:flex;align-items:center;gap:8px;color:hsl(210 30% 10%);"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="hsl(207 89% 42%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><?= h($contact['addressLine1']) ?></span>
          </div>
        </div>
        <a href="/contact" style="display:inline-flex;align-items:center;gap:8px;background:hsl(207 89% 42%);color:#fff;font-weight:600;padding:14px 28px;border-radius:12px;white-space:nowrap;"><?= h(t('home.contactCta')) ?> →</a>
      </div>
    </div>
  </section>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
