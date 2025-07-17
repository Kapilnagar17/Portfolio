import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React, Vite, and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'E-commerce App',
    description: 'A sample e-commerce application with shopping cart and checkout features.',
    link: '#',
  },
];

function Projects() {
  return (
    <section className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h2>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </section>
  );
}

export default Projects;
