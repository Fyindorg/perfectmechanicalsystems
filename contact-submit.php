<?php
require_once __DIR__ . '/includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contact');
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    header('Location: /contact');
    exit;
}

$contact = get_contact();
$to = $contact['email'];
$mailSubject = 'Website Contact Form: ' . ($subject !== '' ? $subject : 'New Enquiry');
$body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\n\nMessage:\n$message\n";
$headers = "From: website@perfectmechanicalsystem.com\r\nReply-To: " . $email . "\r\nContent-Type: text/plain; charset=UTF-8";

@mail($to, $mailSubject, $body, $headers);

header('Location: /contact?sent=1');
exit;
