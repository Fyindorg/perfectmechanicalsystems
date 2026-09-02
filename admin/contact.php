<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

$contact = get_contact();
$isEditing = isset($_GET['edit']);

$adminActiveTab = 'contact';
require __DIR__ . '/includes/layout.php';
?>
<div style="background:#fff;border-radius:16px;border:1px solid hsl(214 25% 88%);padding:24px;max-width:560px;">
  <?php if (!$isEditing): ?>
  <div style="display:flex;flex-direction:column;gap:6px;font-size:14px;">
    <div><b>Phone:</b> <?= h($contact['phone']) ?></div>
    <div><b>Email:</b> <?= h($contact['email']) ?></div>
    <div><b>Address:</b> <?= h($contact['addressLine1']) ?>, <?= h($contact['addressLine2']) ?></div>
    <div><b>Hours:</b> <?= h($contact['hours1']) ?> · <?= h($contact['hours2']) ?></div>
    <div><b>WhatsApp:</b> <?= h($contact['whatsapp']) ?></div>
  </div>
  <a href="/admin/contact.php?edit=1" style="display:inline-block;margin-top:16px;background:hsl(207 89% 42%);color:#fff;font-weight:600;font-size:13px;padding:9px 18px;border-radius:6px;">Edit Contact Info</a>
  <?php else: ?>
  <form method="post" action="/admin/contact-save.php" style="display:flex;flex-direction:column;gap:12px;">
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Phone Number</label>
      <input type="text" name="phone" value="<?= h($contact['phone']) ?>" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Email Address</label>
      <input type="text" name="email" value="<?= h($contact['email']) ?>" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Address Line 1</label>
      <input type="text" name="addressLine1" value="<?= h($contact['addressLine1']) ?>" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Address Line 2</label>
      <input type="text" name="addressLine2" value="<?= h($contact['addressLine2']) ?>" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Business Hours — Line 1</label>
      <input type="text" name="hours1" value="<?= h($contact['hours1']) ?>" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Business Hours — Line 2</label>
      <input type="text" name="hours2" value="<?= h($contact['hours2']) ?>" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">WhatsApp Number (digits only, with country code)</label>
      <input type="text" name="whatsapp" value="<?= h($contact['whatsapp']) ?>" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <div style="display:flex;gap:10px;margin-top:6px;">
      <button type="submit" style="background:hsl(207 89% 42%);color:#fff;font-weight:700;font-size:13px;padding:10px 20px;border-radius:6px;border:none;cursor:pointer;">Save</button>
      <a href="/admin/contact.php" style="background:hsl(210 20% 96%);font-weight:600;font-size:13px;padding:10px 20px;border-radius:6px;color:hsl(210 30% 10%);">Cancel</a>
    </div>
  </form>
  <?php endif; ?>
</div>
<?php require __DIR__ . '/includes/layout-footer.php'; ?>
