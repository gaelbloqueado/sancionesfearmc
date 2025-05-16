<div align="center">
  <img style="width:100px;" src="https://cdn.yosoyvillaa.dev/uploads/next-litebans.png" alt="MelodyMine Logo">

  <h1 style="font-size: 38px">next-litebans </h1>

  A web interface for [LiteBans](https://www.spigotmc.org/resources/litebans.3715/), built on top of:

  [![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) [![Prisma](https://img.shields.io/badge/Prisma-black?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io/) [![shadcn/ui](https://cdn.yosoyvillaa.dev/uploads/shadcn.svg)](https://ui.shadcn.com/)
</div>

## 👾 Demo

You can view a demo of the project [here](https://next-litebans.yosoyvillaa.dev/). 

_P.D: All punishments in the demo are randomly added to the database with a list of random premium player names as punished players, and with a predefined list of reasons._

## 🚀 Deployment

### Prerequisites

- Node.js v20.x or higher
- Litebans working on MySQL, MariaDB or PostgreSQL

### Installation

1. Clone the repository with `git clone https://github.com/YoSoyVillaa/next-litebans.git`
2. Install the dependencies with `npm install`
3. Copy the `.env.example` file to `.env` and fill in the required fields. For help [check this](#database-url)
4. If you are using PostgreSQL, check [PostgresSQL Configuration](#PostgresSQL-Configuration)
5. Config the website ([configuration](#%EF%B8%8F-configuration))
6. Run `npm run setup:db:generate` to generate the Prisma client
7. Run `npm run build` to build the project
8. Run `npm run start` to start the server

### Database URL

You will need to set the `DATABASE_URL` environment variable in the `.env` file. If you don't know the URL template, you can check the following examples for both MySQL and PostgreSQL:

#### MySQL URL Configuration

![MySQL](https://cdn.yosoyvillaa.dev/uploads/mysql.png)

```env
DATABASE_URL="mysql://user:password@host:port/database"
```

#### PostgreSQL URL Configuration

![PostgreSQL](https://cdn.yosoyvillaa.dev/uploads/postgresql.png)

```env
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
```

### PostgresSQL Configuration

If you are using PostgreSQL, you need to delete all the **models** in the `prisma/schema.prisma` file and change the `provider` to `postgresql`, or replace the file content with:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Update the URL in the `.env` file with the PostgreSQL connection string.

Then, run `npm run setup:db:pull` to pull the database schema.

## 🛠️ Configuration

You can configure any website option on `config/site.ts`, such as the page title, icon, and more.

### 🖼️ Images

You can place the images in the `public/` folder, then you can use them in the website with the `/` path. But, if you want to use an external link images, you will need to add the following config to the `next.config.js` file:

```js
const nextConfig = {
  images: {
    remotePatterns: [
      // One object for each domain
      {
        protocol: 'https',
        hostname: 'domain.example',
      }
    ]
  }
};
```

### 🌍 Internacionalization

To configure the available languages, you can edit the `config/site.ts` file, modifying the `languages` object, then, you can edit existing translations in the `language/` folder, or create new ones copying the existing ones and changing the values.

### 👤 Bedrock compatibility

If your server allow Bedrock players through [Geyser](https://github.com/GeyserMC/Geyser) and/or [Floodgate](https://github.com/GeyserMC/Floodgate), you can enable the Bedrock compatibility mode in the `config/site.ts` file, setting the `bedrock` property to `true`. Then, configure the name prefix for Bedrock players, to replace the skins with the default Steve skin.

```js
  bedrock: {
    enabled: true,
    prefix: "BP_", // Prefix for Bedrock players
  },
```

> [!WARNING]
> If you are using a special character for your Bedrock players, such as ``*.+?^${}()|[\]\\``, etc., you will need to enter ``src/utils/bedrock.ts``, and change the line 13 to ``const bedrockPrefixRegex = new RegExp(`^\\${siteConfig.bedrock.prefix}`);``, escaping the special character with a double backslash.