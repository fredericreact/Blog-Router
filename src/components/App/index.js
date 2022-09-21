// == Import npm
import React from 'react';

import {Route, Switch, Redirect} from 'react-router-dom'
import './style.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';
import posts from '../../data/posts';
import categories from '../../data/categories';


// == Composant


const getPostsByCategory = (posts, category) => {
  if (category === 'Accueil') {
    return posts
  }

const postlist = posts.filter(postObject => postObject.category ===  category)

  return postlist
}

const App = () => (
  <div className='app'>
    
    <Header navLinks={categories} />

    <Switch>
    {
      categories.map((categoryObject) => {
        console.log(categoryObject);

        return (
          <Route key ={categoryObject.label} exact path={categoryObject.route}>
        <Posts postsList={getPostsByCategory(posts,categoryObject.label)}/>
        </Route>
        )


      })
    }
    <Redirect from="/jquery" to="/react"/> 
    <Route>
      <NotFound/>
    </Route>

    </Switch>
    
    <Footer year ={2020}/>
  </div>
);

// == Export
export default App;