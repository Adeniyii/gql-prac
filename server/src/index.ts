import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { AppSource } from "./data-source";
import UserResolver from "./resolvers/userResolver";
import session from "express-session"
import redisStore from "connect-redis"
import Redis from "ioredis"
import { __isprod__ } from "./constants";
import { IContext } from "./types";
import { authChecker } from "./helpers/authChecker";
import { BookResolver } from "./resolvers/bookResolver";
import { CollectionResolver } from "./resolvers/collectionResolver";
import { createUserLoader } from "./helpers/createUserLoader";

const main = async () => {
  const db = await AppSource.initialize();
  await db.runMigrations()

  const app = express();
  const RedisStore = redisStore(session);
  const redisClient = new Redis();

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
        disableTTL: true,
      }),
      saveUninitialized: false,
      secret: "keyboard cat",
      resave: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365 * 70, // 70 years
        secure: __isprod__,
        sameSite: "lax",
      },
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, BookResolver, CollectionResolver],
      authChecker: authChecker,
    }),
    context: ({ req, res }): IContext => ({ req, res, db, dataloaders: {user: createUserLoader()} }),
  });
  await apolloServer.start();
  // to enable apollo playground to send cookies to this server
  // app.set('trust proxy', !__prod__)

  // config to get cookie to be sent in the graphQl playground
  // the default for origin is "*".
  const corsConfig = {
    credentials: true,
    origin: ["https://studio.apollographql.com", "http://localhost:3000"],
  };
  apolloServer.applyMiddleware({ app, cors: corsConfig });

  app.get("/", (_, res) => {
    res.send("Helllllo nurseee");
  });

  app.listen(4000, () => {
    console.log("Wazzap");
  });
};

main();
