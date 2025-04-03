import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'; // Import the same Navbar
import { jsPDF } from 'jspdf'; // Import jsPDF for PDF generation
import './CvBuilder.css';
import SkillsInput from "../SkillInput/SkillInput";
import Divider from "../Divider/Divider"; // Assuming you've styled your component

const CvBuilder: React.FC = () => {
    // State to hold user input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [number, setNumber] = useState('');
    const [summary, setSummary] = useState('');
    const [profile, setProfile] = useState('');


    // Function to generate PDF
    const generateCv = () => {
        const doc = new jsPDF();

        // Add content to PDF
        doc.setFontSize(20);
        doc.text("Resume", 105, 20);

        doc.setFontSize(14);
        doc.text("Name: " + name, 20, 40);
        doc.text("Email: " + email, 20, 50);
        doc.text("Work Experience:", 20, 60);
        doc.text(experience, 20, 70);
        doc.text("Education:", 20, 100);
        doc.text(education, 20, 110);

        // Save the PDF
        doc.save("resume.pdf");
    };

    return (
        <div>
            <Navbar />
            <div className="cv-builder-content">
                <h1>Welcome to the CV Builder</h1>

                <Divider />
                {/* CV Form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); // Prevent form submission to avoid page reload
                        generateCv(); // Call generateCv function
                    }}
                >
                    <h1>Personal Information</h1>
                    <div className="card">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="card">
                        <label htmlFor="oneLineSummary">Short Summary:</label>
                        <input
                            type="text"
                            id="summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            placeholder="Isaac Macdonald"
                            required
                        />
                    </div>
                    <div className="card">
                        <label htmlFor="number">Number</label>
                        <input
                            type="text"
                            id="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="+64 29 0430 0248"
                            required
                        />
                    </div>
                    <div className="card">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div className="card">
                        <label htmlFor="profile">Profile:</label>
                        <textarea
                            id="profile"
                            value={profile}
                            onChange={(e) => setProfile(e.target.value)}
                            placeholder="Write your profile"
                        />
                    </div>

                    <SkillsInput />

                    <Divider />

                    <h1>Work Experience</h1>

                    <div className="card">
                        <label htmlFor="experience">Work Experience:</label>
                        <textarea
                            id="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            placeholder="Your Work Experience"
                        />
                    </div>
                    <div className="card">
                        <label htmlFor="education">Education:</label>
                        <textarea
                            id="education"
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                            placeholder="Your Education"
                        />
                    </div>

                    <button type="submit">Generate CV</button>
                </form>
            </div>
        </div>
    );
};

export default CvBuilder;
