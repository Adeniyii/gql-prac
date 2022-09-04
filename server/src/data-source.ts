import path from "path";
import { DataSource } from "typeorm";
import { __isprod__ } from "./constants";
import { Book } from "./entities/Book";
import { Collection } from "./entities/Collection";
import {User} from "./entities/User";
import { UserBookMetadata } from "./entities/UserBookMetadata";

export const AppSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "library",
  synchronize: !__isprod__,
  logging: true,
  entities: [User, Book, Collection, UserBookMetadata],
  migrations: [path.join(__dirname, "migrations/*.js")],
});
