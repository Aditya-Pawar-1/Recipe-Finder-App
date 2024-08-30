import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Routing from './utils/Routing'
import RecipeContextProvider from './Context/RecipeContextProvider'

function App() {

  return (
    <BrowserRouter>
      < RecipeContextProvider >
        <Routing />
      </RecipeContextProvider>
    </BrowserRouter>
  )
}

export default App
