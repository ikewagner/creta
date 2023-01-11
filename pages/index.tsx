import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import Cards from '../components/Cards'
import ContactForm from '../components/Contact'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Creta - Arquitetura e Engenharia</title>
        <link rel="icon" href="/icone.png" />
      </Head>
      <Header />
      <Main/>
      <Cards/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home
