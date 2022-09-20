// == Import npm
import React from 'react';

import './style.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

import posts from '../../data/posts';
import categories from '../../data/categories';


// == Composant
const App = () => (
  <div className='app'>
    
    <Header navLinks={categories} />
    <Posts postsList={posts}/>
    <Footer year ={2020}/>
  </div>
);

// == Export
export default App;