import React, { useState } from 'react'
import RecipeContext from './RecipeContext'

const RecipeContextProvider = ({ children }) => {
    const [favoriteRecipe, setFavoriteRecipe] = useState([]);

    return (
        <RecipeContext.Provider value={{ favoriteRecipe, setFavoriteRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeContextProvider
