# Adansi United Football Club 🏆

> **Official Website** — [www.adansiunitedfc.com](https://www.adansiunitedfc.com)

![Adansi United FC](/public/snapshot.png)

Adansi United Football Club is a vibrant and dynamic sports club located in Obuasi, Ghana. The club is dedicated to creating a platform where dreams meet reality — not just playing football, but building futures, one goal at a time.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Routes](#-api-routes)
- [Components](#-components)
- [Pages](#-pages)
- [Payment Integration](#-payment-integration)
- [Firebase Integration](#-firebase-integration)
- [Email Notifications](#-email-notifications)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The Adansi United FC website serves as the digital home for the football club, providing information about the club, registration for the academy, donation capabilities, and showcasing the club's story, staff, and sponsors.

### Key Highlights

- **Academy Sports Village** — Coming soon in Q1 2026
- **Year-round Football Programs** — World-class training methods blending global best practices with African football talent
- **Youth Development** — Football Training Camps for Kids launching Q1 2026
- **Professional Opportunities** — Partnerships with top clubs and scouts

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏠 **Dynamic Hero Section** | Animated hero with auto-rotating images and smooth transitions |
| 📝 **Registration System** | User registration with Firebase Firestore storage and email notifications |
| 💳 **Donation System** | Multiple payment methods including VISA, MasterCard, and Mobile Money (MTN, Telecel, AirtelTigo) |
| 📸 **Image Gallery** | Auto-scrolling carousel showcasing club moments |
| 👥 **Staff Section** | Display of coaching and management staff |
| 🏆 **Sponsors Section** | Partner and sponsor showcase |
| 📱 **Responsive Design** | Mobile-first design with smooth animations |
| 🔗 **Social Integration** | Links to Facebook, Instagram, X (Twitter), and WhatsApp |
| 📧 **Email Notifications** | Automated emails for registrations using Nodemailer |
| 🌐 **SEO Optimized** | Full Open Graph and Twitter Card meta tags for social sharing |

---

## 🛠 Tech Stack

### Core Framework

- **[Next.js 14](https://nextjs.org/)** — React framework with App Router
- **[React 18](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** — Animation utilities
- **[class-variance-authority](https://cva.style/)** — Component variants

### UI Components

- **[Radix UI](https://www.radix-ui.com/)** — Primitive UI components (Dialog, Label, Slot)
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** — Additional icons

### Animations

- **[Framer Motion](https://www.framer.com/motion/)** — Production-ready animations
- **[Embla Carousel](https://www.embla-carousel.com/)** — Lightweight carousel with autoplay

### Backend & Database

- **[Firebase](https://firebase.google.com/)** — Authentication and Firestore database
- **[Nodemailer](https://nodemailer.com/)** — Email sending

### Payment Gateway

- **[Orchard Payment API](https://anmgw.com/)** — Payment processing for cards and mobile money

### Utilities

- **[clsx](https://github.com/lukeed/clsx)** — Conditional class names
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Merge Tailwind classes
- **[react-wrap-balancer](https://react-wrap-balancer.vercel.app/)** — Text balancing
- **[Sonner](https://sonner.emilkowal.ski/)** — Toast notifications
- **[Vaul](https://vaul.emilkowal.ski/)** — Drawer component

---

## 📁 Project Structure

```
adansi-united/
├── public/
│   ├── assets/               # Images, icons, and brand logos
│   │   ├── brands/           # Sponsor logos
│   │   ├── icons/            # UI icons
│   │   └── *.png, *.svg      # Gallery & hero images
│   ├── .well-known/          # Verification files
│   ├── favicon.ico           # Site favicon
│   └── snapshot.png          # Social preview image
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── donate/       # Donation API endpoint
│   │   │   │   └── route.ts
│   │   │   └── send-mail/    # Email API endpoint
│   │   │       └── route.ts
│   │   ├── donate/           # Donation page
│   │   │   └── page.tsx
│   │   ├── payment/
│   │   │   ├── callback/     # Payment callback handler
│   │   │   └── success/      # Payment success page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout with SEO meta tags
│   │   └── page.tsx          # Homepage
│   │
│   ├── components/
│   │   ├── home/             # Homepage section components
│   │   │   ├── hero.tsx      # Hero section with animations
│   │   │   ├── story.tsx     # Club story section
│   │   │   ├── pillars.tsx   # Core pillars section
│   │   │   ├── club.tsx      # Club info cards
│   │   │   ├── gallery.tsx   # Image gallery carousel
│   │   │   ├── staff.tsx     # Staff showcase
│   │   │   ├── dreams.tsx    # Dreams section
│   │   │   ├── register.tsx  # Registration form
│   │   │   ├── sponsors.tsx  # Sponsors display
│   │   │   └── new-products.tsx
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── donate-btn.tsx
│   │   │   ├── responsive-dialog.tsx
│   │   │   └── width-constraint.tsx
│   │   ├── header.tsx        # Navigation header
│   │   ├── footer.tsx        # Site footer
│   │   ├── donate-form.tsx   # Donation form component
│   │   └── thank-you-message.tsx
│   │
│   ├── hooks/                # Custom React hooks
│   │
│   ├── lib/
│   │   ├── constants.tsx     # App constants (nav links, gallery, sponsors)
│   │   ├── utils.ts          # Utility functions (cn)
│   │   └── utils/
│   │       └── send-mail.ts  # Email helper function
│   │
│   └── firebase.ts           # Firebase configuration
│
├── components.json           # shadcn/ui configuration
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**
- Firebase project (for user registration)
- Orchard Payment API credentials (for donations)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/adansi-united.git
   cd adansi-united
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory (see [Environment Variables](#-environment-variables) section)

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Orchard Payment API
ORCHARD_CLIENT_TOKEN=your_client_token
ORCHARD_CLIENT_SECRET=your_client_secret
ORCHARD_SERVICE_ID=your_service_id

# Email Configuration (Nodemailer)
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASSWORD=your_smtp_password
```

---

## 🔌 API Routes

### POST `/api/donate`

Initiates a donation payment through the Orchard Payment Gateway.

**Request Body:**

```json
{
  "amount": 100.00,
  "network": "VIS",
  "phoneNumber": "0244123456",
  "currency": "GHS"
}
```

**Supported Networks:**

- `VIS` — VISA
- `MAS` — MasterCard
- `MTN` — MTN Mobile Money
- `VOD` — Telecel Cash
- `AIR` — AirtelTigo Money
- `BNK` — Bank Transfer

**Response:**

- For card payments: Returns `{ form_url: "..." }` for redirect
- For mobile money: Returns response code indicating prompt sent to phone

### POST `/api/send-mail`

Sends email notifications using Nodemailer.

**Request Body:**

```json
{
  "email": "recipient@example.com",
  "name": "Recipient Name",
  "message": "Email content..."
}
```

---

## 🧩 Components

### Home Page Sections

| Component | Description |
|-----------|-------------|
| `Hero` | Auto-rotating hero section with animated transitions |
| `Story` | Club story with three feature cards (Real Training, True Soccer, Improving Lives) |
| `Pillars` | Core pillars of the academy |
| `NewProduct` | New offerings and products |
| `Dreams` | Dreamer/player showcase |
| `Club` | Club information cards (Teams, Registration, Locations, Coaching Staff, Programs, Training Schedule) |
| `Gallery` | Auto-scrolling carousel of club images |
| `Staff` | Coaching and management staff display |
| `Register` | User registration form with Firebase integration |
| `Sponsors` | Partner and sponsor logos display |

### UI Components

| Component | Description |
|-----------|-------------|
| `Button` | Configurable button with multiple variants |
| `Card` | Card container with header, content, and footer |
| `Carousel` | Embla-based carousel with autoplay |
| `Dialog` | Modal dialog using Radix UI |
| `Drawer` | Bottom drawer using Vaul |
| `Input` | Styled form input |
| `Label` | Form label component |
| `DonateButton` | Donation modal trigger button |
| `ResponsiveDialog` | Dialog that adapts to screen size |
| `WidthConstraint` | Max-width container wrapper |

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/donate` | Standalone donation page |
| `/payment/success` | Payment success/thank you page |
| `/payment/callback` | Payment gateway callback handler |

---

## 💳 Payment Integration

The application integrates with **Orchard Payment Gateway** for processing donations.

### Supported Payment Methods

1. **Card Payments** (VISA, MasterCard)
   - Users are redirected to a secure payment page
   - Returns to `/payment/success` after completion

2. **Mobile Money** (MTN MoMo, Telecel Cash, AirtelTigo Money)
   - Sends prompt directly to user's phone
   - User approves on their mobile device

### Payment Flow

```
User selects amount & method
         ↓
POST /api/donate
         ↓
┌─────────────────────────────────────┐
│ Card Payment?                        │
│   → Redirect to Orchard form_url    │
│   → Complete payment                │
│   → Redirect to /payment/success    │
│                                      │
│ Mobile Money?                        │
│   → Prompt sent to phone            │
│   → User approves on device         │
│   → Callback to /payment/callback   │
└─────────────────────────────────────┘
```

---

## 🔥 Firebase Integration

Firebase is used for:

### Firestore Database

- **Collection:** `register/`
- **Document ID:** Derived from user's email (slug format)
- **Fields:** `firstName`, `lastName`, `email`, `phoneNumber`

### Configuration

Firebase is initialized in `src/firebase.ts`:

```typescript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // ... other config
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

## 📧 Email Notifications

The application sends automated emails using Nodemailer:

### Registration Emails

1. **Admin Notification** — Sent to club administrators when a new user registers
2. **User Confirmation** — Sent to the registering user confirming their registration

### Email Template

Emails are sent via the `/api/send-mail` endpoint and include registration details.

---

## 🌐 Deployment

### Recommended Platforms

- **[Vercel](https://vercel.com)** (Recommended for Next.js)
- **[Netlify](https://netlify.com)**
- **[Railway](https://railway.app)**

### Vercel Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Production Build

```bash
npm run build
npm run start
```

---

## 🎨 Theme & Styling

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#1CBA18` | Primary actions, accents |
| Dark Green | `#276C25` | Headings, text emphasis |
| Gold | `#F3BC63` | Alternating cards, highlights |
| Dark Gray | `#212121` | Backgrounds, sections |

### Typography

The application uses system fonts with `antialiased` rendering for optimal readability.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Write descriptive commit messages

---

## 📜 License

This project is proprietary software. All rights reserved.

© 2024 Adansi United Football Club

---

## 🙏 Credits

**Designed & Developed by:** []()

---

## 📞 Contact

For inquiries, reach out to the club:

- **Email:** <>
- **Website:** [adansiunitedfc.com](https://adansiunitedfc.com)
- **Location:** Obuasi, Ghana

---

<div align="center">

**⚽ Adansi United FC — Building Futures, One Goal at a Time ⚽**

</div>
