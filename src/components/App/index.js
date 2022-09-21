// == Import npm
import React, {useState} from 'react';

import {Route, Switch, Redirect} from 'react-router-dom'
import './style.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';
import posts from '../../data/posts';
import categories from '../../data/categories';

import Loading from '../Loading';

// == Composant


const getPostsByCategory = (posts, category) => {
  if (category === 'Accueil') {
    return posts
  }

const postlist = posts.filter(postObject => postObject.category ===  category)

  return postlist
}

const App = () => {

  const [loading, setLoading] = useState(false);

return (



  <div className='app'>
    
    <Header navLinks={categories} />

  <button type="button" onClick={()=>{
    setLoading(!loading);
    console.log(loading)
  }}>
  loading
  </button>

  {loading&&<Loading/>}

   {!loading&& (

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
    )
   }
    
    <Footer year ={2020}/>
  </div>
);
};
// == Export
export default App;