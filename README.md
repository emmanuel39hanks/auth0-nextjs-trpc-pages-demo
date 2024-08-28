# Auth0 Integration with Next.js and tRPC

This project demonstrates how to integrate Auth0 authentication with a Next.js application using tRPC for type-safe API routes.

## Overview

This example showcases:
- Auth0 authentication in a Next.js application
- tRPC for type-safe API routes
- storing user data in a PostgreSQL database using Prisma

## Folder Structure

auth0-nextjs-trpc/
├── prisma/
│ └── schema.prisma
├── public/
│ ├── next.svg
│ └── vercel.svg
├── src/
│ ├── pages/
│ │ ├── api/
│ │ │ ├── auth/
│ │ │ │ └── [...auth0].ts
│ │ │ └── trpc/
│ │ │ └── [trpc].ts
│ │ ├── app.tsx
│ │ ├── document.tsx
│ │ └── index.tsx
│ ├── server/
│ │ ├── routers/
│ │ │ ├── app.ts
│ │ │ └── auth.ts
│ │ ├── context.ts
│ │ ├── prisma.ts
│ │ └── trpc.ts
│ ├── styles/
│ │ └── globals.css
│ └── utils/
│ └── trpc.ts
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

## Learn More

This project is based on an article about integrating Auth0 with Next.js and tRPC. The article provides a step-by-step guide on:
- Setting up Auth0 for Next.js
- Implementing tRPC for type-safe API routes
- Handling user authentication and authorization
- Storing user data

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Key Files

- Auth0 API route: `src/pages/api/auth/[auth0].ts`
- tRPC context creation: `src/server/context.ts`
- Auth router for user management: `src/server/routers/auth.ts`


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.