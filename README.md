# Signalist — Stock Market Tracker

## Overview

Signalist is a modern stock market tracking dashboard built with Next.js and TradingView embeds. It provides authenticated users with a comprehensive Market overview, real-time stock search, and daily market news summaries tailored to their holdings.

**Who it’s for:** retail investors and traders who want a lightweight, data-driven starting point to monitor their portfolio and stay on top of market-moving headlines.

**Why it’s useful:** It combines market data widgets, fast symbol discovery, and an automated news summarization pipeline to reduce noise and surface the most relevant updates for a users.

## Features

- Secure email/password authentication with session-based access control
- Stock symbol search with debounced API calls and instant navigation
- TradingView-powered dashboards: heatmap, quotes, and news widgets
- Daily market news email summaries generated via AI (Inngest + Gemini)
- Graceful API fallbacks and rate-limit safe caching

## Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js Server Actions, Inngest serverless functions
- **API:** Finnhub stock and news APIs, TradingView embedded widgets
- **Auth:** Custom Better Auth integration
- **Database:** MongoDB (Mongoose) for User credentials storage
- **Email:** Nodemailer templates with AI-generated summaries

## Architecture / How It Works

- **Next.js App Router** serves authenticated pages under `app/(root)` and protects auth routes under `app/(auth)`.
- **Server Actions** (e.g., `signInWithEmail`, `getWatchlistSymbolsByEmail`) run on the server and interact directly with the database and auth API.
- **TradingView Widgets** are rendered client-side via a custom hook that injects TradingView scripts once per widget container.
- **Inngest Functions** handle async background tasks:
  - `app/user.created` triggers a welcome email with AI-generated content
  - `app/send.daily.news` (cron) generates personalized market summaries and sends email digests

## Key Highlights

- **Optimized API use:** Stock search is debounced and cached using Next.js cache options to minimize Finnhub request volume.
- **Scalable news pipeline:** Runs per-user news aggregation and AI summarization in discrete steps to avoid timeouts.
- **Server-side protection:** Layout components redirect unauthenticated users to the sign-in page early in the render lifecycle.
- **Reusable widget tooling:** TradingView embeds are managed via a hook that cleans up scripts to prevent double-loading.

## Setup Instructions

1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd stock-market-tracker-application
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a new .env file with the following template and fill in your own keys:
   ```bash
   NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key_here
   FINNHUB_API_KEY=your_finnhub_api_key_here
   MONGODB_URI=your_mongodb_uri_here
   BETTER_AUTH_SECRET=your_better_auth_secret_here
   BETTER_AUTH_URL=http://localhost:3000
   GEMINI_API_KEY=your_gemini_api_key_here
   NODEMAILER_EMAIL=your_email_here
   NODEMAILER_PASSWORD=your_email_password_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Environment Variables

Create a `.env` file with the following variables:

- `NEXT_PUBLIC_FINNHUB_API_KEY` (optional, used in client-side pump for stock search)
- `FINNHUB_API_KEY` (required for server-side data fetching)
- `MONGODB_URI` (required for User persistence)
- `BETTER_AUTH_SECRET` (required for Better Auth)
- `BETTER_AUTH_URL` (required for Base URL of your app)
- `GEMINI_API_KEY` (required for AI Personalization)
- `NODEMAILER_EMAIL` (required for email delivery)
- `NODEMAILER_PASSWORD` (required for email delivery)



## Future Improvements

- Add portfolio performance tracking (P/L, asset allocation)
- Improve search relevance with fuzzy matching and sector filtering
- Add a Watchlist feature and Watchlist page for users to view focused stocks

## Live Demo

> (Placeholder) Add a link here when a public deployment is available.

## Screenshots

> (Placeholder) Add screenshots of the dashboard, search modal, and email summary here.
