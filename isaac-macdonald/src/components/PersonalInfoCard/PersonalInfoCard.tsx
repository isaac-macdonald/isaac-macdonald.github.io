import React from 'react';
import './PersonalInfoCard.css';

interface PersonalInfoCardProps {
    name: string;
    bio: string;
    imageUrl: string;
}

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({ name, bio, imageUrl }) => {
    return (
        <div className="personal-info-card">
            <img src={imageUrl} alt={name} className="profile-img" />
            <div className="info">
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
        </div>
    );
}

export default PersonalInfoCard;
