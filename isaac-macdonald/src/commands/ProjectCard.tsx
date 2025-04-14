import React, { useState } from 'react';


interface ProjectCardProps {
    title: string;
    techs: string[];
    description: string;
    link: string;
    imageFilenames?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, techs, description, link, imageFilenames }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        if (!imageFilenames) return;
        setCurrentImageIndex((prev) => (prev + 1) % imageFilenames.length);
    };

    const handlePrev = () => {
        if (!imageFilenames) return;
        setCurrentImageIndex((prev) => (prev - 1 + imageFilenames.length) % imageFilenames.length);
    };

    return (
        <div
            className='terminal-card'
        >
            <h3>{title}</h3>
            <div className="techs">
                {techs.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                ))}
            </div>
            <p>{description}</p>

            {imageFilenames && (
                <div>
                    <img
                        src={imageFilenames[currentImageIndex]}
                        alt={`${title} screenshot ${currentImageIndex + 1}`}
                        className="project-image fade"
                    />
                    <div>
                        <button onClick={handlePrev}>&lt;</button>
                        <button onClick={handleNext}>&gt;</button>
                    </div>
                </div>
            )
            }

            <button
                className="project-link"
                onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            >
                View Project
            </button>
        </div>
    );
};

export default ProjectCard;