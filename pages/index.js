import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Hero from '../components/Home/Hero';
import Animation from '../components/Home/Animation';

import lottieJson from '../public/animation_home.json';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Projectory</title>
        <meta name="description" content="Projectory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 bg-primary">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-2 sm:gap-5 md:gap-8">
            <Hero />
            <Animation lottieJson={lottieJson} />
          </section>
        </div>
      </div>
    </Layout>
  );
}
