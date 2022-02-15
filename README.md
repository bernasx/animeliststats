This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Animestats

Data by Anime-Offline-Database and the MAL API. Using Chart.JS and Next.JS to build the frontend and backend. Mongoose for a mongodb database and Bulma for CSS.

## Getting Started

First, download the anime offline database at https://github.com/manami-project/anime-offline-database. In order to minimize calls this is what we will use to look up that.

Run the MongoDB, I have to do it with ```mongod.exe --dbpath F:\MongoDB\Server\5.0\data``` because I installed in on a different drive.

You can then convert it into a MongoDB database very easily with MongoDB Compass, just open the anime-offline-database.json file, remove everything including the "data" key, leaving only the "data" values (an array). With MongoDB Compass just import it manually to a new collection.

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
