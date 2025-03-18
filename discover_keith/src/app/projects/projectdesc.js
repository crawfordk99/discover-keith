import React from "react";
import { SiGithub } from "react-icons/si";


// If building a component, must use it similar to a lambda function 
// Don't use export default like you would with a page
// It might not be the best idea to make separate files for one component
// But I did this to get practice with importing/exporting, and using components
const ProjectDescription = ({title, description, link, skills}) => { 
    return (
        <div className = "max-w-sm mx-auto">
            <h1>{title}</h1> 
            <p>{description}</p>
            <SiGithub/>
            <a href = {link}> Project Link</a>
            <p>{skills}</p>
        </div>
    );
};

export default ProjectDescription;
