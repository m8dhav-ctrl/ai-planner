# ✈️ AI Travel Planner

**An AI-powered full-stack travel planning platform for creating personalized trips, exploring destinations, managing budgets, and organizing complete itineraries in one place.**

<p align="center">
  <a href="https://ai-planner-one-pi.vercel.app/">🌐 Live Demo</a>
  ·
  <a href="https://github.com/m8dhav-ctrl/ai-planner">💻 GitHub Repository</a>
  ·
  <a href="https://github.com/m8dhav-ctrl/ai-planner/releases/tag/v1.0.0">🏷️ v1.0.0</a>
</p>

---

## 📸 Screenshots

> Screenshots will be added here after the production walkthrough.

### 🏠 Landing Page

![Landing Page](screenshots/landing-page.png)

### 📊 Dashboard

![Dashboard](screenshots/dashboard.png)

### ✈️ Create Trip

![Create Trip](screenshots/create-trip.png)

### 🤖 AI-Generated Itinerary

![AI Itinerary](screenshots/itinerary.png)

### 🗺️ Destination Intelligence

![Destination Intelligence](screenshots/destination-intelligence.png)

### 🛠️ Trip Tools

![Trip Tools](screenshots/trip-tools.png)

---

## ✨ Features

### 🤖 AI-Powered Trip Planning

* Generate personalized travel itineraries using Google Gemini
* Specify destination, dates, budget, travelers, and preferences
* Generate structured day-by-day plans
* Persist generated itineraries in PostgreSQL

### 📊 Trip Dashboard

* View all saved trips
* Total trip statistics
* Upcoming trip tracking
* Unique destination tracking
* AI itinerary tracking
* Search trips
* Filter trips by:

  * All
  * Upcoming
  * Past
  * AI Ready
* Sort trips by:

  * Newest
  * Oldest
  * Destination A–Z
  * Destination Z–A
  * Start date
* Paginated trip results

### 🗺️ Destination Intelligence

* Interactive Leaflet maps
* Destination coordinates
* Nearby restaurants
* Cafés
* Hotels
* Attractions
* Destination information
* Language
* Currency
* Currency code
* Time zone
* UTC offset
* Power plug information
* Emergency information
* Best travel season

### 🌦️ Weather

* Current temperature
* Weather condition
* Wind speed
* Destination-specific weather information

### 💰 Budget Planning

* Accommodation estimates
* Food estimates
* Transportation estimates
* Activity estimates
* Total estimated trip cost

### 🎒 Packing Checklist

* AI-generated packing recommendations
* Interactive checklist
* Track packing progress

### 🏨 Hotel Search

Quick access to:

* Booking.com
* Agoda
* Google Hotels
* Hotels.com

### ⚡ Travel Quick Actions

Quick access to:

* Google Maps
* OpenStreetMap
* Google Search
* Wikipedia

### 📄 Trip Utilities

* Export itineraries as PDF
* Print trip details
* Share trips using the Web Share API
* Clipboard fallback when native sharing is unavailable

### 🔐 Authentication

* Clerk authentication
* Google sign-in
* Protected dashboard routes
* User account management

---

## 🛠️ Tech Stack

| Category        | Technologies            |
| --------------- | ----------------------- |
| Framework       | Next.js 16, React 19    |
| Language        | TypeScript              |
| Styling         | Tailwind CSS, shadcn/ui |
| Authentication  | Clerk                   |
| AI              | Google Gemini           |
| Database        | PostgreSQL / Neon       |
| ORM             | Prisma                  |
| Maps            | Leaflet, React Leaflet  |
| Icons           | Lucide React            |
| Animation       | Framer Motion           |
| Notifications   | Sonner                  |
| PDF             | jsPDF, jsPDF AutoTable  |
| Images          | Pexels                  |
| Deployment      | Vercel                  |
| Version Control | Git, GitHub             |

---

## 🏗️ Architecture

```text
                         ┌─────────────────────┐
                         │       User          │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     Next.js App     │
                         │     Router / UI     │
                         └──────────┬──────────┘
                                    │
                 ┌──────────────────┼──────────────────┐
                 │                  │                  │
                 ▼                  ▼                  ▼
          ┌─────────────┐   ┌──────────────┐   ┌──────────────┐
          │    Clerk    │   │ Server       │   │ External     │
          │    Auth     │   │ Actions      │   │ Services     │
          └─────────────┘   └──────┬───────┘   └──────────────┘
                                   │
                         ┌─────────┴─────────┐
                         │                   │
                         ▼                   ▼
                  ┌─────────────┐     ┌─────────────┐
                  │   Gemini    │     │   Prisma    │
                  │     AI      │     │     ORM     │
                  └──────┬──────┘     └──────┬──────┘
                         │                   │
                         │                   ▼
                         │            ┌─────────────┐
                         │            │    Neon     │
                         │            │ PostgreSQL  │
                         │            └─────────────┘
                         │
                         ▼
                  Structured AI
                    Itinerary
```

