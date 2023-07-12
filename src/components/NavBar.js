import React from "react";
import {useState} from "react";
import profilePic from "../content/profilepic.jpg";
import App from "../App";
function NavBar({handleOptionSelect}) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (option) => {
        setSelectedOption(option);
        handleOptionSelect(option);
    }

    return (
        <div className="container">
            <img src={profilePic} className="App-logo" alt="profilePic"/>
            <div className={`App-nav ${selectedOption !== null ? 'clicked' : ''}`}>
                <a className={`App-nav-option ${selectedOption === 'AboutMe' ? 'clicked' : ''}`}
                   onClick={() => handleClick('AboutMe')}>about me</a>
                <a className={`App-nav-option ${selectedOption === 'Projects' ? 'clicked' : ''}`}
                   onClick={() => handleClick('Projects')}>projects</a>
                <a className={`App-nav-option ${selectedOption === 'Connect' ? 'clicked' : ''}`}
                   onClick={() => handleClick('Connect')}>connect</a>
            </div>
        </div>
    );
}

export default NavBar;