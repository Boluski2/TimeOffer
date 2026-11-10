# Daymark

Daymark is a team time-off workspace for submitting and reviewing leave requests, tracking employee balances, and managing company calendars.

## Features

- Employees submit vacation, sick, personal, or other time-off requests and track their status and request history.
- Managers review requests and approve or reject them.
- Approved time off is reflected in employee day balances.
- Administrators manage employees, invitation codes, company details, working days, and holidays.
- The team calendar shows approved leave without exposing private request notes.

## Tech stack

- Next.js 15 App Router, React 19, and TypeScript
- PostgreSQL and Prisma
- Clerk authentication
- Tailwind CSS and Radix UI

## Requirements

- Node.js 18.17 or newer
- PostgreSQL database
- Clerk application

## Getting started

1. Clone the repository and enter the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and set the following values:

   ```dotenv
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
   CLERK_SECRET_KEY="sk_test_..."
   SIGNING_SECRET="whsec_..."
   ```

   Get the Clerk keys from your Clerk application. `SIGNING_SECRET` is the signing secret for the Clerk webhook configured to send events to `/api/webhooks`.

4. Create or update the database schema and generate the Prisma client:

   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to use Daymark.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Generate the Prisma client and start the Next.js development server |
| `npm run build` | Generate the Prisma client and build the production app |
| `npm start` | Start the production server after building |
| `npx prisma db push` | Apply the Prisma schema to the configured database |

## Authentication and onboarding

Clerk handles sign-in and sign-up. New users complete onboarding to join or create a company workspace. Configure the Clerk webhook URL as `https://YOUR_DOMAIN/api/webhooks` (or your local tunnel URL during development) and provide its signing secret as `SIGNING_SECRET`.

## Deployment

Set the same environment variables in your hosting provider, connect a PostgreSQL database, and deploy the repository. The `vercel-build` script generates the Prisma client and builds the Next.js application. Ensure the database schema is applied before the deployed app handles requests.
