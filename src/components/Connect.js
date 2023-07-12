import React from 'react';

function Connect() {
    return (
        <div className="App-content" style={{textAlign: "left"}}>
            <h2>Get in touch!</h2>
            <p>
                You can connect with me through the following channels:
            </p>
            <ul>
                <div style={{display: 'flex', alignItems: "center"}}>
                    <div style={{flex: 1}}>
                        <a href="https://www.linkedin.com/in/sim-sealy">
                            <img
                                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
                        </a>
                    </div>
                    <div style={{flex: 1}}>
                        <a href="https://github.com/gothmommysim">
                            <img
                                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
                        </a>
                    </div>
                    <div style={{flex: 1}}>
                        <a href="mailto:sealysim@gmail.com">
                            <img
                                src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
                        </a>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Connect;