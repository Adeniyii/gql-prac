import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../Components/Nav'
import Wrapper from '../Components/Wrapper'
import { useBooksQuery } from '../types/graphql'
import { useApollo } from '../utils/createApolloClient'

const Home: NextPage = () => {
  const {data, loading, error} = useBooksQuery()

  return (
    <Wrapper>
      <Head>
        <title>Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="mb-10 text-2xl font-semibold">Books</h1>
        <ul className="flex flex-col gap-4">
          {data?.books.map((book) => (
            <li
              key={book.id}
              className="p-4 rounded-lg min-h-[100px] border border-gray-700 bg-gray-800 font-semibold text-lg"
            >
              <h2>{book.title}</h2>
              <h3>{`By: ${book.author}`}</h3>
              <p>{`Published At: ${book.publishedAt}`}</p>
            </li>
          ))}
        </ul>
      </main>
    </Wrapper>
  );
}

export default useApollo({ssr: true})(Home)
