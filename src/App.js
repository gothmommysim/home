import './App.css';
import {useState} from "react";
import ContentBlock from "./components/ContentBlock";
import NavBar from "./components/NavBar";

function App() {
    const [navigate, setNavigate] = useState(null);
    const [mainHeader, setMainHeader] = useState("sim sealy");



    const handleInteract = (option) => {
        setTimeout(() =>{
            setNavigate(option);
            if(option !== "NavBar"){
                setMainHeader(option);
            }else if(mainHeader!=="sim sealy"){
                setMainHeader("sim sealy");
            }
        }, 500);
    }

    return (
        <div className="App">
            <header className="App-header">
                <p className="App-mainHeader" style={{cursor: "pointer"}} onClick={()=>handleInteract('NavBar')}>
                    ★ {mainHeader} ★
                </p>
                <ContentBlock content={navigate} handleInteract={handleInteract}/>
                <p>
                    ★
                </p>
            </header>
        </div>
    );
}

export default App;