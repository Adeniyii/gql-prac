import DataLoader from "dataloader";
import { In } from "typeorm";
import { Book } from "../entities/Book";

export const createBookLoader = () => new DataLoader<number, Book>(async (keys) => {
	console.log("start user loader ====");
	const books = await Book.findBy({id: In(keys as number[])})
	console.log("finish user loader ====");

	const bookToIdMap: Record<number, Book> = {}

	books.forEach(book => bookToIdMap[book.id] = book)

	return keys.map(key => bookToIdMap[key])
})
