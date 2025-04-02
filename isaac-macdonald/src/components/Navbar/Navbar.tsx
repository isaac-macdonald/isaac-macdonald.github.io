import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload } from 'react-icons/fa';
import './Navbar.css';
import {Tooltip} from "react-tooltip";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="flex-box">
                <ul className="navbar-icons-hidden">
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} color="#91b4d4"/>
                        </a>
                    </li>
                    <li>
                    <a href="" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} color="#91b4d4"/>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} color="#91b4d4"/>
                        </a>
                    </li>
                </ul>
                <h1>Isaac Macdonald</h1>
                <ul className="navbar-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/isaac-macdonald-9415a4269/" target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin size={24} color="#91b4d4"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/isaac-macdonald" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} color="#91b4d4"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/isaac__macdonald/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} color="#91b4d4"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
