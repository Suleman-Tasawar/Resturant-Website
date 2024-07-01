import React from 'react'
import QuoteInput from '../components/QuoteInput'

const Quote = () => {
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
        <form className='flex flex-col justify-center items-center'>
          <div className='flex lg:flex-row md:flex-col sm:flex-col justify-evenly items-center'>
            <div>
              <select  className='outline-none'  name="menu-type">
                <option value="menu1">Wedding</option>
                <option value="menu1">Birthday</option>
                <option value="menu1">Corporate</option>
              </select>
            </div>
            <QuoteInput property="Name"  isItem = {false}/>
            <QuoteInput property="Number" isItem = {false} />

          </div>
          <div className='flex lg:flex-row md:flex-col sm:flex-col justify-evenly gap-x-5 items-center'>
            <div>
              <div><h3 className="text-lg">Starters:</h3></div>
             <QuoteInput property = 'Starter' isItem = {true} />
             <QuoteInput property = 'Starter' isItem = {true} />
             <QuoteInput property = 'Starter' isItem = {true}/>
            </div>
            {/*Main*/}
            <div>
              <div><h3 className="text-lg">Main Course:</h3></div>
             <QuoteInput property = 'Main' isItem = {true}/>
             <QuoteInput property = 'Main' isItem = {true}/>
             <QuoteInput property = 'Main' isItem = {true}/>
            </div>
            {/*Bread*/}
            <div>
              <div><h3 className="text-lg">Bread:</h3></div>
             <QuoteInput property = 'Bread' isItem = {true}/>
            </div>
            {/*Dessert*/}
            <div>
              <div><h3 className="text-lg">Dessert:</h3></div>
             <QuoteInput property = 'Desserts' isItem = {true}/>
             <QuoteInput property = 'Desserts' isItem = {true}/>
             <QuoteInput property = 'Desserts' isItem = {true}/>
            </div>

            {/*Dessert*/}
            <div>
              <div><h3 className="text-lg">Drinks:</h3></div>
             <QuoteInput property = 'Drinks' isItem = {true}/>
             <QuoteInput property = 'Drinks' isItem = {true}/>
             <QuoteInput property = 'Drinks' isItem = {true}/>
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
