import React from 'react'

const QuoteInput = ({property,isItem}) => {
  return (
    <div className='mt-2'>
    <input type="text" className='lg:w-[200px] md:w-[200px] sm:w-[70%] h-[35px] outline-none border border-gray-800 rounded-s-lg' placeholder={`${property} ${isItem?" Item":""}`} />
  </div>
  )
}

export default QuoteInput
