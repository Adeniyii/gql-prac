import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { withApollo } from "next-apollo"

const cache = new InMemoryCache()

const client = (ctx: NextPageContext | undefined) => new ApolloClient({
  uri: "http://localhost:4000/graphql",
  headers: {
    cookie: (typeof window === "undefined" ? ctx?.req?.headers.cookie : undefined) || ""
  },
	credentials: "include",
  connectToDevTools: true,
	cache
})

export const useApollo = withApollo<{}, {}>(client);
