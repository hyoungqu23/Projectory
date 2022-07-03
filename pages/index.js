import Head from 'next/head';
import Layout from '../components/UI/Layout';
import Hero from '../components/Home/Hero';
import Animation from '../components/Home/Animation';

import lottieJson from '../public/animation.json';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Projectory</title>
        <meta name="title" content="Projectory" />
        <meta
          name="description"
          content="Projectory - 꾸준히 무엇인가를 만드는 원동력이 되는 프로젝트를 확인해보세요!"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 bg-primary">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-evenly  gap-1 sm:gap-5 md:gap-8">
            <Hero />
            <Animation lottieJson={lottieJson} />
          </section>
        </div>
      </div>
    </Layout>
  );
}
