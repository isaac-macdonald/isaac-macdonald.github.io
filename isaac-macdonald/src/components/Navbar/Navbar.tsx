import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="flex-box">
                <Link to="/" className="navbar-name">
                    <h1>Isaac Macdonald</h1>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
