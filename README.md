# Signalist — Stock Market Tracker

## Overview

Signalist is a modern, AI-powered stock market tracking platform built with Next.js, Tailwind CSS, Shadcn UI, Better Auth, and Inngest.

It provides authenticated users with a real-time market dashboard featuring stock quotes, company insights, financial news, and AI-generated daily summaries. The platform is designed to reduce market noise and surface actionable information quickly.

**Target users:** Retail investors and active traders who want a fast, lightweight way to track markets and stay updated on relevant news.

**Core value:** Combines real-time market data, intelligent news summarization, and automated delivery pipelines into a single streamlined experience

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
   NEXT_PUBLIC_FINNHUB_API_KEY=
   FINNHUB_API_KEY=
   MONGODB_URI=
   BETTER_AUTH_SECRET=
   BETTER_AUTH_URL=http://localhost:3000
   GEMINI_API_KEY=
   NODEMAILER_EMAIL=
   NODEMAILER_PASSWORD=
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

- `NEXT_PUBLIC_FINNHUB_API_KEY` (optional, used for client-side stock search)
- `FINNHUB_API_KEY` (required for server-side data fetching)
- `MONGODB_URI` (required for User persistence)
- `BETTER_AUTH_SECRET` (required for Better Auth)
- `BETTER_AUTH_URL` (required for Base URL of your app)
- `GEMINI_API_KEY` (required for AI Personalization)
- `NODEMAILER_EMAIL` (required for email delivery)
- `NODEMAILER_PASSWORD` (required for email delivery)



## Future Improvements

- Portfolio tracking (P/L, allocation, performance analytics)
- Advanced search (fuzzy matching + sector filtering)
- Watchlist system with personalized dashboards
- Real-time market alerts (price + news triggers)
- Mobile-responsive UI improvements

## Live Demo

> (Placeholder) Add a link here when a public deployment is available.

## Screenshots

> (Placeholder) Add screenshots of the dashboard, search modal, and email summary here.
