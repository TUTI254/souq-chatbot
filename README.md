# SOUQ ChatBot

This is a chatbot feature that is Powered by OpenAI's ChatGPT 3.5 Turbo model to aid users as a support to finding their needs in regards to Tourism in Japan ⛩️🌏🎌.

## Features

- Real-time streamed chatbot responses from OpenAi
- Secured, rate-limited API routes to prevent abuse using Upstash/Redis

## Tech Stack

- Next Js
- Typescript
- Tailwindcss
- Shadcn/ui Library
- Open Ai ChatGPT model
- Redis/ Upstash

## Getting Started

First after you clone the project

### prerequisite

you will need to creat a `.env.local` file for your Openai Key & Redis Url,Secret. should be like this;

```
OPENAI_API_KEY=  your api key
REDIS_URL= your url
REDIS_SECRET= your secret key
```

,install the necessary dependancies if not available

```bash
npm i
# or
yarn add
# or
pnpm i
```

,then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
