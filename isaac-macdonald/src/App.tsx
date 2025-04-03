import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProjectCard from './components/ProjectCard/ProjectCard';
import PersonalInfoCard from './components/PersonalInfoCard/PersonalInfoCard';
import ContactCard from "./components/ContactCard/ContactCard";
import Divider from './components/Divider/Divider';
import CvBuilder from "./components/CvBuilder/CvBuilder";
import isaac_headshot from "./isaac_headshot.png"
import InLinkProjectCard from "./components/InLinkProjectCard/InLinkProjectCard";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/cv-builder" element={<CvBuilder />} />
                        {/* New CV Builder Page */}

                    <Route path="/" element={
                        <>
                            <Navbar />
                            <div className="main-content">
                                <PersonalInfoCard
                                    name="About me"
                                    bio="I am a 3rd year software engineering student at the University of Canterbury who enjoys using my skill set to develop meaningful and useful apps. Other than software development my hobbies include surfing, movie-watching, performing, and skiing."
                                    imageUrl={isaac_headshot}
                                    skills={['React', 'TypeScript', 'Python', 'Java', 'Git', 'ThymeLeaf', 'Bootstrap', 'C', 'Dask', 'Springboot', 'JavaFX', 'Scene builder', 'Junit', 'Node.js']}
                                />
                                <Divider />
                                <h2>Projects</h2>
                                <div className="projects">
                                    <InLinkProjectCard
                                        title="Cv Builder - WIP"
                                        techs={["React", "JavaScript"]}
                                        description="This is an in browser cv builder that allows users to input their own fields and infomation for a cv and allows them to export a pdf of it."
                                    />
                                    <ProjectCard
                                        title="WineTime (SENG202 Project)"
                                        techs={["Java"]}
                                        description="This is a game that was developed in a group project for SENG202 last year. It is designed to help users browse through over 100 000 wines."
                                        link="https://github.com/isaac-macdonald/SENG202-WineTime"
                                    />
                                    <ProjectCard
                                        title="Game of life (and death)"
                                        techs={["Python"]}
                                        description="This is a game I made, designed to be played in the browser. It is based on Conway's game of life, and the objective of the game is to navigate through endless rounds of chaos trying to score points."
                                        link="https://github.com/isaac-macdonald/The-Game-of-Life"
                                    />
                                    <ProjectCard
                                        title="20 Number Challenge"
                                        techs={["Java"]}
                                        description="This was a game where the objective is to place 20 random number form 1-1000 in order without seeing what the next number is."
                                        link="https://github.com/isaac-macdonald/20NumberChallenge"
                                    />
                                    <ProjectCard
                                        title="SENG201 Project"
                                        techs={["Java"]}
                                        description="This was a pair project for SENG201 in 2024. It is a resource management game, with the aim being to survive rounds of carts by buying and using resource towers to fill said carts up"
                                        link="https://github.com/isaac-macdonald/SENG201-project-2024"
                                    />
                                </div>
                                <Divider />
                                <ContactCard
                                    email="imacdonald135@gmail.com"
                                    phoneNumber="+64 290 0430 0248"
                                />
                            </div>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

