// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Mon Application</h1>
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">À propos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
