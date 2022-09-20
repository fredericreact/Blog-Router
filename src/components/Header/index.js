import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'; 

const Header = ({navLinks}) => {
    return (
        <header className='menu'>
        <nav>
        {
            navLinks.map((navObject)=>(
                <a key={navObject.label} className="menu-link" href={navObject.route}>{navObject.label}</a>
    
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