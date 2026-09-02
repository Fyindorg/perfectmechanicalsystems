# Perfect Mechanical System Est. — Website

Server-rendered PHP multi-page website for perfectmechanicalsystem.com, deployed on GoDaddy shared hosting.

## Structure

- `index.php`, `about-us.php`, `products.php`, `product.php`, `catalogs.php`, `contact.php` — public pages
- `includes/` — shared PHP helpers (`functions.php`, `header.php`, footer, etc.) and the file-based JSON "database" access layer
- `data/*.json` — site content (products, categories, catalogs, contact info, translations)
- `admin/` — session-authenticated admin panel (home page, products, catalogs, contact info, change password) with its own `includes/` (`auth.php`, `layout.php`)
- `catalogs/` — downloadable PDF catalogs (not tracked in this repo — ~87MB of PDFs, add separately via the GitHub web UI or a direct push once you have your own git access)
- `src/assets/` — images (product images, logos, etc.)
- `assets/` — compiled CSS/JS

## Notes

- Data is stored as JSON files under `data/`, read/written via `load_json()` / `save_json()` in `includes/functions.php`. This repo's `data/` reflects a snapshot; live product images uploaded through the admin panel are not tracked here (only a placeholder is committed).
- Admin auth uses a hashed credential store (`data/admin.json`, not committed) plus a plaintext reference notepad (`data/admin-login.txt`, not committed) — both blocked from public access via `.htaccess`.
