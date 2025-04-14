import React from 'react';

const ManPage = () => {
    return (
        <div className="man-page">
      <pre>{`
                          Isaac Macdonald Portfolio Manual              

NAME
    portfolio - personal command-line interface for Isaac Macdonald

SYNOPSIS
    <command>

DESCRIPTION
    This terminal-style website showcases the work and skills of Isaac Macdonald,
    a software engineering student at the University of Canterbury.

    Navigate the portfolio by typing the following commands:

COMMANDS
    man
        Show this manual page.

    about
        Learn more about me — background, hobbies, and interests.

    projects
        View a list of personal and university-based software projects,
        each with descriptions, tech stacks, and screenshots.
    
    github
        View my GitHub profile
        
    instagram
        View my Instagram profile
        
    linkedin
        View my LinkedIn profile

    clear
        Clear the terminal output.

AUTHOR
    Isaac Macdonald                                                                   
      `}</pre>
        </div>
    );
};

export default ManPage;
