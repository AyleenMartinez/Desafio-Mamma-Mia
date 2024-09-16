import React from "react";
import '../assets/css/Header.css';

const Header = ({tittle, description }) =>{
    return(
        <header className="header">
            <h1>{tittle}</h1>
            <p>{description}</p>
            <hr/>
        </header>
    );
};

export default Header;