import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { Text } from '../components/Text'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Tecnologia para a Solução do Problema de Acesso à Educação</title>
        <link
          href="https://fonts.googleapis.com/css2?family=David+Libre:wght@400;700&family=Inter:wght@400;500&family=Roboto:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Text />
      <Footer />
    </div>
  )
}

export default Home
