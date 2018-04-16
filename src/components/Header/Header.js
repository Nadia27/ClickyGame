import React from "react"; 
import "./Header.css"; // get wrapper css file


const Header = props => (

    
        
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h4>React Clicky Game</h4>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <strong>Score:</strong>{}
                </li>
                <li className="nav-item">
                    <strong>Top Score:</strong>{}
                </li>
            </ul>
        </div>
    </nav>

); 


export default Header; 