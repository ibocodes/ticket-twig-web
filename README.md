# Stage 2 Task - Twig Implementation

A complete ticket management web application built with **Twig**, PHP, and vanilla JavaScript.

## Features

✅ **Landing Page** - Hero section with wave SVG background and decorative circles
✅ **Authentication** - Login and Signup with form validation
✅ **Dashboard** - Statistics display (Total, Open, Resolved tickets)
✅ **Ticket Management** - Full CRUD operations (Create, Read, Update, Delete)
✅ **Protected Routes** - Session-based authentication using localStorage
✅ **Responsive Design** - Mobile-first with max-width 1440px container
✅ **Toast Notifications** - User feedback for actions
✅ **Form Validation** - Real-time error messages

## Technologies Used

- **Backend**: PHP 8+
- **Template Engine**: Twig 3.19
- **Styling**: Custom CSS (matching React/Vue design)
- **Frontend**: Vanilla JavaScript (ES6 modules)
- **State Management**: localStorage

## Setup Instructions

### 1. Prerequisites

```bash
# Install PHP 8+ (if not already installed)
# Install Composer (PHP dependency manager)
```

### 2. Install Dependencies

```bash
cd stage2-twig
composer install
```

### 3. Run the Application

```bash
# Navigate to the ticket-app-twig directory
cd ticket-app-twig

# Start PHP built-in server
php -S localhost:8000

# Open in browser: http://localhost:8000/index.php
```

## Application Structure

```
stage2-twig/
├── templates/           # Twig templates
│   ├── base.twig       # Base layout
│   ├── index.twig      # Landing page
│   ├── authlogin.twig  # Login page
│   ├── authsignup.twig # Signup page
│   ├── dashboard.twig  # Dashboard page
│   └── tickets.twig   # Ticket management page
├── ticket-app-twig/    # PHP entry points
│   ├── index.php       # Landing
│   ├── authlogin.php  # Login
│   ├── authsignup.php # Signup
│   ├── dashboard.php  # Dashboard
│   └── tickets.php    # Tickets
├── public/             # Static assets
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript modules
│   └── assets/        # Images (wave.svg, etc.)
└── vendor/            # Composer dependencies
```

## UI Components & State Structure

### Components

- **Base Template**: Shared layout with footer and toast notifications
- **Hero Section**: Wave background SVG, decorative circles, responsive grid
- **Form Components**: Login/Signup with validation, CRUD forms for tickets
- **Card Components**: Reusable cards for stats, tickets, features
- **Status Badges**: Color-coded tags (green=open, amber=in_progress, gray=closed)

### State Management

- **Authentication**: Stored in `localStorage` as `ticketapp_session`
- **Tickets**: Stored in `localStorage` as `ticketapp_tickets_v1`
- **Session Check**: All protected pages verify authentication on load

## Test Credentials

**Any username and password will work** (simulated authentication)

Example:

- Username: `test`
- Password: `test123`

## Protected Routes

- `/dashboard.php` - Requires authentication
- `/tickets.php` - Requires authentication

Unauthenticated users are automatically redirected to `/index.php`

## Known Issues & Notes

- Authentication is simulated using localStorage (no backend server)
- Tickets persist in browser localStorage across sessions
- No server-side session management (client-side only)
- All data is stored locally and won't sync across devices/browsers

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Visible focus states for keyboard navigation
- Sufficient color contrast
- Alt text for decorative images
- Screen reader friendly

## Responsive Breakpoints

- **Mobile**: Stacked layout (< 768px)
- **Tablet/Desktop**: Multi-column grids (≥ 768px)
- **Large**: Max-width 1440px container

## Color Scheme

- Primary: `#2563eb` (Blue)
- Success: `#16a34a` (Green)
- Warning: `#f59e0b` (Amber)
- Muted: `#6b7280` (Gray)
- Background: White to light blue gradient

## Design Consistency

This Twig implementation matches the visual design of the React and Vue versions:

- Identical wave SVG background
- Same decorative circular elements
- Consistent card-based layout
- Matching color scheme and status indicators
- Same responsive behavior
