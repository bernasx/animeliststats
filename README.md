This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

![chrome_LLYnr9DVa2_15-02-2022](https://user-images.githubusercontent.com/38398866/181934035-382b5fd7-3900-44cc-b84f-bc33ba0ad131.png)
![chrome_K9Ux0zMlDs_20-02-2022](https://user-images.githubusercontent.com/38398866/181934022-8a784c6e-15e5-47a3-99f1-ef4431bfb0c1.png)
