import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useMeQuery, useLogoutMutation } from "../types/graphql";

const Nav = () => {
  const { data, loading } = useMeQuery({skip: typeof window === "undefined"});
  const [logout, {client}] = useLogoutMutation()
  const router = useRouter()

  let body;

  if (loading || typeof window === "undefined") {
    body = <span>Loading...</span>;
  } else if (!data?.me) {
    body = (
      <>
        <Link href="/login">
          <a className="link">Login</a>
        </Link>
        <Link href="/register">
          <a className="link">Register</a>
        </Link>
      </>
    );
  } else {
    body = (
      <>
        <span>{data?.me?.username}</span>
        <button className="link" onClick={async () => {
          logout({update: async (cache) => {
            // await client.clearStore()
            cache.evict({
              id: "ROOT_QUERY",
              fieldName: "me"
            })
            // cache.modify({
            //   id: "ROOT_QUERY",
            //   fields(existingUserRef, {DELETE}){
            //     return DELETE;
            //   }
            // })
            // cache.gc()
            router.push("/login")
          }})
          }}>Logout</button>
      </>
    );
  }

  return (
    <header className="w-full backdrop-blur-xl sticky border-b border-gray-700 mb-10 top-0">
      <div className="flex items-center w-full py-5 max-w-4xl mx-auto">
        <Link href="/" passHref>
          <a className="link">Home</a>
        </Link>
        <nav className="flex gap-4 ml-auto">
          {body}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
