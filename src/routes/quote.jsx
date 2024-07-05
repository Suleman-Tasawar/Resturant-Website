import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import QuoteInput from '../components/QuoteInput'

const Quote = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [quote,setQuote] = useState({name:'',phone:'',option:'menu1',starter:[],main:[],bread:'',desserts:[],drinks:[]})
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'menu-type') {
      setQuote(prevState => ({
        ...prevState,
        option: value
      }));
    } else if (name === 'name') {
      setQuote(prevState => ({
        ...prevState,
        name: value
      }));
    } else if (name === 'phone') {
      setQuote(prevState => ({
        ...prevState,
        phone: value
      }));
    } else if (name.startsWith('Starter')) {
      const index = parseInt(name.split('-')[1]);
      const newStarters = [...quote.starter];
      newStarters[index] = value;
      setQuote(prevState => ({
        ...prevState,
        starter: newStarters
      }));
    } else if (name.startsWith('Main')) {
      const index = parseInt(name.split('-')[1]);
      const newMain = [...quote.main];
      newMain[index] = value;
      setQuote(prevState => ({
        ...prevState,
        main: newMain
      }));
    } else if (name === 'Bread') {
      setQuote(prevState => ({
        ...prevState,
        bread: value
      }));
    } else if (name.startsWith('Desserts')) {
      const index = parseInt(name.split('-')[1]);
      const newDesserts = [...quote.desserts];
      newDesserts[index] = value;
      setQuote(prevState => ({
        ...prevState,
        desserts: newDesserts
      }));
    } else if (name.startsWith('Drinks')) {
      const index = parseInt(name.split('-')[1]);
      const newDrinks = [...quote.drinks];
      newDrinks[index] = value;
      setQuote(prevState => ({
        ...prevState,
        drinks: newDrinks
      }));
    }
  };
  console.log(quote)
  
  const launch = ()=>{
    console.log("3 2 1 Launched")
  }
  return (
    <section className='font-serif mt-10'>
      <div className='mx-auto text-center px-5 text-gray-800 lg:w-[35%] md:w-[50] sm:w-[80%]'>
          <h1 className='text-4xl'>Did'nt find service you expected</h1>
          <p className='mt-5 text-lg'>No worries just tell us what you want us to make. Take your time and submit a quick quote to us
            our staff will look into it and tell you if its possible
          </p>
      </div>
      {/*Form to submit users quote*/}
      <div className="mt-5 px-5">
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(launch)}>
          <div className='flex lg:flex-row md:flex-col sm:flex-col justify-evenly items-center'>
            <div>
              <select  className='outline-none'value={quote.option} onChange={handleChange}  name="menu-type">
                <option value="menu1">Wedding</option>
                <option value="menu2">Birthday</option>
                <option value="menu3">Corporate</option>
              </select>
            </div>
            <QuoteInput value ={quote.name} property="Name"  isItem = {false} fieldName = 'name' onChange = {handleChange}  register={register} errors={errors}/>
            <QuoteInput value = {quote.phone} property="Number" isItem = {false}fieldName = 'phone'  onChange = {handleChange}  register={register} errors={errors} />

          </div>
          <div className='flex lg:flex-row md:flex-col sm:flex-col justify-evenly gap-x-5 items-center'>
            <div>
              <div><h3 className="text-lg">Starters:</h3></div>
             <QuoteInput property = 'Starter' isItem = {true} fieldName = 'Starter-0' onChange = {handleChange}  register={register} errors={errors} />
             <QuoteInput property = 'Starter' isItem = {true} fieldName = 'Starter-1' onChange = {handleChange}  register={register} errors={errors}/>
             <QuoteInput property = 'Starter' isItem = {true} fieldName = 'Starter-2' onChange = {handleChange}  register={register} errors={errors}/>
            </div>
            {/*Main*/}
            <div>
              <div><h3 className="text-lg">Main Course:</h3></div>
             <QuoteInput property = 'Main' fieldName = 'Main-0' isItem = {true} onChange = {handleChange}  register={register} errors={errors}/>
             <QuoteInput property = 'Main' fieldName = 'Main-1' isItem = {true} onChange = {handleChange}  register={register} errors={errors}/>
             <QuoteInput property = 'Main' fieldName = 'Main-2' isItem = {true} onChange = {handleChange}  register={register} errors={errors}/>
            </div>
            {/*Bread*/}
            <div>
              <div><h3 className="text-lg">Bread:</h3></div>
             <QuoteInput property = 'Bread' fieldName = 'Bread' isItem = {true} onChange = {handleChange}  register={register} errors={errors}/>
            </div>
            {/*Dessert*/}
            <div>
              <div><h3 className="text-lg">Dessert:</h3></div>
             <QuoteInput property = 'Desserts' fieldName = 'Desserts-0' isItem = {true} onChange = {handleChange}  register={register} errors={errors}/>
             <QuoteInput property = 'Desserts'  fieldName = 'Desserts-1' isItem = {true} onChange = {handleChange}  register={register} errors={errors}/>
             <QuoteInput property = 'Desserts' fieldName = 'Desserts-2'  isItem = {true}onChange = {handleChange}  register={register} errors={errors}/>
            </div>

            {/*Dessert*/}
            <div>
              <div><h3 className="text-lg">Drinks:</h3></div>
             <QuoteInput property = 'Drinks' fieldName = 'Drinks-0'  isItem = {true} onChange = {handleChange}  register={register} errors={errors}/>
             <QuoteInput property = 'Drinks' fieldName = 'Drinks-1' isItem = {true} onChange = {handleChange}  register={register} errors={errors}/>
             <QuoteInput property = 'Drinks'fieldName = 'Drinks-2' isItem = {true} onChange = {handleChange}  register={register} errors={errors}/>
            </div>
          </div>
          <div>
            <button className='w-[200px] h-[35px] bg-gray-900 text-white hover:bg-gray-800 rounded-sm transition-colors'>Done</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Quote
