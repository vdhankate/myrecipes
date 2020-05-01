import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';
 
function App() {

const API_ID = '64328ce0';
const API_KEY = '398992693e06ae81872e11cd5ddbc096';
 
const [recipes, setRecipes]  = useState([]);
const [search , setSearch] = useState('');
const [query, setQuery] = useState('chicken');

  useEffect(  () => {
    getRecipes();
  }, [query])


const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
}

const updateSearch = (e) => {
    setSearch(e.target.value);
}

const getSerach = (e) => {
  e.preventDefault();
  setQuery(search);
  setSearch('');

}


  return (
    <div className="App">
    <form className='search-form' onSubmit={getSerach}>
      <input className='search-bar' type='text' onChange={updateSearch} value={search}/>
      <button className='search-btn' type='submit' >Search</button>
    </form>
    <div className="recipes">
      {recipes.map((recipe) => {
          return <Recipe key={recipe.recipe.label}
                  title={recipe.recipe.label} 
                  calories={recipe.recipe.calories} 
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  />
        })
      }
      </div>
    </div>
  );

}

export default App;
