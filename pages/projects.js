import axios from 'axios';

import Head from 'next/head';
import Layout from '../components/Layout';
import ProjectsItem from '../components/Projects/ProjectsItem';

import { DATABASE_ID, TOKEN_ID } from '../config';

const Projects = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>Projectory</title>
        <meta name="title" content="Projectory" />
        <meta
          name="description"
          content="Projectory - 꾸준히 무엇인가를 만드는 원동력이 되는 프로젝트를 확인해보세요!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://projectory-ochre.vercel.app/"
        />
        <meta property="og:title" content="Projectory" />
        <meta
          property="og:description"
          content="Projectory - 꾸준히 무엇인가를 만드는 원동력이 되는 프로젝트를 확인해보세요!"
        />
        <meta property="og:image" content="../public/img.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://projectory-ochre.vercel.app/"
        />
        <meta property="twitter:title" content="Projectory" />
        <meta
          property="twitter:description"
          content="Projectory - 꾸준히 무엇인가를 만드는 원동력이 되는 프로젝트를 확인해보세요!"
        />
        <meta property="twitter:image" content="../public/img.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Total Projects({projects.length})
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg am:text-sm text-center mx-auto">
              누군가는 혼자 만드는 프로젝트가 딴 짓에 불과하다고 이야기하지만,
              <br />
              저에게는 개발의 재미를 이어나갈 수 있는 좋은 경험이자
              원동력입니다.
              <br />
              아래에서 제가 지금까지 완성한 프로젝트를 확인하실 수 있습니다.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {projects.map((project) => {
              return <ProjectsItem project={project} key={project.id} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export async function getStaticProps() {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN_ID}`,
    },
    data: {
      sorts: [
        {
          property: 'Duration',
          direction: 'descending',
        },
      ],
      page_size: 100,
    },
  };

  const response = await axios.request(options);
  const projects = response.data.results;

  // const projectIds = projects.results.map((proj) => proj.id);

  // const projectTitles = projects.results.map(
  //   (proj) => project.properties.Name.title[0].plain_text,
  // );
  // console.log(projectIds);
  // console.log(projectTitles);

  // const response = await fetch(
  //   `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
  //   options,
  // );

  // const projects = await response.json();

  return {
    props: { projects },
  };
}
