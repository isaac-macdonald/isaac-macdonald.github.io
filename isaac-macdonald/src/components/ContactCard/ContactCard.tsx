import React, { useState } from 'react';
import './ContactCard.css';
import {Download} from "lucide-react";

interface PersonalInfoCardProps {
    email: string;
    phoneNumber: string;
}

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({ email, phoneNumber }) => {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="contact-card">
            <h2>More Info</h2>
            <p><strong className="label">Email:</strong> <span className="detail">{email}</span></p>
            <p><strong className="label">Number:</strong> <span className="detail">{phoneNumber}</span></p>
            <p>
                <strong className="label">Download Resume:</strong>
                <a
                    href="/Isaac_Macdonald_Resume_Updated_2-4-2025.pdf"
                    download="Isaac_Macdonald_Resume"
                    className="download-link"
                >
                    <Download size={20} color="#000"/>
                </a>
            </p>
        </div>
    );
}

export default PersonalInfoCard;
