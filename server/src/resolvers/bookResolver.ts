import { Book } from "../entities/Book";
import { Query, Resolver } from "type-graphql";

@Resolver(Book)
export class BookResolver {
	@Query(() => [Book])
	async books(){
		return Book.find({})
	}
}
