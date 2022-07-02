import Link from 'next/link';

const Hero = () => {
  return (
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
      <Link href="/projects">
        <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">
          지금까지의 프로젝트 확인하러 가기
        </button>
      </Link>
    </div>
  );
};

export default Hero;
