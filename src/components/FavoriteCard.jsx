// import React from "react"


// const FavoriteCard = ({ recipe, removeFavoriteRecipe, index }) => {
//     return (
//         <div key={index} className='w-[30vw] max-w-[40vw] relative min-h-[10vh] m-4 p-2 flex items-center bg-orange-700 text-white'>
//             <p className='max-w-[50%]'>Recipe Name: {recipe}.</p>
//             <button className='p-2 m-4 bg-white text-red-600 rounded-lg font-semibold absolute right-0'
//                 onClick={removeFavoriteRecipe(recipe)}
//             >Remove Form Favorites</button>
//         </div>
//     )
// }

// export default FavoriteCard

import React from 'react';

const FavoriteCard = ({ recipe, removeFavoriteRecipe }) => {
  return (
    <div className="w-[30vw] max-w-[40vw] relative min-h-[10vh] m-4 p-2 flex items-center bg-orange-700 text-white">
      <h2 className='max-w-[50%]'><strong> Recipe Name: </strong> {recipe}</h2>
      <button 
      className='p-2 m-4 bg-white text-red-600 rounded-lg font-semibold absolute right-0'
      onClick={() => removeFavoriteRecipe(recipe)}>Remove From Favorites</button>
    </div>
  );
};

export default FavoriteCard;
