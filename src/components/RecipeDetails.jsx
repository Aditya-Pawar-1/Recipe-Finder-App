import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';
import axios from 'axios';
import Loading from './Loading';
import Search from './Search';
import { MdFavorite } from "react-icons/md";
import logo from '/Home.jpg';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { recipeName } = useParams();
  const navigate = useNavigate();
  const { favoriteRecipe, setFavoriteRecipe } = useContext(RecipeContext);

  const addToFavorite = (name) => {
    console.log("added", name);
    setFavoriteRecipe([...favoriteRecipe, name]);
  };

  const removeFromFavorite = (name) => {
    console.log("removed", name);
    setFavoriteRecipe(favoriteRecipe.filter(fav => fav !== name));
  };

  const handleError = () => {
    console.log('Error');
    navigate('/error');
  };
 
  const handleFavoriteClick = () => {
    navigate('/Favorites')
}

  useEffect(() => {
    if (recipeName) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
        .then(response => {
          const meal = response.data.meals ? response.data.meals[0] : null;
          setRecipe(meal);
          if (!meal) {
            handleError();
          }
        })
        .catch(handleError);
    }
    console.log(favoriteRecipe);

  }, [recipeName]);

  useEffect(() => {
    const favoriteRecipeJson = localStorage.getItem('favoriteRecipe');
    if (favoriteRecipeJson) {
      try {
        const favoriteRecipe = JSON.parse(favoriteRecipeJson);
        if (Array.isArray(favoriteRecipe)) {
          setFavoriteRecipe(favoriteRecipe);
        }
      } catch (error) {
        console.error('Error parsing JSON from localStorage', error);
      }
    }
  }, [setFavoriteRecipe]);

  useEffect(() => {
    if (Array.isArray(favoriteRecipe)) {
      localStorage.setItem('favoriteRecipe', JSON.stringify(favoriteRecipe));
    }
  }, [favoriteRecipe]);

  if (!recipe) return <Loading recipe={recipe} />;

  const isFavorite = favoriteRecipe.includes(recipe.strMeal);

  return (
    <div className='relative'>
      <button className='absolute right-0 flex items-center gap-5 p-2 m-4 bg-orange-600 text-white rounded-lg font-semibold'
        onClick={handleFavoriteClick}
      >Favorites Recipes <span><MdFavorite size={'1.3em'} /></span> </button>
      <div className='w-screen min-h-[100vh] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center overflow-hidden'
        style={{ backgroundImage: `url(${logo})` }}>
        <Search />
        <div className='w-[50vw] min-h-[60vh] mt-10 px-6 p-9 bg-black opacity-75 text-white text-base'>
          <h1 className='opacity-100'>Name: {recipe.strMeal}</h1>
          <h3>Origin Location: {recipe.strArea}</h3>
          <p className='mt-4 px-10'>Instructions: <br />{recipe.strInstructions}</p>

          <button
            className={`p-2 m-4 ${isFavorite ? 'bg-red-600' : 'bg-orange-600'} rounded-lg font-semibold`}
            onClick={() => isFavorite ? removeFromFavorite(recipe.strMeal) : addToFavorite(recipe.strMeal)}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorite'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
