<?php
require_once __DIR__ . '/includes/functions.php';

$activePage = 'contact';
$pageTitle = 'Contact Us - Perfect Mechanical System Est.';

$contact = get_contact();
$phoneHref = 'tel:' . preg_replace('/[^+\d]/', '', $contact['phone']);
$emailHref = 'mailto:' . $contact['email'];
$whatsappHrefProducts = whatsapp_href($contact['whatsapp'], "Hello! I'm interested in your products.");
$mapHref = 'https://maps.app.goo.gl/ctnxPdBxGq6uhyRr8';
$mapEmbedSrc = 'https://www.google.com/maps?q=' . rawurlencode('Perfect Mechanical System - PEGLER - JTPR') . '&output=embed';

$submitted = isset($_GET['sent']);

require __DIR__ . '/includes/header.php';
?>
<main>
  <section style="position:relative;overflow:hidden;background:hsl(207 89% 42%);color:#fff;padding:96px 0;text-align:center;">
    <div style="max-width:720px;margin:0 auto;padding:0 32px;position:relative;">
      <p style="display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.2em;color:hsl(0 0% 100% / 0.8);margin:0 0 16px;"><span style="width:24px;height:1px;background:hsl(0 0% 100% / 0.6);display:inline-block;"></span><?= h(t('contact.getInTouch')) ?></p>
      <h1 style="font-size:56px;font-weight:700;margin:0 0 20px;letter-spacing:-0.02em;"><?= h(t('contact.title')) ?></h1>
      <p style="color:hsl(0 0% 100% / 0.8);font-size:18px;line-height:1.6;"><?= h(t('contact.headerDesc')) ?></p>
    </div>
  </section>

  <section style="max-width:1400px;margin:-48px auto 48px;padding:0 32px;position:relative;z-index:10;">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;">
      <a href="<?= h($phoneHref) ?>" style="background:#fff;border-radius:16px;padding:24px;border:1px solid hsl(214 25% 88%);box-shadow:0 20px 60px -20px hsl(207 89% 30% / 0.35);color:hsl(210 30% 10%);">
        <div style="width:48px;height:48px;border-radius:16px;background:linear-gradient(135deg, hsl(207 89% 28%), hsl(207 89% 48%));margin-bottom:16px;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
        <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:hsl(207 89% 42%);margin-bottom:4px;"><?= h(t('contact.phone')) ?></div>
        <div dir="ltr" style="font-weight:700;font-size:15px;unicode-bidi:isolate;"><?= h($contact['phone']) ?></div>
        <div style="color:hsl(215 20% 50%);font-size:12px;margin-top:6px;"><?= h(t('contact.available')) ?></div>
      </a>
      <a href="<?= h($emailHref) ?>" style="background:#fff;border-radius:16px;padding:24px;border:1px solid hsl(214 25% 88%);box-shadow:0 20px 60px -20px hsl(207 89% 30% / 0.35);color:hsl(210 30% 10%);">
        <div style="width:48px;height:48px;border-radius:16px;background:linear-gradient(135deg, hsl(207 89% 28%), hsl(207 89% 48%));margin-bottom:16px;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 6-10 7L2 6"></path></svg></div>
        <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:hsl(207 89% 42%);margin-bottom:4px;"><?= h(t('contact.email')) ?></div>
        <div style="font-weight:700;font-size:14px;word-break:break-word;"><?= h($contact['email']) ?></div>
        <div style="color:hsl(215 20% 50%);font-size:12px;margin-top:6px;"><?= h(t('contact.respondTime')) ?></div>
      </a>
      <div style="background:#fff;border-radius:16px;padding:24px;border:1px solid hsl(214 25% 88%);">
        <div style="width:48px;height:48px;border-radius:16px;background:linear-gradient(135deg, hsl(207 89% 28%), hsl(207 89% 48%));margin-bottom:16px;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
        <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:hsl(207 89% 42%);margin-bottom:4px;"><?= h(t('contact.physicalAddress')) ?></div>
        <div style="font-weight:700;font-size:15px;"><?= h($contact['addressLine1']) ?></div>
        <div style="color:hsl(215 20% 50%);font-size:12px;margin-top:6px;"><?= h($contact['addressLine2']) ?></div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:24px;border:1px solid hsl(214 25% 88%);">
        <div style="width:48px;height:48px;border-radius:16px;background:linear-gradient(135deg, hsl(207 89% 28%), hsl(207 89% 48%));margin-bottom:16px;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
        <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:hsl(207 89% 42%);margin-bottom:4px;"><?= h(t('contact.businessHours')) ?></div>
        <div style="font-weight:700;font-size:15px;"><?= h($contact['hours1']) ?></div>
        <div style="color:hsl(215 20% 50%);font-size:12px;margin-top:6px;"><?= h($contact['hours2']) ?></div>
      </div>
    </div>
  </section>

  <section style="padding-bottom:96px;background:hsl(210 20% 98%);">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:1fr 1.4fr;gap:48px;align-items:start;">
      <div style="background:hsl(207 89% 42%);color:#fff;border-radius:24px;padding:40px;position:relative;overflow:hidden;">
        <p style="display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.2em;color:hsl(0 0% 100% / 0.8);margin:0 0 16px;"><span style="width:24px;height:1px;background:hsl(0 0% 100% / 0.6);display:inline-block;"></span><?= h(t('contact.info')) ?></p>
        <h2 style="font-size:26px;font-weight:700;margin:0 0 20px;"><?= h(t('contact.getInTouch')) ?></h2>
        <p style="color:hsl(0 0% 100% / 0.8);font-size:15px;line-height:1.6;margin:0 0 32px;"><?= h(t('contact.headerDesc')) ?></p>
        <a href="<?= h($whatsappHrefProducts) ?>" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:16px;padding:20px;background:hsl(0 0% 100% / 0.1);border:1px solid hsl(0 0% 100% / 0.25);border-radius:16px;margin-bottom:16px;color:#fff;">
          <div style="width:48px;height:48px;border-radius:12px;background:#25D366;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="white" aria-hidden="true"><path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.628 4.56 1.724 6.474L2.667 29.333l6.998-1.698A13.28 13.28 0 0 0 16.004 29.333c7.36 0 13.33-5.973 13.33-13.333S23.363 2.667 16.004 2.667zm0 2.4c6.038 0 10.933 4.895 10.933 10.933 0 6.038-4.895 10.933-10.933 10.933a10.89 10.89 0 0 1-5.56-1.524l-.4-.24-4.153 1.008 1.04-4.053-.264-.42A10.893 10.893 0 0 1 5.07 16c0-6.038 4.895-10.933 10.933-10.933zm-3.6 5.28c-.2 0-.52.075-.79.37-.27.296-1.032 1.008-1.032 2.46s1.056 2.854 1.204 3.053c.147.2 2.068 3.16 5.012 4.43.7.304 1.247.484 1.673.62.702.224 1.342.192 1.848.117.563-.083 1.733-.708 1.978-1.392.246-.683.246-1.27.172-1.393-.073-.12-.27-.196-.565-.343-.296-.147-1.748-.862-2.02-.96-.27-.1-.466-.147-.663.148-.196.295-.76.96-.93 1.156-.172.196-.344.22-.64.074-.296-.148-1.248-.46-2.376-1.467-.878-.783-1.47-1.75-1.643-2.045-.172-.296-.018-.456.13-.603.132-.133.295-.345.444-.518.147-.172.196-.295.295-.492.1-.196.05-.37-.025-.517-.074-.147-.663-1.6-.908-2.19-.24-.575-.484-.497-.663-.507-.172-.009-.37-.011-.566-.011z"/></svg></div>
          <div><div style="font-weight:700;font-size:14px;"><?= h(t('contact.whatsapp')) ?></div><div style="color:hsl(0 0% 100% / 0.7);font-size:12px;"><?= h(t('contact.quickResponses')) ?></div></div>
        </a>
        <a href="<?= h($phoneHref) ?>" style="display:flex;align-items:center;gap:16px;padding:20px;background:hsl(0 0% 100% / 0.1);border:1px solid hsl(0 0% 100% / 0.25);border-radius:16px;color:#fff;">
          <div style="width:48px;height:48px;border-radius:12px;background:hsl(0 0% 100% / 0.15);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
          <div><div dir="ltr" style="font-weight:700;font-size:14px;unicode-bidi:isolate;"><?= h($contact['phone']) ?></div><div style="color:hsl(0 0% 100% / 0.7);font-size:12px;"><?= h(t('contact.available')) ?></div></div>
        </a>
      </div>

      <div>
        <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:hsl(207 89% 42%);margin:0 0 12px;"><?= h(t('contact.sendMessage')) ?></p>
        <h2 style="font-size:32px;font-weight:700;margin:0 0 32px;"><?= h(t('contact.sendMessage')) ?></h2>
        <?php if ($submitted): ?>
        <div style="background:#fff;border-radius:24px;padding:40px;border:1px solid hsl(214 25% 88%);box-shadow:0 20px 60px -20px hsl(207 89% 30% / 0.35);text-align:center;">
          <p style="font-size:16px;font-weight:600;color:hsl(207 89% 42%);margin:0;">Thank you! Your message has been sent.</p>
        </div>
        <?php else: ?>
        <form method="post" action="/contact-submit" style="background:#fff;border-radius:24px;padding:40px;border:1px solid hsl(214 25% 88%);box-shadow:0 20px 60px -20px hsl(207 89% 30% / 0.35);display:flex;flex-direction:column;gap:20px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            <div><label style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;"><?= h(t('contact.fullName')) ?> *</label><input name="name" type="text" required placeholder="<?= h(t('contact.yourName')) ?>" style="width:100%;border:1px solid hsl(214 25% 88%);border-radius:12px;padding:12px 16px;font-size:14px;" /></div>
            <div><label style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;"><?= h(t('contact.emailAddress')) ?> *</label><input name="email" type="email" required placeholder="your@email.com" style="width:100%;border:1px solid hsl(214 25% 88%);border-radius:12px;padding:12px 16px;font-size:14px;" /></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            <div><label style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;"><?= h(t('contact.phoneNumber')) ?></label><input name="phone" type="tel" placeholder="+966 5XX XXX XXX" style="width:100%;border:1px solid hsl(214 25% 88%);border-radius:12px;padding:12px 16px;font-size:14px;" /></div>
            <div><label style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;"><?= h(t('contact.subject')) ?></label><input name="subject" type="text" placeholder="<?= h(t('contact.subjectPlaceholder')) ?>" style="width:100%;border:1px solid hsl(214 25% 88%);border-radius:12px;padding:12px 16px;font-size:14px;" /></div>
          </div>
          <div><label style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;"><?= h(t('contact.message')) ?> *</label><textarea name="message" required rows="5" placeholder="<?= h(t('contact.messagePlaceholder')) ?>" style="width:100%;border:1px solid hsl(214 25% 88%);border-radius:12px;padding:12px 16px;font-size:14px;resize:none;"></textarea></div>
          <button type="submit" style="width:100%;background:hsl(207 89% 42%);color:#fff;font-weight:700;padding:16px;border-radius:12px;border:none;font-size:16px;cursor:pointer;"><?= h(t('contact.send')) ?></button>
          <p style="text-align:center;font-size:12px;color:hsl(215 20% 50%);margin:0;"><?= h(t('contact.emailNote')) ?></p>
        </form>
        <?php endif; ?>
      </div>
    </div>
  </section>

  <section style="background:hsl(210 20% 96%);border-top:1px solid hsl(214 25% 88%);padding:64px 0;text-align:center;">
    <div style="max-width:1400px;margin:0 auto;padding:0 32px;">
      <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:hsl(207 89% 42%);margin:0 0 12px;"><?= h(t('contact.physicalAddress')) ?></p>
      <h2 style="font-size:28px;font-weight:700;margin:0 0 12px;"><?= h(t('contact.findUs')) ?></h2>
      <p style="color:hsl(215 20% 50%);margin:0 0 28px;"><?= h($contact['addressLine1']) ?>, <?= h($contact['addressLine2']) ?></p>
      <div style="max-width:640px;margin:0 auto 28px;border-radius:16px;overflow:hidden;border:1px solid hsl(214 25% 88%);box-shadow:0 12px 32px -12px hsl(207 89% 30% / 0.3);">
        <iframe src="<?= h($mapEmbedSrc) ?>" width="100%" height="320" style="border:0;display:block;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Perfect Mechanical System location on Google Maps"></iframe>
      </div>
      <a href="<?= h($mapHref) ?>" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;background:hsl(207 89% 42%);color:#fff;font-weight:600;padding:14px 28px;border-radius:12px;"><?= h(t('contact.viewMap')) ?></a>
    </div>
  </section>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>
