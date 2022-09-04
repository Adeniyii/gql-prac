import { RoleEnum, SubscriptionEnum, User } from "../entities/User";
import {
	Arg,
  Args,
  ArgsType,
  Authorized,
  createUnionType,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { IContext } from "../types";
import argon2 from "argon2";

// Q: Is @InputType() different from @ArgsType()?
// A: Of course! @InputType will generate a real GraphQLInputType type and should be used when we need a nested object in the args:
@ArgsType()
class RegistrationInput {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field(() => RoleEnum)
  role: RoleEnum;
  @Field()
  password: string;
  @Field(() => SubscriptionEnum)
  subscription: SubscriptionEnum;
}

@ArgsType()
class LoginInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class ErrorResponse {
  @Field(() => [FieldError])
  errors: FieldError[];
}

@ObjectType()
class UserResponse {
  @Field(() => User)
  user: User;
}

const UserErrorUnion = createUnionType({
  name: "UserErrorResponse", // the name of the GraphQL union
  types: () => [UserResponse, ErrorResponse] as const, // function that returns tuple of object types classes
  resolveType: (value) => {
    if ("errors" in value) return ErrorResponse;
    if ("user" in value) return UserResponse;
    return undefined;
  },
});

@Resolver(User)
class UserResolver {
  @FieldResolver()
  email(@Root() root: User, @Ctx() { req }: IContext) {
    if (root.id !== req.session.userId) return "";
    return root.email;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, db }: IContext) {
    const userRepo = db.getRepository(User);
    const user = await userRepo.findOne({ where: { id: req.session.userId } });
    console.log("user: ", user);

    if (!user) return null;
    return user;
  }

  @Query(() => [User], { nullable: true })
  async users(): Promise<User[] | null> {
    return await User.find({relations: {
      collections: true
    }});
  }

  @Query(() => User, { nullable: true })
  async user(@Ctx() { req }: IContext): Promise<User | null> {
    return await User.findOne({ where: { id: req.session.userId } });
  }

  @Mutation(() => User)
  async register(
    @Args() { password, ...input }: RegistrationInput,
    @Ctx() { req }: IContext
  ) {
    const hashedPassword = await argon2.hash(password);
    const newUser = await User.createQueryBuilder("u")
      .insert()
      .into(User)
      .values({ ...input, password: hashedPassword })
      .returning("*")
      .execute();

    req.session.userId = newUser.raw[0].id;
    return newUser.raw[0];
  }

  @Mutation(() => UserErrorUnion)
  async login(
    @Ctx() { req }: IContext,
    @Args() { password, ...input }: LoginInput
  ): Promise<typeof UserErrorUnion> {
    const user = await User.findOne({ where: { ...input } });
    if (!user) {
      return {
        errors: [{ field: "username", message: "username does not exist" }],
      };
    }
    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) {
      return { errors: [{ field: "password", message: "invalid password" }] };
    }

    req.session.userId = user.id;
    return { user };
  }

	@Authorized(["ADMIN"])
	@Mutation(() => Boolean)
	async deactivate(@Arg("id") id: number){
		await User.createQueryBuilder("u")
      .delete()
      .from(User)
      .where("id = :id", { id })
			.execute();

		return true;
	}
}

export default UserResolver;
