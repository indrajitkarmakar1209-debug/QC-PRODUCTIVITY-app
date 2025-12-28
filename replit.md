# Sampurna Financial Services Private Limited - QC Management System

## Overview

This is a Quality Control (QC) Management System for Sampurna Financial Services Private Limited, built to track and manage agent performance metrics. The application enables daily tracking of KYC verifications, KYC updates, pre-section tasks, and fund requests with plan vs actual comparisons. It includes consolidated reporting, analytics with trend visualization, and an admin panel for approvals and target management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful endpoints with Zod schema validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)

### Data Layer
- **Database**: PostgreSQL
- **Schema Location**: `shared/schema.ts` - contains table definitions and Zod schemas
- **Migrations**: Drizzle Kit with `db:push` command
- **Tables**:
  - `qc_records`: Stores agent performance data with plan/actual metrics and approval status
  - `daily_targets`: Stores configurable daily targets per metric type

### Shared Code Structure
- `shared/schema.ts`: Database schema and TypeScript types
- `shared/routes.ts`: API route definitions with Zod schemas for request/response validation
- Path aliases: `@shared/*` maps to shared directory, `@/*` maps to client/src

### Build System
- Development: Vite dev server with HMR proxied through Express
- Production: Custom build script using esbuild for server bundling and Vite for client
- Output: `dist/` directory with compiled server (`index.cjs`) and static assets (`public/`)

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### UI Libraries
- **Radix UI**: Headless accessible component primitives (dialogs, dropdowns, tabs, etc.)
- **Recharts**: Chart library for analytics visualizations
- **date-fns**: Date formatting and manipulation
- **xlsx**: Excel file export functionality

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment
- **TypeScript**: Full type safety across client, server, and shared code