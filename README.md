# Nuxt3-Vuetify3-Prisma-auth Boilerplate

This project is a boilerplate for a full-stack application setup with Nuxt, Vuetify, Prisma and @sidebase/nuxt-auth. It includes pre-configured features such as authentication, Nuxt & Nuxt-auth setup, Vuetify setup, and global Vuetify styles.

## Technologies

The boilerplate uses the following tech stack:

1. [Nuxt](https://nuxt.com/docs/getting-started/configuration)
2. [Vuetify](https://vuetifyjs.com/en/getting-started/installation/)
3. [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql)
4. [@sidebase/nuxt-auth](https://sidebase.io/nuxt-auth/v0.6/getting-started/quick-start)

## Configuration

Key configuration files:

- **`nuxt.config.ts`**: This file contains your Nuxt.js configuration, including the Vuetify configuration and authentication.
- **`/plugins/vuetify.ts`**: This file provides a Vuetify configuration with customizable themes and icons.
- **`/assets/settings.scss`**: Global Vuetify styles can be customized here.
- **`/server/auth/[...].ts`**: The authentication setup with `@sidebase/nuxt-auth` resides here, where it uses Prisma to authorize users and manage JWT and sessions.

API routes that require protection should be placed in `/server/api/protected`.

## Database Setup

This boilerplate is set up with SQLite as the default database using Prisma. Upon running the `npx prisma db push` command, the SQLite database file is automatically created as specified in the `DATABASE_URL` environment variable.

To use another database, you can replace the `provider` in Prisma's schema and update the `DATABASE_URL` in your `.env` file. Refer to Prisma's documentation on how to connect your desired database: [Prisma - Connect Your Database](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql).

## Environment Variables

The required environment variables:

- `DATABASE_URL`: Your database URL.
- `AUTH_ORIGIN`: Your application URL.
- `AUTH_SECRET`: Your JWT token secret.

Please ensure that these variables are correctly set in your `.env` file. You can use the provided `.env.example` as a reference.

## Getting Started

To get started:

1. Clone the repository.
2. Setup your `.env` file based on the provided `.env.example`.
3. Run `npm install`.
4. Execute `npx prisma db push` to generate the database file based on Prisma's schema.
5. Run `npm run dev`.

The application will then run on your local server.
