import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { createUserLoader } from "./helpers/createUserLoader";

interface ILoaders {
	user: ReturnType<typeof createUserLoader>
}

export interface IContext {
	req: Request;
	res: Response;
	db: DataSource;
	dataloaders: ILoaders
}
