import React from 'react';
import './PersonalInfoCard.css';


interface PersonalInfoCardProps {
    name: string;
    bio: string;
    imageUrl: string;
    skills: string[]; // New property for skills
}

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({ name, bio, imageUrl, skills }) => {
    return (
        <div className="personal-info-card">
            <img src={imageUrl} alt={name} className="profile-img"/>
            <div className="info">
                <h2>{name}</h2>
                <p>{bio}</p>
                <h3>Skills</h3>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-badge">{skill}</span>
                    ))}
                </div>
            </div>

        </div>
    );
}
export default PersonalInfoCard;
