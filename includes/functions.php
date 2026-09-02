<?php
// Core data + helper functions for the Perfect Mechanical System site.

define('DATA_DIR', __DIR__ . '/../data');
define('SITE_ROOT', dirname(__DIR__));
define('PRODUCT_IMAGES_DIR', SITE_ROOT . '/src/assets/products');
define('PRODUCT_IMAGES_URL', '/src/assets/products');
define('PLACEHOLDER_IMAGE', '/src/assets/products/product-placeholder.jpg');
define('PAGE_SIZE', 40);

// ---------- JSON storage helpers (simple flat-file "database") ----------

function load_json($name, $default = []) {
    $path = DATA_DIR . '/' . $name;
    if (!file_exists($path)) return $default;
    $fp = fopen($path, 'r');
    if (!$fp) return $default;
    flock($fp, LOCK_SH);
    $raw = stream_get_contents($fp);
    flock($fp, LOCK_UN);
    fclose($fp);
    $data = json_decode($raw, true);
    return $data === null ? $default : $data;
}

function save_json($name, $data) {
    $path = DATA_DIR . '/' . $name;
    $fp = fopen($path, 'c+');
    if (!$fp) return false;
    flock($fp, LOCK_EX);
    ftruncate($fp, 0);
    fwrite($fp, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);
    return true;
}

function get_products() { return load_json('products.json', []); }
function save_products($p) { save_json('products.json', $p); }

function get_categories() {
    $cats = load_json('categories.json', null);
    if ($cats === null) {
        $products = get_products();
        $cats = array_values(array_unique(array_map(function ($p) { return $p['category']; }, $products)));
        sort($cats);
    }
    return $cats;
}
function save_categories($c) { save_json('categories.json', $c); }

function get_catalogs() { return load_json('catalogs.json', []); }
function save_catalogs($c) { save_json('catalogs.json', $c); }

function get_contact() {
    return load_json('contact.json', [
        'phone' => '+966 551 040 126',
        'email' => 'info@perfectmechanicalsystem.com',
        'addressLine1' => 'Al Malaz, Salah Ad Din Al Ayyubi Road',
        'addressLine2' => 'Riyadh, Kingdom of Saudi Arabia',
        'hours1' => 'Sunday – Thursday: 8:00 AM – 5:00 PM',
        'hours2' => 'Friday & Saturday: Closed',
        'whatsapp' => '966551040126',
    ]);
}
function save_contact($c) { save_json('contact.json', $c); }

function get_site() { return load_json('site.json', ['heroImage' => null, 'aboutImage' => null, 'brands' => []]); }
function save_site($s) { save_json('site.json', $s); }

// ---------- Misc helpers ----------

function slugify($s) {
    $s = strtolower(trim((string) $s));
    $s = preg_replace('/[^a-z0-9]+/', '-', $s);
    $s = trim($s, '-');
    return $s;
}

function h($s) { return htmlspecialchars((string) ($s ?? ''), ENT_QUOTES, 'UTF-8'); }

function find_product_by_id($id) {
    foreach (get_products() as $p) {
        if ($p['id'] === $id) return $p;
    }
    return null;
}

function find_product_by_slug($slug) {
    foreach (get_products() as $p) {
        if (slugify($p['title']) === $slug) return $p;
    }
    return null;
}

function product_image_url($p) {
    if (!empty($p['image'])) {
        $rel = ltrim($p['image'], '/');
        // Stored product images live under src/assets/products/
        $candidate = SITE_ROOT . '/src/assets/products/' . basename($rel);
        if (file_exists($candidate)) {
            return PRODUCT_IMAGES_URL . '/' . rawurlencode(basename($rel));
        }
    }
    return PLACEHOLDER_IMAGE;
}

function build_seo_description($p) {
    $brand = !empty($p['brand']) ? $p['brand'] : 'this brand';
    $category = strtolower(!empty($p['category']) ? $p['category'] : 'product');
    $title = !empty($p['title']) ? $p['title'] : (!empty($p['category']) ? $p['category'] : 'This product');
    $text = $title . ' is supplied by Perfect Mechanical System Est. as part of our ' . $brand . ' ' . $category . ' range, sourced for oil & gas, water, steam, and fire fighting projects across Saudi Arabia. ';
    if (!empty($p['sizeRange'])) $text .= 'It is available in size range ' . $p['sizeRange'] . ', suiting a wide variety of pipeline diameters and installation requirements. ';
    if (!empty($p['materials'])) $text .= 'Constructed from ' . $p['materials'] . ' for durability and long-term performance in demanding industrial environments. ';
    if (!empty($p['standards'])) $text .= 'Manufactured to meet ' . $p['standards'] . ', ensuring compliance with recognized international quality and safety benchmarks. ';
    $text .= 'As an authorized distributor, we guarantee genuine ' . $brand . ' parts, competitive pricing, and technical support for contractors and traders throughout the Kingdom.';
    if (strlen($text) > 560) $text = rtrim(substr($text, 0, 557)) . '...';
    return $text;
}

function whatsapp_href($whatsapp, $message) {
    return 'https://wa.me/' . $whatsapp . '?text=' . rawurlencode($message);
}

// ---------- Translations / language ----------

function load_translations() {
    static $tr = null;
    if ($tr === null) $tr = load_json('translations.json', []);
    return $tr;
}

function current_lang() {
    static $lang = null;
    if ($lang !== null) return $lang;
    if (isset($_GET['lang']) && in_array($_GET['lang'], ['en', 'ar'], true)) {
        $lang = $_GET['lang'];
        if (!headers_sent()) setcookie('pms_lang', $lang, time() + 60 * 60 * 24 * 365, '/');
        return $lang;
    }
    if (isset($_COOKIE['pms_lang']) && in_array($_COOKIE['pms_lang'], ['en', 'ar'], true)) {
        $lang = $_COOKIE['pms_lang'];
        return $lang;
    }
    $lang = 'en';
    return $lang;
}

function t($key) {
    $tr = load_translations();
    $lang = current_lang();
    if (!isset($tr[$key])) return $key;
    return $tr[$key][$lang] ?? ($tr[$key]['en'] ?? $key);
}

function lang_toggle_url() {
    $target = current_lang() === 'ar' ? 'en' : 'ar';
    $params = $_GET;
    $params['lang'] = $target;
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    return $path . '?' . http_build_query($params);
}

function url_with_params($path, $overrides = []) {
    $params = array_merge($_GET, $overrides);
    foreach ($params as $k => $v) {
        if ($v === null || $v === '' || $v === 'ALL') unset($params[$k]);
    }
    $qs = http_build_query($params);
    return $path . ($qs ? '?' . $qs : '');
}

// ---------- Pagination helper for the /products listing ----------

function products_page_url($page, $overrides = []) {
    $base = $page <= 1 ? '/products' : '/products-page-' . $page;
    $overrides['page'] = null; // page number is encoded in the path itself, never as a query param
    return url_with_params($base, $overrides);
}
