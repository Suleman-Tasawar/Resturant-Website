import React from 'react'
import useStore from '../store/zustord'
import { useForm } from "react-hook-form";
import QuoteInput from "../components/QuoteInput"

const Checkout = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const cateing = useStore((state)=>state.catering)
    console.log(cateing)
  return (
    <>
    {
      cateing.length>0?
      (
      <h1 className='text-4xl text-center text-gray-900 font-serif'>Checkout</h1>,
      <div className='mt-5 flex justify-center items-center'>
        <div className="w-[30%]">
          <form >
            <QuoteInput property="name" fieldName="name"  placeholder="Enter you name here"  register={register} errors={errors} />
            <QuoteInput property="phone" fieldName="phone" placeholder="Enter your phone number here"  register={register} errors={errors} />
            <QuoteInput property="email" fieldName="email" placeholder="Enter you email here"  register={register} errors={errors} />
            <div className='mt-5 flex flex-col'>
              <label>Select the data for you event</label>
              <input className='mt-2 w-44 border border-gray-800' type="date" name="date" id="data" />
              </div>
            <div className='mt-5'>
              <label>How many?</label>
              <input type="range" name="people-size"/>
            </div>
            <QuoteInput property="city" fieldName="city" placeholder="Enter you city name here"  register={register} errors={errors} />
            <QuoteInput property="primary-address" fieldName="primary-address" placeholder="Enter you Primary Address here"  register={register} errors={errors} />
            <QuoteInput property="secondary-address" fieldName="secondary-address" placeholder="Enter you Secondary Address here"  register={register} errors={errors} />
            <div className='mt-5'>
              <button  className='w-[150px] h-10 bg-gray-900 text-white rounded-sm'>Confirm Order</button>
          </div>
          
          </form>
        </div>
        <div className='w-[30%] shadow-sm '>
          <h1 className='font-bold text-2xl  text-gray-900'>Your Order</h1>
          {
            cateing.map((order)=>(
              <div className='mt-2 p-1'>
                <h1 className='font-bold'>{order.eventName}</h1>
                <h2 className='font-semibold'>{order.starter}</h2>
                <ul className='font-medium'>
                  <li>{order.starterMenu}</li>
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      )
      :
      (<p className='mt-5 text-3xl text-center font-serif text-gray-950'>No Item in your cart :)</p>)

    }
    </>
  )
}

export default Checkout
