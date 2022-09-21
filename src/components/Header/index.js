import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'; 
import {NavLink} from 'react-router-dom';

const Header = ({navLinks}) => {
    return (
        <header className='menu'>
        <nav>
        {
            navLinks.map((navObject)=>(
                <NavLink 
                exact
                key={navObject.label} 
                className="menu-link" 
                to={navObject.route}>
                {navObject.label}
                </NavLink>
    
                ))

        }   
        </nav>
        
        </header>
    )
}

Header.propTypes = {
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
            route:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Header;