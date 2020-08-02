import React from 'react';
import logo from '../../assets/img/Dantonflix.png';
import './Menu.css'
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className= "Logo" src={logo} alt="Dantonflix logo" />   
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
            
        </nav>
    );
}

export default Menu;