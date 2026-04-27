# Catalog App

A responsive product catalog built with Next.js. The app reads product data from `data.json`, groups items by category, and provides category overview, category listing, and product detail pages.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```


### Tools and Technologies Used

- Next.js 16 with the App Router for routing, page metadata, static params, and image optimization.
- React 19 and TypeScript for typed, component-based UI development.
- Tailwind CSS  for responsive layout and styling.
- JSON data as the catalog source, with utility functions for grouping, slug creation, and lookups.

### Time Taken

The assignment took approximately 3 hours to complete, including data modeling, page implementation, responsive styling, loading states, and final cleanup.

### Implementation Approach

I structured the app around the catalog data first. The shared catalog utility module converts the raw JSON into typed items, groups them by category, creates stable URL slugs, and provides lookup helpers for category and product detail routes.

The home page shows a category overview with preview products, each category page lists all products in that category, and each product detail page displays the full item image and properties. Reusable components such as `ProductCard`, `Icon`, and skeleton loaders keep the UI consistent across pages.

The UI approach is intentionally simple and catalog-focused: responsive grids, clear hierarchy, optimized product images, accessible links, and metadata for each route. This keeps the experience easy to scan while still supporting direct navigation to category and item detail pages.
