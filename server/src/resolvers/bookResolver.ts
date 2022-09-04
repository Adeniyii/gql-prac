import { Book } from "../entities/Book";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver(Book)
export class BookResolver {
	@Query(() => [Book])
	async books(){
		return Book.find({})
	}

	@Query(() => Book)
	async book(@Arg("id") id: number){
		return Book.findOne({where: {id}})
	}

	// TODO: add resolvers to create, update, and delete a book -- all with admin only priviledges
}
