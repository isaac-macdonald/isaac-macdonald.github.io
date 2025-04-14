import React from 'react';
import ProjectCard from './ProjectCard';

import gameOfLifePhoto1 from '../gameOfLifeHomeScreen.png';
import gameOfLifePhoto2 from '../gameOfLifeGameplay.png';
import gameOfLifePhoto3 from '../gameOfLifeIntermission.png';

import spotifyProjectPhoto1 from '../spotifyDatabase.png';
import spotifyProjectPhoto2 from '../spotifyEmail.png';

import wineTimePhoto1 from '../wineTime1.png';
import wineTimePhoto2 from '../wineTime2.png';
import wineTimePhoto3 from '../wineTime3.png';

const Projects = () => {
    return (
        <div>
      <pre>{`
                                                                              
    _/_/_/                        _/                        _/                
   _/    _/  _/  _/_/    _/_/          _/_/      _/_/_/  _/_/_/_/    _/_/_/   
  _/_/_/    _/_/      _/    _/  _/  _/_/_/_/  _/          _/      _/_/        
 _/        _/        _/    _/  _/  _/        _/          _/          _/_/     
_/        _/          _/_/    _/    _/_/_/    _/_/_/      _/_/  _/_/_/        
                             _/                                               
                          _/                                                  

      `}</pre>
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
                description="This is an application that was developed in a group project for SENG202 last year. It is designed to help users browse through over 100 000 wines."
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
    );
};

export default Projects;
