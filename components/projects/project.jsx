import React from 'react'

export default function Project({ project }) {
    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <ul>
                {project.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}
