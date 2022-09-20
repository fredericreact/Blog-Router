import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'; 

const Footer = ({year}) => {



    return (
        <footer className='copyright'>

DevOfThrones, le blog du développeur React - {year} ©
        </footer>
    )
}

Footer.propTypes = {
    year:PropTypes.number.isRequired,
}

export default Footer;