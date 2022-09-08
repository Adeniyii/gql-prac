import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import { useLoginMutation, MeDocument } from "../types/graphql";
import { withApollo } from "../utils/createApolloClient";

const login = () => {
	const [login, {data, loading, error}] = useLoginMutation()
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

  return (
    <Wrapper>
      <div className="max-w-3xl mx-auto">
        <form
          className="max-w-xl mx-auto"
          onSubmit={(e) => {
						e.preventDefault()
						login({ variables: { username, password }, update: (cache, {data}) => {
							cache.writeQuery({ query: MeDocument, data: {me: data?.login?.user} });
						} })}}
        >
          <h1 className="mb-10 text-2xl font-semibold">Login</h1>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Le goat"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default withApollo({ ssr: false })(login);
