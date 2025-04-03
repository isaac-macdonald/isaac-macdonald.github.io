import React, { useState } from 'react';
import './Education.css';

interface EducationEntry {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
}

interface EducationProps {
    education: EducationEntry[];
    setEducation: (experience: EducationEntry[]) => void;
}

const Education: React.FC<EducationProps> = ({ education, setEducation }) => {
    const addEducation= () => {
        const newEducation: EducationEntry = {
            id: Date.now(), // Unique ID
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            description: ''
        };
        setEducation([...education, newEducation]);
    };

    const updateEducation = (id: number, field: keyof EducationEntry, value: string) => {
        setEducation(
            education.map(job =>
                job.id === id ? { ...job, [field]: value } : job
            )
        );
    };

    const deleteEducation = (id: number) => {
        setEducation(education.filter(education => education.id !== id));
    };

    return (
        <div>
            <h1>Education</h1>
            {education.map((educationEntry) => (
                <div key={educationEntry.id} className="card">

                    <label>Location:</label>
                    <input
                        type="text"
                        value={educationEntry.location}
                        onChange={(e) => updateEducation(educationEntry.id, 'location', e.target.value)}
                        placeholder="e.g. University of Canterbury"
                    />
                    <label>Qualification:</label>
                    <input
                        type="text"
                        value={educationEntry.title}
                        onChange={(e) => updateEducation(educationEntry.id, 'title', e.target.value)}
                        placeholder="e.g. Bachelor of Engineering"
                    />
                    <label>Start Date:</label>
                    <input
                        type="month"
                        value={educationEntry.startDate}
                        onChange={(e) => updateEducation(educationEntry.id, 'startDate', e.target.value)}
                        placeholder="Feburary 2023"
                    />

                    <label>End Date:</label>
                    <input
                        type="month"
                        value={educationEntry.endDate}
                        onChange={(e) => updateEducation(educationEntry.id, 'endDate', e.target.value)}
                        placeholder="November 2026"
                    />

                    <label>Further info:</label>
                    <textarea
                        value={educationEntry.description}
                        onChange={(e) => updateEducation(educationEntry.id, 'description', e.target.value)}
                        placeholder="Detail your studies"
                    />

                    <button type="button" onClick={() => deleteEducation(educationEntry.id)}>Delete</button>
                </div>
            ))}

            <button type="button" onClick={addEducation}>+</button>
        </div>
    );
};

export default Education;
