# Manajemen Event & Promo

Aplikasi web untuk mengelola dan menampilkan event dan promo. Dibangun dengan Next.js dan MongoDB.

## Fitur

- **Halaman Publik**: Menampilkan daftar event dan promo yang sedang berlangsung
- **Dashboard Admin**: Interface untuk mengelola event
  - Tambah event baru
  - Edit event yang sudah ada
  - Hapus event
- **Responsive Design**: Tampilan yang optimal di berbagai perangkat (desktop, tablet, smartphone)
- **Lokalisasi**: Semua konten dalam Bahasa Indonesia

## Teknologi

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: Vercel

## Cara Penggunaan

### Instalasi

```bash
# Clone repository
git clone https://github.com/RoseRina/event.git
cd event

# Install dependencies
npm install
```

### Konfigurasi

Buat file `.env.local` di root project dengan isi:

```
MONGODB_URI="your_mongodb_connection_string"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### Menjalankan Aplikasi

```bash
# Mode development
npm run dev

# Build untuk production
npm run build

# Menjalankan versi production
npm start
```

### Akses Admin

Akses dashboard admin di `/admin/login` dengan kredensial:
- Username: admin
- Password: admin123

## Preview

Demo: [event-ten-coral.vercel.app](https://event-ten-coral.vercel.app/)

## Struktur Direktori

```
/
├── pages/              # Halaman dan API routes
│   ├── api/            # Backend API endpoints
│   │   ├── events/     # Event API (GET, POST, PUT, DELETE)
│   │   └── upload.js   # File upload handler
│   ├── admin/          # Admin pages
│   │   ├── dashboard.js # Admin dashboard
│   │   ├── index.js    # Redirect ke login
│   │   └── login.js    # Admin login
│   ├── _app.js         # Custom App component
│   ├── _document.js    # Custom Document
│   └── index.js        # Homepage
├── models/             # MongoDB models
│   └── Event.js        # Event schema
├── lib/                # Shared utilities
│   └── mongodb.js      # Database connection
├── public/             # Static assets
│   └── uploads/        # Uploaded images
└── styles/             # CSS files
``` 