import React from 'react'

const MenuCard = ({Img,Title,Desc}) => {
  return (
    <div className='bg-white shadow-sm rounded-lg text-gray-900 lg:w-[350px] md:w-[250px] sm:w-[200px] p-5 text-center hover:scale-110 transition-all'>
        <div className='items-center'>
          <img className='mx-auto rounded-sm w-[200px] h-[200px]' src={Img} alt="" />
        </div>
        <div className='mt-5'>
          <h3 className='text-3xl font-sans '>{Title}</h3>
          <p className='mt-5 text-lg font-thin'>{Desc}</p>
        </div>
    </div>
  )
}

export default MenuCard
