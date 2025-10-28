# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
pnpm dev          # Start dev server (port 8080, client + server with hot reload)
pnpm build        # Full production build (client + server)
pnpm build:client # Build client only (outputs to dist/spa)
pnpm build:server # Build server only (outputs to dist/server)
pnpm start        # Run production server
pnpm test         # Run all Vitest tests
pnpm typecheck    # TypeScript validation
pnpm format.fix   # Format code with Prettier
```

## Architecture Overview

This is a **Fusion Starter** project - a full-stack React application with integrated Express server, using a single-port development setup via Vite.

### Tech Stack
- **Package Manager**: pnpm (required)
- **Frontend**: React 18 + React Router 6 (SPA mode) + TypeScript + Vite
- **UI**: Radix UI components + TailwindCSS 3 + Lucide React icons
- **Backend**: Express server integrated with Vite dev server
- **Testing**: Vitest
- **State**: TanStack Query (React Query)
- **Validation**: Zod

### Project Structure

```
client/                   # React SPA frontend
├── App.tsx              # App entry point with routing and providers
├── pages/               # Route components (Index.tsx = home)
├── components/
│   ├── ui/             # shadcn/ui component library (Radix UI + TailwindCSS)
│   └── layout/         # Layout components (Header, Footer, Layout)
├── hooks/              # Custom React hooks
├── lib/                # Utilities (e.g., cn() for class merging)
└── global.css          # TailwindCSS theme and global styles

server/                  # Express API backend
├── index.ts            # Main server setup (createServer function)
├── node-build.ts       # Production server entry point
└── routes/             # API route handlers

shared/                 # Shared types between client and server
└── api.ts              # Shared TypeScript interfaces

netlify/functions/      # Netlify serverless function adapter
```

### Path Aliases
- `@/*` → `client/*`
- `@shared/*` → `shared/*`

## Key Architectural Patterns

### Development vs Production Setup

**Development (pnpm dev)**:
- Single port (8080) runs both client and server
- Vite dev server with Express middleware via `expressPlugin()` in vite.config.ts
- Hot reload for both client and server code
- Server integrated via Vite's `configureServer` hook

**Production**:
- Separate builds: `dist/spa` (client) and `dist/server` (server)
- Node.js server at `dist/server/production.mjs`
- Netlify deployment uses serverless functions adapter

### Routing System

React Router 6 in SPA mode (BrowserRouter):
- Routes defined in `client/App.tsx`
- Page components in `client/pages/`
- All routes wrapped in `<Layout>` component
- **Important**: Add custom routes ABOVE the catch-all `*` route (NotFound)

### Express Server Integration

- API endpoints must be prefixed with `/api/`
- Routes registered in `server/index.ts` via `createServer()` function
- Example routes: `/api/ping`, `/api/demo`
- Environment variables loaded via dotenv in `server/index.ts`

### Type Safety Between Client and Server

Share TypeScript interfaces via `shared/api.ts`:
```typescript
// shared/api.ts
export interface MyResponse { message: string; }

// server/routes/my-route.ts
import { MyResponse } from "@shared/api";

// client component
import { MyResponse } from '@shared/api';
```

### Styling System

- **Primary**: TailwindCSS 3 utility classes
- **Theme**: Configure in `client/global.css` using CSS variables
- **Config**: `tailwind.config.ts` for extended theme
- **Utility**: `cn()` from `@/lib/utils` (combines clsx + tailwind-merge)
- **UI Components**: Pre-built shadcn/ui library in `client/components/ui/`

### UI Component Library

Based on shadcn/ui (configured in `components.json`):
- Radix UI primitives with TailwindCSS styling
- Components use CSS variables for theming
- Configured with default style, slate base color
- Add new components: Use shadcn CLI or manually add to `client/components/ui/`

## Adding New Features

### New Page Route
1. Create `client/pages/MyPage.tsx`
2. Add route in `client/App.tsx` BEFORE the `*` catch-all route:
```typescript
<Route path="/my-page" element={<Layout><MyPage /></Layout>} />
```

### New API Route
1. (Optional) Define shared type in `shared/api.ts`
2. Create handler in `server/routes/my-route.ts`
3. Register in `server/index.ts` within `createServer()`:
```typescript
app.get("/api/my-endpoint", handleMyRoute);
```

### Adding shadcn/ui Components

The project uses shadcn/ui. To add new components, follow the shadcn/ui documentation or manually copy component files to `client/components/ui/`.

## Deployment

**Netlify** (configured in `netlify.toml`):
- Build command: `npm run build:client`
- Publish directory: `dist/spa`
- Functions: `netlify/functions` (serverless adapter for Express)
- API routes redirected to `/.netlify/functions/api/*`

**General Principle**:
Only create API endpoints when strictly necessary (e.g., handling private keys, certain DB operations). Prefer client-side logic when possible.

## TypeScript Configuration

- Strict mode is **disabled** in tsconfig.json
- Path mapping configured for `@/*` and `@shared/*`
- React JSX transform enabled
- No type checking on build (noEmit: true)
