# Literacia Financeira's bot

A bot designed to help LiteraciaFinanceira's Discord server on providing high quality content to their users.

# Table of Contents

- [Introduction](#literacia-financeira's-bot)
- [Features](#features)
- [Requirements](#requirements)
- [Configuration](#configuration)
- [Installation](#installation)
- [Running](#running)

# Features

A few of the things you can do with this bot:

* Check subreddit to check on new posts

# Requirements

Package | Version | Required
-- | -- | --
Node | >= 14 | Yes
Docker | >= 19 | No

# Configuration

Before anything else it's time for a quick configuration.

Create a `.env` file in the project root.

```sh
cp .env.example .env
```

Add and replace values as needed:

```env
#
# Bot's token
#
BOT_TOKEN=

#
# Channel ID to where the messages should be sent
#
REDDIT_CHANNEL_ID=
```

# Installation

## Local

Install the dependencies:

```sh
yarn install
```

or for those who prefer `npm`:

```sh
npm install
```

## Docker

> I'll be using **literaciafinanceira** and **literacia-financeira-bot** as an example.
>
> Feel free to change to meet your requirements

### Build

```bash
docker build -t literaciafinanceira/literacia-financeira-bot .
```

# Running

## Local

If you went through the previous steps successfully, you should now be able to run your **bot** with the following command:

```sh
npm build && npm start
```

## Docker

> I'll be using **literaciafinanceira** and **literacia-financeira-bot** as an example.
>
> Please use whatever you set when building the image [here](#build)

```bash
docker run --env-file=.env literaciafinanceira/literacia-financeira-bot:latest
```

---
And at this point you should see an output similar to this:

```sh
BOT :: Ready!
```

That's it!
