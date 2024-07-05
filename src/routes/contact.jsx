import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import QuoteInput from "../components/QuoteInput"

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const form = useRef();
    const [responce,setResponce] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const sendEmail = () => {
  
      emailjs
        .sendForm('service_bt2vgoj', 'template_2qoinnd', form.current, {
          publicKey: 'Kul8DNTM4QoPR2fhL',
        })
        .then(
          () => {
            setResponce("Message Send")
          },
          (error) => {
            setErrorMessage(`Failed ${error.text}`)
          },
        );
    };
  return (
    <section className='font-serif flex flex-col justify-center items-center w-[80%] text-center mx-auto mt-5 '> 
    <div className='w-[50%]'>
      <h1 className='mt-5 text-4xl text-gray-900'>Contact Us</h1>
      <p className='mt-5 text-gray-900'>Feel free to contact us if you have any queries. If you are lucky w'ill send a discound coupon too</p>
    </div>
      <form ref={form} className='w-[60%]' onSubmit={handleSubmit(sendEmail)}>
        {responce&& <p className='text-green-400 text-sm'>{responce}</p>}
        {errorMessage&& <p className='text-green-400 text-sm'>{errorMessage}</p>}
        <QuoteInput property='name' isItem={false} fieldName='name' register={register} errors={errors}/>
        <QuoteInput property='email' isItem={false} fieldName='email' register={register} errors={errors} isMail = {true}/>
        <QuoteInput property='info' isItem={false} fieldName='contact' register={register} errors={errors} isText = {true}/>
        <div className='mt-5'><button className='w-[200px] h-[35px] bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors'>Send</button></div>
      </form>
    </section>
  )
}

export default Contact
