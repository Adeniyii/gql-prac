import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl">
        Hello world
      </main>

    </div>
  )
}

export default Home
