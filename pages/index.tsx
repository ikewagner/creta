import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Footer from '../components/layout/Footer';
import Cards from '../components/Cards';
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Creta - Arquitetura e Engenharia</title>
        <link rel="icon" href="/icone.png" />
      </Head>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28"></div>
        </div>
        <Hero />
        <Cards />
        <Contact />
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
