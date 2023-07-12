import React from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Connect from "./Connect";

function ContentBlock({content, handleInteract}) {


    return (
        <div>
            {content === null ? <NavBar handleOptionSelect={handleInteract}/>: null}
            {content === "NavBar" ? <NavBar handleOptionSelect={handleInteract}/> : null}
            {content === "AboutMe" ? <AboutMe/>: null}
            {content === "Connect" ? <Connect/>: null}
            {content === "Projects" ? <Projects handleOptionSelect={handleInteract}/>: null}
        </div>
    );
}

export default ContentBlock;