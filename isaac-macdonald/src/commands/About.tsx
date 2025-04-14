import React from 'react';
import ProjectCard from './ProjectCard';
import PersonalInfoCard from "./PersonalInfoCard";
import isaac_headshot from"../isaac_headshot.png";


const Projects = () => {
    return (
        <div>
      <pre>{`
                                                                              
      _/_/    _/                              _/             _/      _/           
   _/    _/  _/_/_/      _/_/    _/    _/  _/_/_/_/         _/_/  _/_/    _/_/    
  _/_/_/_/  _/    _/  _/    _/  _/    _/    _/             _/  _/  _/  _/_/_/_/   
 _/    _/  _/    _/  _/    _/  _/    _/    _/             _/      _/  _/          
_/    _/  _/_/_/      _/_/      _/_/_/      _/_/         _/      _/    _/_/_/                        

      `}</pre>

            <PersonalInfoCard
                bio="I am a 3rd year software engineering student at the University of Canterbury who enjoys using my skill set to develop meaningful and useful apps. Other than software development my hobbies include surfing, movie-watching, performing, and skiing."
                imageUrl={isaac_headshot}
                skills={['React', 'TypeScript', 'Python', 'Java', 'Git', 'ThymeLeaf', 'Bootstrap', 'C', 'Dask', 'Springboot', 'JavaFX', 'Scene builder', 'Junit', 'Node.js', "css", "html"]}
            />


        </div>
    );
};

export default Projects;