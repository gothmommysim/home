import React from 'react';

function AboutMe() {
    return (
        <div className="App-content">
            <h2>I’m Sim, a software engineer and game enthusiast who loves creating innovative and engaging
                applications</h2>
            <p style={{fontFamily: 'Tamuragaki'}}>I’m a software engineer with a passion for games and game development. I spend most of my time working on
                innovative and engaging applications that challenge my skills and creativity. When I need a break, I
                dive into games and explore new worlds.</p>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <h2>Languages 💬</h2>
                    <ul style={{fontFamily: 'Tamuragaki'}}>
                        <li>C# - Proficient</li>
                        <li>C++ - Proficient</li>
                        <li>C - Advanced</li>
                        <li>Python - Advanced</li>
                        <li>Java - Advanced</li>
                        <li>JavaScript - Advanced</li>
                        <li>SQL - Intermediate</li>
                        <li>Kotlin - Basic</li>
                    </ul>
                </div>
                <div style={{flex: 1}}>
                    <h2>Tools 🔧</h2>
                    <ul style={{fontFamily: 'Tamuragaki'}}>
                        <li>Unity - Proficient</li>
                        <li>Blender - Advanced</li>
                        <li>React.js - Advanced</li>
                        <li>Jupyter - Advanced</li>
                        <li>Arduino IDE - Advanced</li>
                        <li>Android Studio - Intermediate</li>
                        <li>Unreal Engine - Basic</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;