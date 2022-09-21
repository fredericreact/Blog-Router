// == Import npm
import React from 'react';

import {Route, Switch} from 'react-router-dom'
import './style.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';
import posts from '../../data/posts';
import categories from '../../data/categories';


// == Composant
const App = () => (
  <div className='app'>
    
    <Header navLinks={categories} />

    <Switch>
{
  categories.map((categoryObject) => {
    console.log(categoryObject);

    return (
      <Route key ={categoryObject.label} exact path={categoryObject.route}>
    <Posts postsList={posts}/>
    </Route>
    )


  })
}
    <Route>
      <NotFound/>
    </Route>
</Switch>
    <Footer year ={2020}/>
  </div>
);

// == Export
export default App;