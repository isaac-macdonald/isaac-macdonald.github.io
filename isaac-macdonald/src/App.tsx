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
import gameOfLifePhoto1 from "./gameOfLifeHomeScreen.png"
import gameOfLifePhoto2 from "./gameOfLifeIntermission.png"
import gameOfLifePhoto3 from "./gameOfLifeGameplay.png"
import spotifyProjectPhoto1 from "./spotifyDatabase.png"
import spotifyProjectPhoto2 from "./spotifyEmail.png"
import wineTimePhoto1 from "./wineTime1.png"
import wineTimePhoto2 from "./wineTime2.png"
import wineTimePhoto3 from "./wineTime3.png"
import InLinkProjectCard from "./components/InLinkProjectCard/InLinkProjectCard";
import Footer from "./components/Footer/Footer";

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
                                <div className="projects">
                                    <PersonalInfoCard
                                        name="About me"
                                        bio="I am a 3rd year software engineering student at the University of Canterbury who enjoys using my skill set to develop meaningful and useful apps. Other than software development my hobbies include surfing, movie-watching, performing, and skiing."
                                        imageUrl={isaac_headshot}
                                        skills={['React', 'TypeScript', 'Python', 'Java', 'Git', 'ThymeLeaf', 'Bootstrap', 'C', 'Dask', 'Springboot', 'JavaFX', 'Scene builder', 'Junit', 'Node.js', "css", "html"]}
                                    />
                                </div>
                                <Divider />
                                <h2>Projects</h2>
                                <div className="projects">
                                    <ProjectCard
                                        title="Custom Spotify Database"
                                        techs={["Python", "html"]}
                                        description="This project is for any experimentation with the spotify api using spotipy. So far I have been recording all the songs I listen to and have implemented a custom spotify wrapped weekly email."
                                        link="https://github.com/isaac-macdonald/custom-spotify-data"
                                        imageFilenames={[spotifyProjectPhoto1, spotifyProjectPhoto2]}
                                    />
                                    <ProjectCard
                                        title="WineTime (SENG202 Project)"
                                        techs={["Java"]}
                                        description="This is a game that was developed in a group project for SENG202 last year. It is designed to help users browse through over 100 000 wines."
                                        link="https://github.com/isaac-macdonald/SENG202-WineTime"
                                        imageFilenames={[wineTimePhoto1, wineTimePhoto2, wineTimePhoto3]}
                                    />
                                    <ProjectCard
                                        title="Game of life (and death)"
                                        techs={["Python"]}
                                        description="This is a game I made, designed to be played in the termin. It is based on Conway's game of life, and the objective of the game is to navigate through endless rounds of chaos trying to score points."
                                        link="https://github.com/isaac-macdonald/The-Game-of-Life"
                                        imageFilenames={[gameOfLifePhoto1, gameOfLifePhoto2, gameOfLifePhoto3]}
                                    />
                                </div>
                            </div>
                            <Footer/>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

