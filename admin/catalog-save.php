<?php
require_once __DIR__ . '/includes/auth.php';
admin_require_login();
require_once __DIR__ . '/../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /admin/catalogs.php');
    exit;
}

$title = trim($_POST['title'] ?? '');
$originalFile = trim($_POST['original_file'] ?? '');
$isNew = $originalFile === '';

if ($title === '') {
    header('Location: /admin/catalogs.php?error=' . rawurlencode('Title is required.'));
    exit;
}

$catalogsDir = SITE_ROOT . '/catalogs';
if (!is_dir($catalogsDir)) mkdir($catalogsDir, 0755, true);

$catalogs = get_catalogs();
$fileSlug = $isNew ? slugify($title) : $originalFile;

// Ensure uniqueness for new catalogs
if ($isNew) {
    $base = $fileSlug;
    $n = 1;
    $existingFiles = array_map(function ($c) { return $c['file']; }, $catalogs);
    while (in_array($fileSlug, $existingFiles, true)) {
        $fileSlug = $base . '-' . (++$n);
    }
}

$uploadedPdf = false;
if (!empty($_FILES['pdf']) && $_FILES['pdf']['error'] === UPLOAD_ERR_OK) {
    $ext = strtolower(pathinfo($_FILES['pdf']['name'], PATHINFO_EXTENSION));
    if ($ext === 'pdf') {
        if (move_uploaded_file($_FILES['pdf']['tmp_name'], $catalogsDir . '/' . $fileSlug . '.pdf')) {
            $uploadedPdf = true;
        }
    }
}

if ($isNew && !$uploadedPdf) {
    header('Location: /admin/catalogs.php?add=1&error=' . rawurlencode('A PDF file is required for a new catalog.'));
    exit;
}

$entry = [
    'file' => $fileSlug,
    'title' => $title,
    'thumb' => 'catalogs/thumbs/' . $fileSlug . '.jpg',
    'pdf' => 'catalogs/' . $fileSlug . '.pdf',
];

if ($isNew) {
    $catalogs[] = $entry;
} else {
    foreach ($catalogs as &$c) {
        if ($c['file'] === $originalFile) {
            $c = $entry;
            break;
        }
    }
    unset($c);
}

save_catalogs($catalogs);

header('Location: /admin/catalogs.php?saved=1');
exit;
