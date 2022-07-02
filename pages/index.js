import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Projectory</title>
        <meta name="description" content="Projectory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div className="xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24">
              <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                Projectory
              </h1>

              <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
                심심할 때, 뭔가 만들고 싶을 때, 길을 걸어가다가 생각날 때
                <br />
                언제든지 아이디어를 기록하세요!
                <br />
                그것만으로도 당신의 프로젝트가 빛나게 될 거에요!
              </p>

              <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">
                지금까지의 프로젝트 확인하러 가기
              </button>
            </div>
            <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1620206343767-7da98185edd4?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
