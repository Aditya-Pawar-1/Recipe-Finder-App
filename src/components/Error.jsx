import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()

  const GoHome = () => {
    navigate('/')
  }

  return (
    <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center text-white bg-black text-5xl'>
      <h1>Error: Recipe Not Found</h1>
      <button className='w-40 h-10 mt-5 p-2 text-lg font-semibold bg-white text-black'
        onClick={() => GoHome()}
      >Go Home</button>
    </div>
  )
}

export default Error