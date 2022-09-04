import { Request, Response } from "express";
import { DataSource } from "typeorm";

export interface IContext {
	req: Request;
	res: Response;
	db: DataSource;
}
