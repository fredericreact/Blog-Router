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

### UseParams

```javascript
<Route path="/article/:titredelarticle">
  <FullPost posts={articles}/>
</Route>
```

> Sur une route precise, j'affiche un article en particulier

```javascript
const FullPost = ({posts}) => {
    const {titredelarticle} = useParams();

   const searchedArticle = posts.find((articleObject) => titredelarticle===articleObject.slug)

    if(!searchedArticle) {
        return(
         <NotFound/>
        );
    }

    const {title, content, category}  = searchedArticle ;
    return (
        <article className='post full'>
           <h2 className='post-title'>{title}</h2>
           <div className='post-category'>{category}</div>
           <p className='post-content' dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(content)}}/>
        </article>
    )
}
```

>Use Params me permet de recuperer les params dans l'url

# Hooks



    import React, { useState } from 'react';
    
    function Example() {
      // Déclare une nouvelle variable d'état, qu’on va appeler « count »
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>Vous avez cliqué {count} fois</p>
          <button onClick={() => setCount(count + 1)}>
            Cliquez ici
          </button>
        </div>
      );
    }

>useState c'est une fonction qui renvoie un table avec 2 element, le state et la methode pour le modifier.

>Je peux creer plein de states a la difference des classes


# Axios

    npm install axios

<br>

    https://github.com/axios/axios#example

<br> 

    const onClickActions = () => {
    
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

<br>

> then s'execute en cas de succs, catch en cas d'erreur et finally s'executera a chaque fois


```javascript
// Make a request for a user with a given ID
axios.get('/user?ID=12345')

.then(function (response) {
// handle success
console.log(response);
})

.catch(function (error) {
// handle error
console.log(error);
})

.finally(function () {
// always executed
});
```

> axios c'est une promise, that's why ya finally qui est present sur toutes les promesses

# useEffect

``` javascript

useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

> permet d'executer des choses qui sont en dehors des composants

> Table en argument : si la valeur change, ca va re-render, si la valeur ne change pas, ca va pa re-render

> equivalent didmount : 
    
    useEffect(() => {}, []); 

> equialent didupdate : 
    
    useEffect(() => {});

# SCSS

On peut utiliser import ou use mais cest different, use tu dois referer au fichier alors que import pas besoin de referrer au fichier


# HTML interpretation and cleaning

> dans un de mes articles, j'ai de l'html je veux interprete mais si je l'interprete, c'est un hack (XSS attack).

> Pour interpreter je vais utiliser 

```javascript
function createMarkup() {
  return {__html: 'Premier &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

> Pour cleaning je vais utiliser 

``` javascript
npm install dompurify

```

``` javascript
let clean = DOMPurify.sanitize('<b>hello there</b>');

```

>Ce qui nous donne : 

``` javascript
<p className='post-excerpt' dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(excerpt)}}/>

```














# Découverte des hooks React

Introduction au principe: https://fr.reactjs.org/docs/hooks-intro.html

Ce sont des fonctions qui commencent TOUTES par useQQCHOSE qu'on peut utiliser au sein des composants React de type Fonction (et donc, pas dans les class).

Il existe plein de hooks différents, qui permettent de rajouter des "pouvoirs" à nos fonctions. 

Aujourd'hui on en n'a découvert qu'un seul, le hook qui permet de créer un state et qui s'appelle "useState".

### Similarités entre le hook useState, et le state d'une class

Dans les 2 cas, j'ai une source de données dynamique, et une méthode pour modifier la / les données.

Si je souhaite partager ce state avec d'autres composants, ma seule option est le passage via les props.

### Différences entre le hook useState, et le state d'une class

#### Dans une class

Il ne peut y avoir qu'UN SEUL state (objet)

Le state est FORCÉMENT nommé "state", et on ne peut le consulter qu'avec "this.state".

La méthode pour modifier le state est FORCÉMENT nommé "setState", et je ne peux l'utiliser qu'avec this.setState.

Le state fabriqué dans une class est FORCÉMENT un objet.

La méthode pour modifier ce state attend que je lui donne en paramètres seulement les propriétés de l'objet que je veux changer


### Dans un composant fonction avec useState

Je peux avoir autant de states que je veux.

Le state peut être nommé comme je veux.

La méthode qui modifie mon state peut être nommée comme je veux.

Le type de state que je fabrique peut être ce que je veux (pas forcément un objet)

La méthode qui permet de modifier mon state attens que je lui donne en paramètre mon nouveau state dans son entiereté. Ce que je lui donne va INTÉGRALEMENT remplacer le state original.

## Les lifecycles

### dans une class

On disposait de 3 méthodes distinctes:

* componentDidMount -> après premier render
* componentDidUpdate -> après tous les render suivants
* componentWillUnmount -> avant que le composant soit détruit

### dans un composant fonction

On dispose d'un seul hook: useEffect
Ce hook qui permet d'exécuter du code (des fonctions) automatiquement à certains moments de la vie d'un composant (lifecycles). Ex, dés qu'il est affiché la première fois, ou dés qu'il est sur le point d'être retiré du DOM.

Un exemple super courant de cas d'utilisation de useEffect c'est les requêtes vers une API. Généralement, on souhaite lancer une requête dés que le composant est prêt, pour ne pas faire attendre l'user.

Si je veux l'équivalent du didMount

```javascript
useEffect(() => {}, []);
// Ici react va examiner le contenu du tableau, à la rechercher de variables
// pour savoir si leur contenus a changé depuis le dernier render. Si pas de 
// variable dans le tableau, pas de changement possible, donc pas de réexécution

```

Si je veux l'équivalent du didUpdate (plus le didMount)

```javascript
useEffect(() => {});
// Sans tableau, la fonction est exécutée après chaque render sans exception

```

Si je veux l'équivalent du willUnmount

```javascript

const sayBye = () => {
  console.log('bye');
};


useEffect(() => {

    // Ce que return ma fonction DOIT être une autre fonction.
    // cette autre fonction sera exécutée juste avant la destruction (son retrait du DOM)
    // du composant

    return sayBye;
});

```