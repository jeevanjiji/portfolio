
import React from 'react';
import type { Project } from '../types';
import { LinkIcon } from './icons/LinkIcon';
import { GitHubIcon } from './icons/GitHubIcon';

const projectsData: Project[] = [
  {
    title: 'AstroSiege',
    description: 'A fast-paced 2D space shooter built with Python and the Pygame library, featuring multiple enemy types and power-ups.',
    tags: ['Python', 'Pygame'],
    imageUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=400&fit=crop',
    link: 'https://jeevn.itch.io/astro-siege',
  },
  {
    title: 'WebSphere',
    description: 'A full-stack freelancer marketplace platform connecting clients with skilled professionals, built with the MERN stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    link: 'https://websphere-six.vercel.app/',
  },
  {
    title: 'FarmConnect',
    description: 'A platform for farmers to buy and sell their agricultural produce, connecting farmers directly with buyers for better market access.',
    tags: ['React', 'Node.js', 'MongoDB', 'Agriculture'],
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    githubLink: 'https://github.com/jeevanjiji/farmconnect',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 h-24">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
          >
            View Project <LinkIcon className="ml-2 w-4 h-4" />
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
          >
            View on GitHub <GitHubIcon className="ml-2 w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
          <p className="text-lg text-gray-600 mt-2">A selection of my recent work.</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
