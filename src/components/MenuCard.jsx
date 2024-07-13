import React from 'react'

const MenuCard = ({Img,Title,Desc}) => {
  return (
    <div className='bg-white shadow-sm  rounded-lg text-gray-900 lg:w-[50%] md:w-[55%] sm:w-[50%] p-5 text-center '>
        <div className='items-center '>
          <img className='mx-auto rounded-md w-full h-full object-cover' src={Img} alt="" />
        </div>
        <div className='mt-2 rounded-md  bg-white text-gray-900'>
          <h3 className='text-xl font-sans '>{Title}</h3>
          <p className='mt-5 text-sm font-thin'>{Desc}</p>
        </div>
    </div>
  )
}

export default MenuCard
