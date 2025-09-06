# WorkLeave - Employee Time Off Management System

A modern, full-stack SaaS application for managing employee time-off requests, approvals, and company holidays. Built with scalability and a great user experience in mind.

![WorkLeave Dashboard](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![Prisma](https://img.shields.io/badge/Prisma-ORM-blue) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue) ![Clerk](https://img.shields.io/badge/Clerk-Auth-purple)

## 🚀 Live Demo

*   **Main Application:** [https://time-offer-nb4o.vercel.app/]
*   **Employee Dashboard:** `/employee`
*   **Admin Dashboard:** `/admin`

*(Note: Replace with your actual deployment URL)*

## ✨ Features

### 👨‍💼 For Employees
- **Intuitive Request Form:** Submit time-off requests with an easy-to-use form.
- **Smart Date Calculation:** Automatically excludes weekends and company holidays from your allowance.
- **Request History:** View the status and history of all your past requests.
- **Custom Exclusions:** Manually exclude specific days (e.g., half-days, appointments).

### 🛠️ For Administrators
- **Centralized Dashboard:** Get an overview of pending requests, employee count, and active invitations.
- **Complete Request Management:** View, approve, or reject all employee time-off requests.
- **Company Settings:** Manage company profile, logo, and website.
- **Holiday Management:** Define and manage recurring and one-time company holidays.
- **Employee Management:** View all employees and manage their roles.
- **Invitation System:** Generate secure invitation codes for new employee onboarding.

### ⚙️ Technical Features
- **Role-Based Access Control (RBAC):** Secure routes for Admins, Managers, and Employees.
- **Type Safety:** Full TypeScript integration throughout the frontend and backend.
- **Modern UI:** Built with Shadcn/UI and Tailwind CSS for a clean, responsive interface.
- **Robust Database:** Well-designed PostgreSQL schema with Prisma ORM.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
- **Deployment:** [Vercel](https://vercel.com/) (Recommended)

## 📦 Project Structure


## 🗄️ Database Schema (Prisma)

The application uses a multi-tenant architecture centered around the `Company` model.

**Key Models:**
- `Company`: Core tenant model.
- `User`: Users with roles (`ADMIN`, `MANAGER`, `EMPLOYEE`).
- `TimeOffRequest`: Tracks leave requests, status, and type.
- `CompanyHoliday`: Manages company-specific holidays.
- `Code`: Handles invitation codes for onboarding.

*(See `prisma/schema.prisma` in the code for the complete, detailed schema.)*

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- PostgreSQL database
- Clerk account (for authentication)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd WorkLeave-app

npm install
# or
yarn install
# or
pnpm 

