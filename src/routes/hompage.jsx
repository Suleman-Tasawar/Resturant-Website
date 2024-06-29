import React, { useState } from 'react'
import "../index.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <section className='p-5 bg-cover bg-hero bg-center h-screen align-middle mt-10'>
        <h1 className='text-4xl font-black text-gray-900' >Welcome to Suleman Catering Services </h1>
        <h2 className="text-xl  text-gray-800 mt-5">Are you looking for someone to cook delcious meals for your party</h2>
        <p className='text-lg text-gray-700 mt-5'>Well look no more because you came to the right place. W'ill prepare tasty meals that will blow your minds away</p>
        <Link to="/catering"><button className='mt-5 rounded-md w-[200px] h-[35px] bg-gray-700 text-zinc-100'>Catering Options</button></Link>
    </section>
  )
}

export default Homepage
