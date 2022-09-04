import { Collection } from "../entities/Collection";
import { User } from "../entities/User";
import { IContext } from "../types";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

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
}
