import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <section className='font-sans flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-center items-center align-middle mt-10'>
        <div className='p-5 lg:w-[50%] md:w-[80%] sm:w-[90%]'>
          <h1 className='text-4xl font-serif text-gray-900' >Welcome to Suleman Catering Services </h1>
        
          <p className='italic text-lg text-gray-700 mt-5'><span className='text-3xl'>"</span> At Suleman Caters, we bring a blend of culinary mastery and exceptional service to cater to your every event need in Rawalpindi. Whether you're planning a 
          wedding, corporate gathering, or a special celebration, 
          our commitment to quality and attention to detail ensures an 
          unforgettable dining experience. With a menu inspired by Pakistani flavors and 
          crafted with care, Suleman Caters promises to elevate your event with delectable dishes
           and impeccable service. Allow us to make your occasion a memorable one with our passion 
           for hospitality and delicious cuisine.<span className='text-3xl'>"</span> </p>
          <Link to="/catering"><button className='mt-5 rounded-md w-[200px] h-[39px] bg-gray-900 text-zinc-100'>Catering Options</button></Link>
        </div>
        <div className='lg:w-[50%] md:w-[70%] sm:w-[80%]'>
          <img className='rounded-md' src="\assets\louis-hansel-adYREqRdHCs-unsplash.jpg" alt="chiefs" />
        </div>
    </section>
  )
}

export default Homepage
