import React from 'react';

const QuoteInput = ({ property, isItem, onChange, fieldName, register, errors,isMail}) => {

  return (
    <div className='mt-2'>
      <input
        type={isMail ? "email":"text"}
        onChange={onChange}
        name={fieldName}
        className='lg:w-[70%] md:w-[90%] sm:w-[70%] h-[35px] outline-none border border-gray-800 rounded-[5px]'
        placeholder={`${property} ${isItem ? "Item" : ""}`}
        {...register(property, { required: true})}
      />
      {errors && errors[property] && ( 
        <p className="text-xs text-red-700">
          Please check the {property.toLowerCase()}
        </p>
      )}
    </div>
  );
};

export default QuoteInput;
