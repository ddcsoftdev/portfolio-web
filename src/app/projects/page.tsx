'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { type Metadata } from 'next';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import Filter from '@/components/Filter';

import logoCosmos from '@/images/logos/cosmos.svg';
import { getProjects } from '../../services/client';
import ProjectModel from '../../models/project-model';

// Icon Component
function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [tags, setTags] = useState<Record<string, unknown>>({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects(tags);
        setProjectsToModel(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [tags]);

  const handleTagsChange = (updatedTags: Record<string, unknown>) => {
    setTags(updatedTags);
  };

  const setProjectsToModel = (data: any) => {
    const projectList = data.data.projects.map((element: any): ProjectModel => ({
      id: element.id,
      title: element.name,
      type: element.type,
      language: element.language,
      framework: element.framework,
      deployment: element.deployment,
      description: element.description.text,
      repositry: element.repository,
      image: element.image?.url || logoCosmos,
    }));

    setProjects(projectList);
  };

  return (
    <SimpleLayout
      title="Things I’ve Built to Leave My Personal Mark."
      intro="Over the years, I’ve embarked on a variety of personal and 
      collaborative projects, each of them teaching me something new. 
      I’m passionate about coding, creativity, and pushing 
      the boundaries of what's possible through technology. 
      Here are a few projects that I’m especially proud of. 
      They represent a mix of backend development, interactive experiences, 
      and gaming — each one a testament to my growth 
      and experimentation in the tech world. 
      Feel free to explore the open-source repos!"
    >
      <Filter onTagsChange={handleTagsChange} />
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-5"
      >
        {projects.map((project) => (
          <Card
            as="li"
            key={project.title}
            className="border border-gray-300 dark:border-gray-700 shadow-md rounded-lg p-4 bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors duration-200"
          >
            <div className="relative z-10 flex w-full h-32 items-center justify-center  bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.image}
                alt=""
                className="h-full w-full"
                unoptimized
                width={500}
                height={500}
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.title}
            </h2>
            <div className="text-sm font-medium">
              <h3>Type: {Array.isArray(project.type) ? project.type.join(', ') : project.type}</h3>
              <h5>Language: {Array.isArray(project.language) ? project.language.join(', ') : project.language}</h5>
              <h5>Framework: {Array.isArray(project.framework) ? project.framework.join(', ') : project.framework}</h5>
              <h5>Deployment: {Array.isArray(project.deployment) ? project.deployment.join(', ') : project.deployment}</h5>
            </div>
            <Card.Description>{project.description}</Card.Description>
            <a href={project.repositry} target="_blank" rel="noopener noreferrer">
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">Repository</span>
              </p>
            </a>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
