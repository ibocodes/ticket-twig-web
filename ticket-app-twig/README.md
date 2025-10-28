# Ticket App - Twig Implementation

Self-contained Twig application for ticket management.

## Quick Start

```bash
php -S localhost:8000
```

Visit: http://localhost:8000/index.php

## Files Structure

```
ticket-app-twig/
├── index.php              # Landing page
├── authlogin.php          # Login page
├── authsignup.php         # Signup page
├── dashboard.php          # Dashboard
├── tickets.php            # Ticket management
├── templates/             # Twig templates
│   ├── base.twig
│   ├── index.twig
│   ├── authlogin.twig
│   ├── authsignup.twig
│   ├── dashboard.twig
│   └── tickets.twig
├── public/                # Static assets
│   ├── css/style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── auth.js
│   │   ├── storage.js
│   │   └── toast.js
│   └── assets/wave.svg
└── vendor/               # Composer dependencies
```

## Deploy

Upload the entire `ticket-app-twig/` folder to your web server and point the document root to this folder.

## Test Credentials

Any username/password works:

- Username: `test`
- Password: `test123`

## Features

✅ Landing page with wave background  
✅ Authentication (Login/Signup)  
✅ Dashboard with statistics  
✅ Full CRUD ticket management  
✅ Protected routes  
✅ Responsive design (max-width: 1440px)
