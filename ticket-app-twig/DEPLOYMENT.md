# Deployment Instructions

## For Local Development

Run from the `stage2-twig/` directory:

```bash
cd stage2-twig
composer install
cd ticket-app-twig
php -S localhost:8000
```

Visit: http://localhost:8000/index.php

## For Production Deployment

### Important: You must deploy the entire `stage2-twig/` folder, not just `ticket-app-twig/`

The application requires:

1. `ticket-app-twig/` - PHP files and templates
2. `vendor/` - Composer dependencies (from parent directory)
3. `public/` - Static assets (copied into ticket-app-twig/public/)

### Option 1: Deploy the entire folder structure

Upload the entire `stage2-twig/` folder to your server, then:

- Set your document root to: `stage2-twig/ticket-app-twig/`
- Ensure `vendor/` folder is accessible from `ticket-app-twig/`

### Option 2: Self-contained deployment (recommended)

If you're deploying ONLY `ticket-app-twig/` folder:

1. **Copy vendor folder into ticket-app-twig:**

   ```bash
   cd stage2-twig
   xcopy /E vendor ticket-app-twig\vendor
   ```

2. **Update PHP files to use local vendor:**
   Change `require_once dirname(__DIR__) . '/vendor/autoload.php';`
   to: `require_once __DIR__ . '/vendor/autoload.php';`

3. Deploy the entire `ticket-app-twig/` folder

## Required Files Structure

```
ticket-app-twig/
├── index.php
├── authlogin.php
├── authsignup.php
├── dashboard.php
├── tickets.php
├── templates/           # Twig templates
│   ├── base.twig
│   ├── index.twig
│   ├── authlogin.twig
│   ├── authsignup.twig
│   ├── dashboard.twig
│   └── tickets.twig
├── public/             # Static assets
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── auth.js
│   │   ├── storage.js
│   │   └── toast.js
│   └── assets/
│       └── wave.svg
└── vendor/             # Composer dependencies
    └── ...
```

## Troubleshooting 404 Errors

If you're getting 404 errors after deployment:

1. **Check document root** - Must point to `ticket-app-twig/` folder
2. **Check vendor folder** - Must be accessible
3. **Check .htaccess** (for Apache) - May need to enable URL rewriting
4. **Verify all files** - Templates, public assets, and vendor folder must be present

## Testing

After deployment, test these URLs:

- `https://yourdomain.com/index.php` - Landing page
- `https://yourdomain.com/authlogin.php` - Login page
- `https://yourdomain.com/authsignup.php` - Signup page
- `https://yourdomain.com/dashboard.php` - Dashboard (requires auth)
- `https://yourdomain.com/tickets.php` - Ticket management (requires auth)

## Environment Requirements

- PHP 8.0 or higher
- Twig 3.x (installed via Composer)
- Web server with PHP support (Apache, Nginx, etc.)
