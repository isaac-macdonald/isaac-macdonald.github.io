import React from 'react';
import ProjectCard from './ProjectCard';
import gameOfLifePhoto from '../gameOfLifeHomeScreen.png';
import spotifyPhoto from '../spotifyDatabase.png';
import wineTimePhoto from '../wineTime1.png';

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
                title="Game of Life"
                description="Terminal-based survival game inspired by Conway's Game of Life."
                image={gameOfLifePhoto}
                link="https://github.com/isaac-macdonald/The-Game-of-Life"
            />
            <ProjectCard
                title="Spotify Tracker"
                description="Track your listening habits and send weekly wraps."
                image={spotifyPhoto}
                link="https://github.com/isaac-macdonald/custom-spotify-data"
            />
            <ProjectCard
                title="WineTime"
                description="Browse 100,000+ wines in a sleek JavaFX GUI."
                image={wineTimePhoto}
                link="https://github.com/isaac-macdonald/SENG202-WineTime"
            />
        </div>
    );
};

export default Projects;
