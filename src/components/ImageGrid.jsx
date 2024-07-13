import React from 'react'

const ImageGrid = ({Image}) => {
  return (
    <div className='w-[100%] h-[300px] mt-5'>
        <img className='w-full h-full object-cover ml-5' src={Image} alt="Events" />
    </div>
  )
}

export default ImageGrid
