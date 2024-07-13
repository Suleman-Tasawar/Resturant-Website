import React, { useState } from 'react'

const Login = () => {
  const [loginData,setLoginData] = useState({userName:"",passCode:""})
  const handleChange = (event)=>{
    setLoginData(prev=>{
      return{
        ...prev,
        [event.target.name]:event.target.value
      }
    })
  }

  const handleSubmit = ()=>{
    console.log("Submitting ",loginData)
  }

  return (
    <section className='flex justify-center items-center mt-10'>
      <div className='w-[300px] h-[300px] bg-white shadow-md text-gray-900 flex flex-col justify-center content-center items-center'>
          <form  onSubmit={handleSubmit}>
              <div>
                  <label >User Name</label>
                  <input name = "userName" value={loginData.userName} onChange={handleChange} className='w-[80%] outline-none border border-gray-500 rounded-md' type="text" required/>
              </div>
              <div>
                  <label >Password</label>
                  <input name="passCode" value={loginData.passCode} onChange={handleChange} className='w-[80%] outline-none border border-gray-500 rounded-md' type="text" required/>
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
