import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { withApollo as createWithApollo } from "next-apollo"
import { PaginatedBooks } from "../types/graphql";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        paginatedBooks:{
          keyArgs: false,
          merge: (existing: PaginatedBooks, incoming: PaginatedBooks) => {
            const books = [...(existing?.books || []), ...(incoming?.books || [])]
            return {...existing, ...incoming, books}
          }
        }
      }
    }
  }
})

const client = (ctx: NextPageContext | undefined) => new ApolloClient({
  uri: "http://localhost:4000/graphql",
  headers: {
    cookie: (typeof window === "undefined" ? ctx?.req?.headers.cookie : undefined) || ""
  },
	credentials: "include",
	cache
})

export const withApollo = createWithApollo<{}, {}>(client);
