import React from 'react';


interface PersonalInfoCardProps {
    bio: string;
    imageUrl: string;
    skills: string[]; // New property for skills
}

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({ bio, imageUrl, skills }) => {
    return (
        <div className="personal-info-card">
            <img src={imageUrl} className="profile-img"/>
            <div className="info">
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