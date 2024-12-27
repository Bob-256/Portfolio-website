import React, { useState } from "react";
import offBrandMarioImage from "../images/Off brand mario.png";
import img3DPlatformer from "../images/3d platformer screenshot.png";
import img2DPlatformer from "../images/2d Platformer screenshot.png";

function Projects() {
  const [detailsVisible, setDetailsVisible] = useState({});

  const toggleDetails = (projectId) => {
    setDetailsVisible((prevState) => ({
      ...prevState,
      [projectId]: !prevState[projectId],
    }));
  };

  const projects = [
    {
      id: "project1",
      title: "Game Project 1: Off-Brand Mario 2D",
      description: "A fun and cool shooter game!",
      details:
        "The game is about someone in the military doing campaign missions to fight for his Country. You can fight against Russians, American criminals, and Battleships!",
      image: offBrandMarioImage,
      video: "https://www.youtube.com/embed/OAwulPb9m3s",
      codeLink: "https://github.com/yourusername/project1",
      playLink: "https://game1.example.com",
    },
    {
      id: "project2",
      title: "Game Project 2: Mega Bean Does Parkour",
      description: "A fun and cool shooter game!",
      details:
        "The game is about someone in the military doing campaign missions to fight for his Country. You can fight against Russians, American criminals, and Battleships!",
      image: img3DPlatformer,
      video: "https://www.youtube.com/embed/ckRsxmpFC2M",
      codeLink: "https://github.com/yourusername/project1",
      playLink: `${process.env.PUBLIC_URL}/WebGlGames/MegaBeanParkour/index.html`,
    },
    {
      id: "project3",
      title: "Game Project 3: 2D Platformer",
      description: "A fun and cool shooter game!",
      details: "You jump around on blocks and attempt to not fall off.",
      image: img2DPlatformer,
      video: "https://www.youtube.com/embed/DmhgALevfEU",
      codeLink: "https://github.com/yourusername/project1",
      playLink: `${process.env.PUBLIC_URL}/WebGlGames/2D-Platformer/index.html`,
    },
  ];

  return (
    <section id="projects" className="py-10 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="mb-3 text-gray-700">{project.description}</p>
            <button
              className="text-blue-500 underline mb-3"
              onClick={() => toggleDetails(project.id)}
            >
              {detailsVisible[project.id] ? "Hide Details" : "View Details"}
            </button>
            {detailsVisible[project.id] && (
              <div className="mt-4">
                <p className="mb-4 text-gray-600">{project.details}</p>
                <a
                  href={project.playLink}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mb-4 inline-block"
                >
                  Play Game!
                </a>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <iframe
                  width="100%"
                  height="200"
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded"
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
