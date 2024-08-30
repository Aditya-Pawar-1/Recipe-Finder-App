import React, { useRef } from 'react'
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const searchRecipe = useRef('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const recipeName = searchRecipe.current.value.trim();
    if (recipeName) {
      navigate(`/RecipeDetails/${recipeName}`);
    }
  }

  return (
    <div className='flex justify-center items-center bg-white rounded-full' >
      <input
        className='w-[40vw] h-9 outline-none rounded-full text-lg p-4'
        type="text"
        placeholder='Search Delicious Recipe'
        ref={searchRecipe}
      />
      <button
        type="button"
        className='p-2 rounded-full'
        onClick={handleSearch}
        value={searchRecipe}
      >
        <BsSearch size={`1.5em`} />
      </button>

    </div>
  )
}

export default Search