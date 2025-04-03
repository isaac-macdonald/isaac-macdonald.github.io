import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { jsPDF } from 'jspdf';
import './CvBuilder.css';
import SkillsInput from "../SkillInput/SkillInput";
import Divider from "../Divider/Divider";
import WorkExperience from "../WorkExperience/WorkExperience";
import Education from "../Education/Education"; // Import WorkExperience component

interface JobEntry {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
}

interface EducationEntry {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
}

const CvBuilder: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState<JobEntry[]>([]);
    const [education, setEducation] = useState<EducationEntry[]>([]);
    const [number, setNumber] = useState('');
    const [summary, setSummary] = useState('');
    const [profile, setProfile] = useState('');

    const generateCv = () => {
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text("Resume", 105, 20);

        doc.setFontSize(14);
        doc.text("Name: " + name, 20, 40);
        doc.text("Email: " + email, 20, 50);
        doc.text("Work Experience:", 20, 60);

        experience.forEach((job, index) => {
            doc.text(`Job Title: ${job.title}`, 20, 70 + index * 20);
            doc.text(`From: ${job.startDate} - To: ${job.endDate}`, 20, 80 + index * 20);
            doc.text(`Location: ${job.location}`, 20, 90 + index * 20);
            doc.text(`Description: ${job.description}`, 20, 100 + index * 20);
        });

        doc.text("Education:", 20, 150);
        experience.forEach((education, index) => {
            doc.text(`Job Title: ${education.title}`, 20, 70 + index * 20);
            doc.text(`From: ${education.startDate} - To: ${education.endDate}`, 20, 80 + index * 20);
            doc.text(`Location: ${education.location}`, 20, 90 + index * 20);
            doc.text(`Description: ${education.description}`, 20, 100 + index * 20);
        });


        doc.save("resume.pdf");
    };

    return (
        <div>
            <Navbar />
            <div className="cv-builder-content">
                <h1>Welcome to the CV Builder</h1>
                <Divider />

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        generateCv();
                    }}
                >
                    <h1>Personal Information</h1>
                    <div className="card">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g Bilbo Baggins" required />
                    </div>

                    <div className="card">
                        <label htmlFor="summary">Short Summary:</label>
                        <input type="text" id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="e.g Adventure Lover" required />
                    </div>

                    <div className="card">
                        <label htmlFor="number">Number:</label>
                        <input type="text" id="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="e.g +64 XX XXXX XXXX" required />
                    </div>

                    <div className="card">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g bilboLovesRings@ibeatadragon.com" required />
                    </div>

                    <div className="card">
                        <label htmlFor="profile">Profile:</label>
                        <textarea id="profile" value={profile} onChange={(e) => setProfile(e.target.value)} placeholder="Write a little something about you" />
                    </div>

                    <SkillsInput />

                    <Divider />

                    {/* Work Experience Component */}
                    <WorkExperience workExperience={experience} setWorkExperience={setExperience} />

                    <Divider />

                    <Education education={education} setEducation={setEducation} />

                    <Divider />

                    <button type="submit">Generate CV</button>
                </form>
            </div>
        </div>
    );
};

export default CvBuilder;
