import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'; 

const Header = () => {
    return (
        <header className='menu'>
        <nav>
            <a className="menu-link active" href="#"> Lien 1 </a>
            <a className="menu-link" href="#"> Lien 2 </a>
            <a className="menu-link" href="#"> Lien 3 </a>
        </nav>
        
        </header>
    )
}

export default Header;