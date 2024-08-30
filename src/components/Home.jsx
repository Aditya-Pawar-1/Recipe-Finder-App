import React, { useContext,eff } from 'react'
import Search from './Search'
import { MdFavorite } from "react-icons/md";
import logo from '../assets/images/pexels-ella-olsson-572949-1640777.jpg'
import { useNavigate } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';

const Home = () => {
    const navigate = useNavigate();
    const { favoriteRecipe, setFavoriteRecipe } = useContext(RecipeContext);

    const handleFavoriteClick = () => {
        navigate('/Favorites')
    }

    return (
        <div className='w-full p-4 h-screen bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${logo})` }}>
            <div className="flex items-center justify-center flex-col gap-10 pt-[20vh]">
                <h1 className='text-9xl text-white font-medium bg-black bg-opacity-75 p-7'>THE RECIPE FINDER</h1>
                <Search />
                <button className='flex items-center gap-5 p-2 m-4 bg-orange-600 text-white rounded-lg font-semibold'
                    onClick={handleFavoriteClick}
                >Favorites Recipes <span><MdFavorite size={'1.3em'} /></span> </button>
            </div>
        </div>

    )
}

export default Home