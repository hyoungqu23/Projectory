import React from 'react';
import Image from 'next/image';

const ProjectsItem = ({ project }) => {
  return (
    <div className="flex flex-col bg-white border rounded-t-xl overflow-hidden project-card">
      <a
        href={project.url}
        className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
      >
        <Image
          src={project.cover.external.url}
          loading="lazy"
          alt="Photo by Minh Pham"
          layout="fill"
          className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
        />
      </a>

      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <h2 className="text-gray-800 text-lg font-semibold mb-2">
          <a
            href={project.url}
            className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            {project.properties.Name.title[0].plain_text}
          </a>
        </h2>

        <p className="text-gray-500 mb-8">
          {project.properties.Description.rich_text[0].plain_text}
        </p>

        <div className="flex flex-nowrap items-start mt-2">
          {project.properties.Skills.multi_select.map((tag) => {
            return (
              <span
                key={tag.id}
                className="px-2 py-1 mr-2 text-sm rounded-md bg-sky-200 dark:bg-sky-700 text-gray-800 hover:text-gray-100 hover:bg-sky-800"
              >
                {tag.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
