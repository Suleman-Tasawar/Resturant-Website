import React from 'react';

const QuoteInput = ({ property, onChange, fieldName, register, errors,isMail,placeholder}) => {

  return (
    <div className='mt-2'>
      <input
        type={isMail ? "email":"text"}
        onChange={onChange}
        name={fieldName}
        className='lg:w-[70%] md:w-[90%] sm:w-[120%] h-[35px] outline-none border border-gray-800 rounded-[3px]'
        placeholder={placeholder? placeholder: `${property}`}
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
