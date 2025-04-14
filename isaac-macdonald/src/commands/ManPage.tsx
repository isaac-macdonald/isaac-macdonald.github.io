import React from 'react';

const ManPage = () => {
    return (
        <div className="man-page">
      <pre>{`
PORTFOLIO(1)              Isaac Macdonald Portfolio Manual              PORTFOLIO(1)

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

    skills
        Display a list of technical skills including languages, frameworks,
        tools, and platforms.

    help
        Show a list of available commands with descriptions.

    clear
        Clear the terminal output.

EXAMPLES
    $ about
        Displays a short bio and profile photo.

    $ projects
        Opens a set of terminal-style project cards with images and links.

    $ skills
        Lists technical proficiencies grouped by category.

AUTHOR
    Isaac Macdonald
    GitHub: https://github.com/isaac-macdonald

SEE ALSO
    https://isaacmacdonald.dev

                                                                    Isaac Macdonald
      `}</pre>
        </div>
    );
};

export default ManPage;
