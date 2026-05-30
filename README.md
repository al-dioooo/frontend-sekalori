This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Arsanawa ERP External API

SEKALORI can prepare menu data from Arsanawa ERP through the ERP external API while keeping the public ordering CTA pointed to Google Forms. Configure these server-only environment variables in the deployment environment:

```bash
ARSANAWA_ERP_API_BASE_URL=https://your-arsanawa-api.example.com
ARSANAWA_ERP_EXTERNAL_API_KEY=external-api-key-generated-in-arsanawa
ARSANAWA_ERP_BRANCH_ID=1
```

`ARSANAWA_ERP_EXTERNAL_API_KEY` must never use the `NEXT_PUBLIC_` prefix. The frontend sends it only from server-side helpers as the `X-API-Key` header for `/api/v1/external/products` and future `/api/v1/external/catering-orders` integration work. If ERP configuration is missing or unavailable, the site falls back to the static menu data already bundled with the app.

Google Forms remains the active checkout path until a dedicated checkout flow is added.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
