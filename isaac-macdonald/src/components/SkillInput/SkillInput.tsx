import React, { useState } from 'react';
import '../CvBuilder/CvBuilder.css'; // Ensure styles are imported

const SkillsInput: React.FC = () => {
    // State to hold the skill input and the list of skills
    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState<string[]>([]);

    // Function to add skill
    const addSkill = () => {
        if (skill && !skills.includes(skill)) {
            setSkills([...skills, skill]);
            setSkill('');
        }
    };

    // Function to remove skill when badge is clicked
    const removeSkill = (skillToRemove: string) => {
        setSkills(skills.filter((s) => s !== skillToRemove));
    };

    return (
        <div className="card">
            <label htmlFor="skills">Skills:</label>
            <div className="skill-input-container">
                <input
                    type="text"
                    id="skills"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="What skills do you possess?"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            addSkill();
                        }
                    }}
                />
                <button type="button" onClick={addSkill}>Add</button>
            </div>

            {/* Displaying badges for each skill */}
            <div className="skills-badges">
                {skills.map((s, index) => (
                    <span
                        key={index}
                        className="badge"
                        onClick={() => removeSkill(s)} // Remove skill on badge click
                    >
                        {s}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillsInput;
