import React from 'react'

const MenuQuote = ({keys,value,onChange,index,type,errors,register}) => {
  const property = `${type} ${index+1}`
  return (
    <div className='mt-5'>
      <input
        className='lg:w-[70%] md:w-[90%] sm:w-[70%] h-[35px] outline-none border border-gray-800 rounded-[5px]'
        type="text"
        {...register(property, { required: true})}        
        key={keys}
        value={value}
        onChange={onChange}
        placeholder={property}
        />
        {errors && errors[property] && ( 
        <p className="text-xs text-red-700">
          Please check the {property.toLowerCase()}
        </p>
      )}
    </div>
  )
}

export default MenuQuote
