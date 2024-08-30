import React, { createContext, useContext } from "react";

export const FavoriteRecipeContext = createContext([
  {
    recipeName: "",

    addRecipe: (recipeName) => {},
    deleteRecipe: (recipeName) => {},
  },
]);

export const useFavoriteRecipe = () => {
  return useContext(FavoriteRecipeContext);
};

export const FavoriteRecipeContextProvider = FavoriteRecipeContext.Provider;
