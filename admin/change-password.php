<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

$adminActiveTab = 'change-password';
require __DIR__ . '/includes/layout.php';
?>
<div style="background:#fff;border-radius:16px;border:1px solid hsl(214 25% 88%);padding:24px;max-width:420px;">
  <h3 style="font-size:16px;font-weight:700;margin:0 0 16px;">Change Password</h3>
  <form method="post" action="/admin/change-password-save.php" style="display:flex;flex-direction:column;gap:14px;">
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Current Password</label>
      <input type="password" name="current_password" required style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">New Password</label>
      <input type="password" name="new_password" required minlength="8" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <div>
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:6px;">Confirm New Password</label>
      <input type="password" name="confirm_password" required minlength="8" style="width:100%;height:38px;padding:0 10px;border:1px solid hsl(214 25% 88%);border-radius:6px;font-size:13px;" />
    </div>
    <p style="font-size:11px;color:hsl(215 20% 50%);margin:0;">New password must be at least 8 characters.</p>
    <div style="display:flex;gap:10px;margin-top:6px;">
      <button type="submit" style="background:hsl(207 89% 42%);color:#fff;font-weight:700;font-size:13px;padding:10px 20px;border-radius:6px;border:none;cursor:pointer;">Update Password</button>
    </div>
  </form>
</div>
<?php require __DIR__ . '/includes/layout-footer.php'; ?>
