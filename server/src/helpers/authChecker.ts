import { User } from "../entities/User";
import { IContext } from "../types";
import { AuthChecker } from "type-graphql";

// create auth checker function
export const authChecker: AuthChecker<IContext> = async ({context: {db, req}}, roles) => {
  console.log("start: check is admin ======");
  const UserRepo = db.getRepository(User)
  const user = await UserRepo.findOne({where: {id: req.session.userId}})

  console.log("finish: check is admin ======");


  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return user !== undefined;
  }

  // there are some roles defined now
  if (!user) {
    // and if no user, restrict access
    return false;
  }
  if (roles.includes(user.role)) {
    // grant access if the roles overlap
    return true;
  }

  // no roles matched, restrict access
  return false;
};
