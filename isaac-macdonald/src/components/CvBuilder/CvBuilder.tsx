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
    const [reference1Name, setReference1Name] = useState('');
    const [reference2Name, setReference2Name] = useState('');
    const [reference1Phone, setReference1Phone] = useState('');
    const [reference2Phone, setReference2Phone] = useState('');

    const generateCv = () => {
        const doc = new jsPDF();
        let y = 20; // Start Y position
        const pageHeight = doc.internal.pageSize.height; // Get page height

        function checkPageOverflow(extraSpace = 10) {
            if (y + extraSpace > pageHeight - 20) { // Ensure margin at bottom
                doc.addPage();  // Adds a new page
                y = 20;  // Reset Y for new page
            }
        }// Start Y position

// Set font and title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Resume", 105, y, { align: "center" });

        y += 15; // Move down
        doc.setFontSize(16);
        doc.text(name, 105, y, { align: "center" });

        y += 10;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(email, 105, y, { align: "center" });

        y += 10;
        doc.text(number, 105, y, { align: "center" });

        y += 15; // Add spacing before next section
        checkPageOverflow()
// Profile Section
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("PROFILE", 20, y);

        y += 10;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(summary, 20, y, { maxWidth: 170 });

        y += 15; // Add spacing before next section
        checkPageOverflow() //todo check length of skills
// Skills Section
        doc.setFont("helvetica", "bold");
        doc.text("SKILLS", 20, y);

        y += 7;
        doc.setFont("helvetica", "normal");
        const skills = ["Excellent Judgement", "Python", "Java", "Strong Communication", "React", "Linux CLI"];
        skills.forEach((skill) => {
            doc.text(`• ${skill}`, 20, y);
            y += 7; // Move down for next skill
        });

        y += 10; // Add spacing before next section

// Experience Section
        doc.setFont("helvetica", "bold");
        doc.text("EXPERIENCE", 20, y);

        y += 7;
        doc.setFont("helvetica", "normal");
        experience.forEach((job) => {
            doc.setFont("helvetica", "bold");
            doc.text(job.title, 20, y);

            y += 7;
            doc.setFont("helvetica", "italic");
            doc.text(job.location, 20, y);

            y += 7;
            doc.setFont("helvetica", "normal");
            doc.text(`From: ${job.startDate} - To: ${job.endDate}`, 20, y);

            y += 7;
            doc.text(job.description, 20, y, { maxWidth: 170 });

            y += 10; // Space between jobs
        });

        y += 10; // Add spacing before next section

// Education Section
        doc.setFont("helvetica", "bold");
        doc.text("EDUCATION", 20, y);

        y += 7;
        doc.setFont("helvetica", "normal");
        education.forEach((edu) => {
            doc.setFont("helvetica", "bold");
            doc.text(edu.title, 20, y);

            y += 7;
            doc.setFont("helvetica", "italic");
            doc.text(edu.location, 20, y);

            y += 7;
            doc.setFont("helvetica", "normal");
            doc.text(`From: ${edu.startDate} - To: ${edu.endDate}`, 20, y);

            y += 10; // Space between education entries
        });

        y += 10; // Add spacing before next section

// References
        doc.setFont("helvetica", "bold");
        doc.text("REFERENCES", 20, y);

        y += 7;
        doc.setFont("helvetica", "normal");
        doc.text("Available upon request", 20, y);

// Save PDF
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
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                               placeholder="e.g Bilbo Baggins" required/>
                    </div>

                    <div className="card">
                        <label htmlFor="summary">Short Summary:</label>
                        <input type="text" id="summary" value={summary} onChange={(e) => setSummary(e.target.value)}
                               placeholder="e.g Adventure Lover" required/>
                    </div>

                    <div className="card">
                        <label htmlFor="number">Number:</label>
                        <input type="text" id="number" value={number} onChange={(e) => setNumber(e.target.value)}
                               placeholder="e.g +64 XX XXXX XXXX" required/>
                    </div>

                    <div className="card">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                               placeholder="e.g bilboLovesRings@ibeatadragon.com" required/>
                    </div>

                    <div className="card">
                        <label htmlFor="profile">Profile:</label>
                        <textarea id="profile" value={profile} onChange={(e) => setProfile(e.target.value)}
                                  placeholder="Write a little something about you"/>
                    </div>

                    <SkillsInput/>

                    <Divider/>

                    {/* Work Experience Component */}
                    <WorkExperience workExperience={experience} setWorkExperience={setExperience}/>

                    <Divider/>

                    <Education education={education} setEducation={setEducation}/>

                    <Divider/>

                    <h1>References:</h1>

                    <div className="card">
                        <label htmlFor="reference1">First reference:</label>
                        <input type="text" id="reference1Name" value={reference1Name}
                               onChange={(e) => setReference1Name(e.target.value)}
                               placeholder="Name" required/>
                        <input type="text" id="reference1Phone" value={reference1Phone}
                               onChange={(e) => setReference1Phone(e.target.value)}
                               placeholder="Phone" required/>

                        <label htmlFor="reference2">Second reference:</label>
                        <input type="text" id="reference2Name" value={reference2Name}
                               onChange={(e) => setReference2Name(e.target.value)}
                               placeholder="Name" required/>
                        <input type="text" id="reference2Phone" value={reference2Phone}
                               onChange={(e) => setReference2Phone(e.target.value)}
                               placeholder="Phone" required/>
                    </div>


                    <button type="submit">Generate CV</button>
                </form>
            </div>
        </div>
    );
};

export default CvBuilder;
