import React from 'react'

const MenuCard = ({Img,Title,Desc}) => {
  return (
    <div className='bg-white shadow-sm relative rounded-lg text-gray-900 lg:w-[30%] md:w-[25%] sm:w-[50%] p-5 text-center '>
        <div className='items-center '>
          <img className='mx-auto rounded-md w-full h-full object-cover' src={Img} alt="" />
        </div>
        <div className='absolute w-[50%] rounded-md top-32 left-24 bg-white text-gray-900'>
          <h3 className='text-xl font-sans '>{Title}</h3>
          <p className='mt-5 text-sm font-thin'>{Desc}</p>
        </div>
    </div>
  )
}

export default MenuCard
