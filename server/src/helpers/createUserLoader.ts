import DataLoader from "dataloader";
import { User } from "../entities/User";
import { In } from "typeorm";

export const createUserLoader = () => new DataLoader<number, User>(async (keys) => {
	console.log("start user loader ====");
	const users = await User.findBy({id: In(keys as number[])})

	console.log("finish user loader ====");


	const userMap: Record<number, User> = {}

	users.forEach(user => userMap[user.id] = user)

	return keys.map(key => userMap[key])
})
