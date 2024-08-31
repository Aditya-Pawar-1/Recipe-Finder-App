import React, { useContext, useEffect } from 'react';
import RecipeContext from '../Context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import FavoriteCard from './FavoriteCard';
import bg from '../../public/images/Home.jpg';

const Favorites = () => {
  const navigate = useNavigate();
  const { favoriteRecipe, setFavoriteRecipe } = useContext(RecipeContext);

  const removeFavoriteRecipe = (name) => {
    setFavoriteRecipe(favoriteRecipe.filter(fav => fav !== name));
  };

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

  return (
    <div className='w-full h-screen p-9 bg-cover bg-no-repeat bg-center text-white' style={{ backgroundImage: `url(${bg})` }}>
      <h1>Favorite Recipes</h1>
      <div className='flex items-center justify-center flex-wrap shrink-0'>
        {favoriteRecipe && favoriteRecipe.length > 0 ? (
          favoriteRecipe.map((recipe, index) => (
            <FavoriteCard
              key={index}
              recipe={recipe}
              removeFavoriteRecipe={removeFavoriteRecipe}
            />
          ))
        ) : (
          <p>No favorite recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
