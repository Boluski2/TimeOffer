# Daymark

Daymark is a team time-off workspace for leave requests, manager decisions, employee balances, company calendars, and approved team availability.

## Product flows

- Employees submit vacation, sick, personal, or other time-off requests and track request status.
- Managers review requests and record decisions.
- Employees see their available day balance and request history.
- Administrators manage employees, invitations, company working days, and holidays.
- Teams can view upcoming approved leave without exposing private request notes.

## Stack

- Next.js App Router and TypeScript
- PostgreSQL with Prisma
- Clerk authentication and role metadata
- Tailwind CSS and Radix UI primitives

## Local development

Requirements: Node.js 18.17+, PostgreSQL, and a Clerk application.

1. Configure `DATABASE_URL`, Clerk's publishable and secret keys, and `SIGNING_SECRET` in `.env`.
2. Install dependencies with `npm install`.
3. Generate the Prisma client with `npx prisma generate`.
4. Start the development server with `npm run dev`.

The app uses Clerk for authentication and Prisma for workspace and time-off records. The webhook endpoint at `/api/webhooks` verifies Clerk events with Svix.
