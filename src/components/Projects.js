import React from "react";
import {useState} from "react";
import profilePic from "../content/profilepic.jpg";
import App from "../App";

function Projects({handleOptionSelect}) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (option) => {
        setSelectedOption(option);
        handleOptionSelect(option);
    }

    return (
        <div className="container">
            <div className={`App-nav ${selectedOption !== null ? 'clicked' : ''}`}>
                <a className={`App-nav-option ${selectedOption === 'narrative-driven first-person game' ? 'clicked' : ''}`}
                   style={{textDecoration: "inherit", color: "inherit", font: "inherit", WebkitTextStroke: "inherit"}}
                   href="https://github.com/gothmommysim/mars1988"
                   onClick={() => handleClick()}>🎮 narrative-driven first-person game</a>
                <a className={`App-nav-option ${selectedOption === 'matryoshka inventory system' ? 'clicked' : ''}`}
                   style={{textDecoration: "unset", color: "unset", font: "unset", WebkitTextStroke: "inherit"}}
                   href="https://github.com/gothmommysim/Matryoshka-style-Grid-based-Inventory"
                   onClick={() => handleClick()}>🎮 matryoshka inventory system</a>
                <a className={`App-nav-option ${selectedOption === 'pulse hrm and companion app' ? 'clicked' : ''}`}
                   style={{textDecoration: "inherit", color: "inherit", font: "inherit", WebkitTextStroke: "inherit"}}
                   href="https://github.com/gothmommysim/Pulse-Companion-App"
                   onClick={() => handleClick()}>📱 pulse hrm and companion app</a>
                <a className={`App-nav-option ${selectedOption === 'fortnite theme randomizer' ? 'clicked' : ''}`}
                   style={{textDecoration: "inherit", color: "inherit", font: "inherit", WebkitTextStroke: "inherit"}}
                   href="https://github.com/gothmommysim/fortnite-roulette-app"
                   onClick={() => handleClick()}>📱 fortnite theme randomizer</a>
            </div>
        </div>
    );
}

export default Projects;