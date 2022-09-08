import { Book } from "../entities/Book";
import { Arg, Args, ArgsType, Field, Int, ObjectType, Query, Resolver } from "type-graphql";

@ArgsType()
class PaginationInput {
  @Field(() => Int)
  take: number;
  @Field(() => String, { nullable: true })
  cursor: string;
}

@ObjectType()
class PaginatedBooks{
	@Field()
	hasMore: boolean;
	@Field(() => String, {nullable: true})
	nextCursor: string;
	@Field(() => [Book])
	books: Book[]
}

@Resolver(Book)
export class BookResolver {
  @Query(() => PaginatedBooks)
  async paginatedBooks(@Args() { take, cursor }: PaginationInput) {
		const maxTake = Math.min(20, take)
		const takeExtra = maxTake + 1

		let result = null;
		let hasMore = false
		let nextCursor = null

    let qb = Book.createQueryBuilder("b").orderBy('b."publishedAt"', "DESC")
		if (cursor){
			qb = qb.where('b."publishedAt" < :cursor', { cursor })
		}
		result = await qb.take(takeExtra).getMany();

		if (result.length > maxTake){
			hasMore = true
			result = result.slice(0, maxTake)
			nextCursor = result[maxTake-1].publishedAt
		}

		return {hasMore, nextCursor, books: result}
  }

  @Query(() => Book)
  async book(@Arg("id") id: number) {
    return Book.findOne({ where: { id } });
  }

  // TODO: add resolvers to create, update, and delete a book -- all with admin only priviledges
}
