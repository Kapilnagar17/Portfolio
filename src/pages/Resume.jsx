import React from 'react';

function Resume() {
  return (
    <section className="max-w-2xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Resume</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Education</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>Bachelor of Technology in Computer Science - Example University</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Experience</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>Frontend Developer at Example Company (2022 - Present)</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
