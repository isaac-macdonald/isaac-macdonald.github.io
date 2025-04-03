import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Isaac Macdonald. All rights reserved.</p>
                <ul className="footer-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/isaac-macdonald-9415a4269/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} color="#91b4d4" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/isaac-macdonald" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} color="#91b4d4" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/isaac__macdonald/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} color="#91b4d4" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
