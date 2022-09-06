import { Collection } from "../entities/Collection";
import { User } from "../entities/User";
import { IContext } from "../types";
import { Arg, Args, ArgsType, Ctx, Field, Int, Mutation, Query, Resolver } from "type-graphql";
import { Book } from "../entities/Book";

@ArgsType()
class AddBookToCollectionArgs{
  @Field(() => Int)
  bookId!: number;

  @Field(() => Int)
  collectionId!: number;
}

@Resolver(Collection)
export class CollectionResolver {
	@Query(() => [Collection])
	async getcollections(){
		return Collection.find({relations: {books: true}})
	}

  @Mutation(() => Collection, { nullable: true })
  async createCollection(@Arg("name") name: string, @Ctx() { req }: IContext) {
    const user = await User.findOne({ where: { id: req.session.userId } });
    if (!user) return null;

    const collection = new Collection();

    collection.name = name;
    collection.owner = user;

    const result = await Collection.save(collection);
    return result;
  }

  @Mutation(() => Collection, {nullable: true})
  async addBookToCollection(@Args() {collectionId: id, bookId}: AddBookToCollectionArgs, @Ctx() {req}: IContext){
    const book = await Book.findOne({where: {id: bookId}})
    const collection = await Collection.findOne({where: {id}, relations: {books: true}})

    if (!book || !collection || collection.ownerId !== req?.session?.userId) return null

    collection.books = [...collection.books, book]
    return Collection.save(collection)
  }
}
