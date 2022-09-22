// == Import npm
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Switch, Redirect} from 'react-router-dom'
import './style.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';

import FullPost from '../Posts/FullPost';

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

  const [articles,setArticles] = useState([]);
  
  const [categories,setCategories] = useState([]);


const fetchPosts = () => {
  setLoading(true);
  axios({
    method: 'get',
    url: 'https://oclock-open-apis.vercel.app/api/blog/posts',
  })
    .then( (response) => {

      setArticles(response.data);
      setLoading(false);
    })
    .catch ((err) => {
console.log(err);

    })
    .finally (()=>{
      setLoading(false);
    })
}

const fetchCategories = () => {
  setLoading(true);
  axios({
    method: 'get',
    url: 'https://oclock-open-apis.now.sh/api/blog/categories',
  })
    .then( (response) => {

      setCategories(response.data);
     
    })
    .catch ((err) => {
console.log(err);

    })
    .finally (()=>{
      setLoading(false);
    })
}


  useEffect(()=> {
    fetchPosts();
    fetchCategories();
  },[])


  



return (



  <div className='app'>
    
    <Header navLinks={categories} />

  

  {loading&&<Loading/>}

   {!loading&& (

    <Switch>
    {
      categories.map((categoryObject) => {
        console.log(categoryObject);

        return (
          <Route key ={categoryObject.label} exact path={categoryObject.route}>
        <Posts postsList={getPostsByCategory(articles,categoryObject.label)}/>
        </Route>
        )


      })
    }

<Route path="/article/:titredelarticle">
  <FullPost posts={articles}/>
</Route>

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