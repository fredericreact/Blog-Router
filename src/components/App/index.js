// == Import npm
import React from 'react';

import {Route} from 'react-router-dom'
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

    <Route exact path="/">
    <Posts postsList={posts}/>
    </Route>
    
    <Footer year ={2020}/>
  </div>
);

// == Export
export default App;