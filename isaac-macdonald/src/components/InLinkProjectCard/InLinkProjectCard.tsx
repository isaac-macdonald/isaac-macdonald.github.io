import React, { useEffect, useRef, useState } from 'react';
import '../ProjectCard/ProjectCard.css';
import { Link } from 'react-router-dom';

interface InLinkProjectCardProps {
    title: string;
    techs: string[];
    description: string;
}

const InLinkProjectCard: React.FC<InLinkProjectCardProps> = ({ title, techs, description }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isMouseInside, setIsMouseInside] = useState(false);

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

        const handleMouseEnter = () => {
            setIsMouseInside(true);
        };

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
            <Link to="/cv-builder" className="project-link">
                View Project
            </Link>
        </div>
    );
};

export default InLinkProjectCard;
