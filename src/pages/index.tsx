import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elonails</title>
      </Head>
      <Hero />
      <Footer />
    </>
  );
}
