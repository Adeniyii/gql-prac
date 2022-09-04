import { User } from "../entities/User";
import { IContext } from "../types";
import { AuthChecker } from "type-graphql";

// create auth checker function
export const authChecker: AuthChecker<IContext> = async ({context: {db, req}}, roles) => {
  const UserRepo = db.getRepository(User)
  const user = await UserRepo.findOne({where: {id: req.session.userId}})

  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return user !== undefined;
  }
  // there are some roles defined now

  if (!user) {
    // and if no user, restrict access
    return false;
  }
  if (roles.includes(user.role) || user.id === req.session.userId) {
    // grant access if the roles overlap or current user is target of opp
    console.log("here=====");

    return true;
  }

  // no roles matched, restrict access
  return false;
};
