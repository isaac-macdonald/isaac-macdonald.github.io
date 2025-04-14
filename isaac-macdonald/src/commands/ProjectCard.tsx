import React from 'react';

interface Props {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectCard = ({ title, description, image, link }: Props) => (
    <div className="terminal-card">
        <pre className="ascii-title">{title}</pre>
        <img src={image} alt={title} />
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">[ View on GitHub ]</a>
    </div>
);

export default ProjectCard;
