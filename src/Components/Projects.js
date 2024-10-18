import React, { useState } from 'react';

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
            details: 'The game is about someone in the military doing campaign missions...',
            image: '../images/Off brand mario.png',
            video: 'https://www.youtube.com/embed/OAwulPb9m3s'
        },
        // Add other projects here...
    ];

    return (
        <section id="projects" className="mb-5">
            <h2 className="text-center mb-4">Projects</h2>
            <div className="project-container">
                {projects.map(project => (
                    <div key={project.id} className="project-card mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-text">{project.description}</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => toggleDetails(project.id)}
                                >
                                    {detailsVisible[project.id] ? 'Hide Details' : 'View Details'}
                                </button>
                                {detailsVisible[project.id] && (
                                    <div className="project-details mt-3">
                                        <p>{project.details}</p>
                                        <img src={project.image} alt={project.title} className="img-fluid mb-3" />
                                        <iframe
                                            width="560"
                                            height="315"
                                            src={project.video}
                                            title={project.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
