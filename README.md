# Flutter Products API

This is the API for 2nd Group of Flutter class. It provides endpoints for managing products and includes documentation for all available endpoints.

## Requirements

- Node.js (v20)
- npm or pnpm
- MySQL

## Installation

- Clone this repository
- Install the dependencies with with Package Manager like `npm`.
- Set up your MySQL database and create the `.env` file with your database credentials.

## Setup

Create a `.env` file in the root directory of your project. Add the next environment variables:

```shell
DB_URL=mysql://user:password@localhost:3306/database_name
PORT=3000
```

## Usage

To start the server, run:

```shell
npm run build && npm run start
```

## Commands

- `npm run start`: Starts the Server
- `npm run dev`: Starts the Server on Developer Mode
- `npm run build`: Build the project
- `npm run lint`: Lints and fortmats the `.ts` files.

### Drizzle Commands

- `npm run migrate`: Generates a migration based on the project schema.
- `npm run introspect`: Pulls DDL from existing database and generate **schema.ts** file in matter of seconds.
- `npm run prototype`: Pushes the schema changes directly to the database and omit managing SQL migration files.
- `npm run studio`: Launches [**Drizzle Studio**](https://orm.drizzle.team/drizzle-studio/overview) database browser locally from the config file.
