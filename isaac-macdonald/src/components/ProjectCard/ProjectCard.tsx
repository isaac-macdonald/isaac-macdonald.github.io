import React, { useEffect, useRef, useState } from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    techs: string[];
    description: string;
    link: string;
    imageFilenames?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, techs, description, link, imageFilenames }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;

            card.style.setProperty('--mouse-x', `${percentX}%`);
            card.style.setProperty('--mouse-y', `${percentY}%`);
        };

        const handleMouseEnter = () => setIsMouseInside(true);
        const handleMouseLeave = () => {
            setIsMouseInside(false);
            card.style.removeProperty('--mouse-x');
            card.style.removeProperty('--mouse-y');
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

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
            className={`project-card ${isMouseInside ? 'mouse-entered' : ''}`}
            ref={cardRef}
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
