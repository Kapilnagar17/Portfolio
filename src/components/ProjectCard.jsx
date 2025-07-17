import React from 'react';

function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
