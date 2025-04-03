import React, { useState } from 'react';
import './WorkExperience.css';

interface JobEntry {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
}

interface WorkExperienceProps {
    workExperience: JobEntry[];
    setWorkExperience: (experience: JobEntry[]) => void;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperience, setWorkExperience }) => {
    const addJob = () => {
        const newJob: JobEntry = {
            id: Date.now(), // Unique ID
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            description: ''
        };
        setWorkExperience([...workExperience, newJob]);
    };

    const updateJob = (id: number, field: keyof JobEntry, value: string) => {
        setWorkExperience(
            workExperience.map(job =>
                job.id === id ? { ...job, [field]: value } : job
            )
        );
    };

    const deleteJob = (id: number) => {
        setWorkExperience(workExperience.filter(job => job.id !== id));
    };

    return (
        <div>
            <h1>Work Experience</h1>
            {workExperience.map((job) => (
                <div key={job.id} className="card">
                    <label>Job Title:</label>
                    <input
                        type="text"
                        value={job.title}
                        onChange={(e) => updateJob(job.id, 'title', e.target.value)}
                        placeholder="e.g. Software Engineer"
                    />
                    <label>Start Date:</label>
                    <input
                        type="month"
                        value={job.startDate}
                        onChange={(e) => updateJob(job.id, 'startDate', e.target.value)}
                        placeholder="November 2024"
                    />

                    <label>End Date:</label>
                    <input
                        type="month"
                        value={job.endDate}
                        onChange={(e) => updateJob(job.id, 'endDate', e.target.value)}
                        placeholder="Feburary 2025"
                    />

                    <label>Location:</label>
                    <input
                        type="text"
                        value={job.location}
                        onChange={(e) => updateJob(job.id, 'location', e.target.value)}
                        placeholder="e.g. Wellington, NZ"
                    />

                    <label>Job Description:</label>
                    <textarea
                        value={job.description}
                        onChange={(e) => updateJob(job.id, 'description', e.target.value)}
                        placeholder="Describe your responsibilities..."
                    />

                    <button type="button" onClick={() => deleteJob(job.id)}>Delete</button>
                </div>
            ))}

            <button type="button" onClick={addJob}>+</button>
        </div>
    );
};

export default WorkExperience;
