import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Download } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    const email = "your.email@example.com";
    const phoneNumber = "123-456-7890";

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Isaac Macdonald. All rights reserved.</p>

                <div className="footer-contact">
                    <span><strong>Email:</strong> imacdonald135@gmail.com</span>
                    <span><strong>Phone:</strong> +64 29 0430 0248</span>
                    <span>
                        <strong>Resume:</strong>
                        <a
                            href="/Isaac_Macdonald_Resume_Updated_2-4-2025.pdf"
                            download="Isaac_Macdonald_Resume"
                            className="download-link"
                            aria-label="Download resume"
                        >
                            <Download size={18} style={{marginLeft: '5px'}}/>
                        </a>
                    </span>
                </div>

                <ul className="footer-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/isaac-macdonald-9415a4269/" target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin size={24}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/isaac-macdonald" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/isaac__macdonald/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
