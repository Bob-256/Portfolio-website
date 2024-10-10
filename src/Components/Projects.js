import React, { useState } from 'react';
import offBrandMarioImage from '../images/Off brand mario.png';

function Projects() {
  const [detailsVisible, setDetailsVisible] = useState({});

  const toggleDetails = (projectId) => {
    setDetailsVisible(prevState => ({
      ...prevState,
      [projectId]: !prevState[projectId]
    }));
  };

  const projects = [
    {
      id: 'project1',
      title: 'Game Project 1: Off Brand Mario 2D',
      description: 'A fun and cool shooter game!',
      details: 'The game is about someone in the military doing campaign missions to fight for his Country. You can fight against Russians, American criminals, and Battleships!',
      image: 'images/Off brand mario.png',
      video: 'https://www.youtube.com/embed/OAwulPb9m3s',
      codeLink: 'https://github.com/yourusername/project1',
      playLink: 'https://game1.example.com'
    },
    {
      id: 'project2',
      title: 'Game Project 2: Mega Bean Does Parkour',
      description: 'A fun and cool shooter game!',
      details: 'The game is about someone in the military doing campaign missions to fight for his Country. You can fight against Russians, American criminals, and Battleships!',
      image: 'images/3d platformer screenshot.png',
      video: 'https://www.youtube.com/embed/ckRsxmpFC2M',
      codeLink: 'https://github.com/yourusername/project1',
      playLink: 'https://game1.example.com'
    },
    {
      id: 'project3',
      title: 'Game Project 3: 2D Platformer',
      description: 'A fun and cool shooter game!',
      details: 'You jump around on blocks and attempt to not fall off.',
      image: 'images/2d Platformer screenshot.png',
      video: 'https://www.youtube.com/embed/DmhgALevfEU',
      codeLink: 'https://github.com/yourusername/project1',
      playLink: 'https://game1.example.com'
    }
  ];
  

  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white shadow-md p-5 rounded-md">
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="mb-3">{project.description}</p>
            <button
              className="text-blue-500 underline"
              onClick={() => toggleDetails(project.id)}
            >
              {detailsVisible[project.id] ? 'Hide Details' : 'View Details'}
            </button>
            {detailsVisible[project.id] && (
              <div className="mt-4">
                <p>{project.details}</p>
                <img src={offBrandMarioImage} alt={project.title} className="w-full mb-3" />
                <iframe
                  width="100%"
                  height="315"
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
