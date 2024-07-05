import React from 'react'

const Login = () => {
  return (
    <section className='flex justify-center items-center mt-10'>
      <div className='w-[300px] h-[300px] bg-white shadow-md text-gray-900 flex flex-col justify-center content-center items-center'>
          <form  >
              <div>
                  <label >User Name</label>
                  <input className='w-[80%] outline-none border border-gray-500 rounded-md' type="text" name="name"/>
              </div>
              <div>
                  <label >Password</label>
                  <input className='w-[80%] outline-none border border-gray-500 rounded-md' type="text" name="password"/>
              </div>
              <div className='mt-5'>
                <button className='w-[200px] h-[35px] bg-gray-800 text-white rounded-sm'>Login</button>
              </div>
          </form>
      
      </div>
    </section>
  )
}

export default Login
