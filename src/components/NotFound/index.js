import React from 'react';
import cat from './cat.jpg';


import './style.scss';

const NotFound = () => {
  return (
    <div className='notFound'>

      <img src={cat} alt="cat" className='cat' />
    </div>
  )

}

export default NotFound;