import React from 'react';
import './InLinkProjectCard.css';
import { Link } from 'react-router-dom';

interface InLinkProjectCardProps {
    title: string;
    techs: string[];
    description: string;
}

const InLinkProjectCard: React.FC<InLinkProjectCardProps> = ({ title, techs,description }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <div className="techs">
                {techs.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                ))}
            </div>
            <p>{description}</p>
            <Link to="/cv-builder">View Project</Link>
        </div>
    );
}

export default InLinkProjectCard;
