import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoHome = () => {
  navigate('/')
}

const Loading = ({recipe}) => {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen text-9xl flex items-center justify-center text-white bg-black'>
      Loading
    </div>
  )
}

export default Loading