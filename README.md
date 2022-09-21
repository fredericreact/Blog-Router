# React Router v5 (not v6)

    npm install react-router-dom


<br>

    import React from 'react';
    import { render } from 'react-dom';
    
    import { BrowserRouter as Router} from 'react-router-dom';
    
    import App from './components/App';
    
    const rootReactElement = <Router><App /></Router> ;
    
    const target = document.getElementById('root');
    
    render(rootReactElement, target);

> 1. J'englobe App dans Router

    {
            navLinks.map((navObject)=>(
                <Link 
                key={navObject.label} 
                className="menu-link" 
                to={navObject.route}>
                {navObject.label}
                </Link>
    
                ))

    }   

>2. Je cree mes liens urls : Je change la balise <a> en <Link> et href en to

<br>

>Pas de rechargement de page alors qu'il y a un changement url.

    const App = () => (
    <div className='app'>
    
    <Header navLinks={categories} />

    <Route exact path="/">
    <Posts postsList={posts}/>
    </Route>
    
    <Footer year ={2020}/>
    </div>
    );

> 3. Je cree mes routes pour faire le lien entre un url et un composant

<br>

    <Route path="/">
> Ici, le composant va regarder si dans l'url, il y a "/"

    <Route exact path="/">

> Si je veux qu'il affiche le composant que s'il y a "/" seulement, rajouter "exact"

### Navlink

    <NavLink 
    key={navObject.label} 
    className="menu-link" 
    to={navObject.route}>
    {navObject.label}
    </NavLink>


<br>



Navlink a la place de <Link> rajoute une classe active sur les liens quand je suis sur l'url en question

Et pareil, il faut preciser exact sinon pour une route "/about" , il va mettre en active "/" car "/about" contient "/"

Avec "exact", il va mettre une classe active que si je suis sur l'url qui correspond exactement a ce qu'il y a dans le to



    <NavLink 
    exact
    key={navObject.label} 
    className="menu-link" 
    to={navObject.route}>
    {navObject.label}
    </NavLink>


### Switch



> Permet de m'assurer qu'une seule route sera affichee pour une url donne.
Sans le switch, une url pourrait afficher plusieurs routes/composants.

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
    
    
### Redirect    

    <Redirect from="/jquery" to="/react"/> 
    <Route>
      <NotFound/>
    </Route>


> Add Redirect to redirect an url to another one