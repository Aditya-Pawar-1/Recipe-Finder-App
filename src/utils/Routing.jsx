import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Favorites from '../components/Favorites';
import RecipeDetails from '../components/RecipeDetails';
import Error from '../components/Error';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Favorites" element={<Favorites />} />
      <Route path="RecipeDetails/:recipeName" element={<RecipeDetails />} />
      <Route path="error" element={<Error />} />
    </Routes>
  );
};

export default Routing;
