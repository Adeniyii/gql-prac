import Link from "next/link";
import React from "react";
import { useMeQuery } from "../types/graphql";

const Nav = () => {
  const { data, loading } = useMeQuery({skip: typeof window === "undefined"});

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
        <button>Logout</button>
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