---

## 🔄 How It Works

### 1. Authenticate

Users sign in securely through Clerk, including Google authentication.

### 2. Create a Trip

The user provides:

* Destination
* Start date
* End date
* Budget
* Number of travelers
* Travel preferences

### 3. Generate the Itinerary

The application sends the trip parameters to Gemini and generates a structured itinerary.

### 4. Persist the Trip

The trip and generated itinerary are stored using Prisma and PostgreSQL.

### 5. Enrich the Destination

The Trip Details page combines the itinerary with:

* Destination information
* Weather
* Coordinates
* Interactive maps
* Nearby places
* Budget breakdown
* Packing recommendations
* Hotel resources

### 6. Use Trip Tools

The completed trip can be:

* Exported as a PDF
* Printed
* Shared
* Used with external travel resources

---

## 📁 Project Structure

```text
ai-planner/
│
├── app/
│   ├── actions/
│   ├── dashboard/
│   │   ├── create-trip/
│   │   └── trips/
│   │       └── [tripId]/
│   ├── sign-in/
│   ├── sign-up/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── dashboard/
│   ├── landing/
│   ├── maps/
│   ├── theme/
│   ├── trip/
│   └── ui/
│
├── lib/
│   ├── destination-info.ts
│   ├── generate-itinerary.ts
│   ├── geocoding.ts
│   ├── gemini.ts
│   ├── overpass.ts
│   ├── pdf.ts
│   ├── prisma.ts
│   ├── prompts.ts
│   └── weather.ts
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── middleware.ts
├── prisma.config.ts
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm
* PostgreSQL / Neon database
* Clerk account
* Google Gemini API key
* Pexels API key

### Clone the repository

```bash
git clone https://github.com/m8dhav-ctrl/ai-planner.git
cd ai-planner
```

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
DATABASE_URL="your-database-url"
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
GEMINI_API_KEY="your-gemini-api-key"
PEXELS_API_KEY="your-pexels-api-key"
```

> Never commit real credentials or API keys to GitHub.

### Generate Prisma Client

```bash
npx prisma generate
```

### Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏭 Production Build

The project generates Prisma Client before building Next.js:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## ☁️ Deployment

The application is deployed on Vercel and connected to the GitHub `main` branch.

Production environment variables are configured through Vercel.

**Live application:**
https://ai-planner-one-pi.vercel.app/

---

## 🔒 Security

Sensitive environment files are excluded from Git:

```text
.env
.env.local
```

API credentials and database connection strings are provided through environment variables.

Never place production credentials directly in source code.

---

## 🧪 Production Verification

The v1.0.0 release was tested in production for:

* Authentication
* Google sign-in
* Dashboard
* Database connectivity
* AI itinerary generation
* Trip persistence
* Trip Details
* Interactive maps
* Weather
* Destination information
* Nearby places
* Hotel search
* Budget planning
* Packing checklist
* PDF export
* Printing
* Trip sharing
* Travel Quick Actions

The production build also passes TypeScript and Next.js production checks.

---

## 📦 Release

### v1.0.0

**AI Travel Planner — First Production Release**

The `v1.0.0` tag represents the verified production baseline.

---

## ⚠️ Known Maintenance Item

Next.js currently reports a non-blocking deprecation warning for the `middleware` file convention.

The application builds and deploys successfully. Migration to the newer `proxy` convention can be handled as a future maintenance task.

---

## 🔮 Future Improvements

Potential future enhancements include:

* Regenerate individual itinerary days
* Edit generated itineraries
* Duplicate trips
* Favorite destinations
* More detailed weather forecasts
* Improved mobile experience
* Collaborative trip planning
* Expense tracking
* Notifications
* Additional travel integrations
* Booking integrations
* More granular AI customization

---

## 👨‍💻 Author

**Madhav**

Computer Science Engineer

Built with Next.js, TypeScript, Gemini AI, Prisma, PostgreSQL, Clerk, Leaflet, and Vercel.

---

## 📄 License

This project is currently presented as a portfolio project.
