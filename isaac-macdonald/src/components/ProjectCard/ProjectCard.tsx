import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    techs: string[];
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, techs,description, link }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <div className="techs">
                {techs.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                ))}
            </div>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ProjectCard;
