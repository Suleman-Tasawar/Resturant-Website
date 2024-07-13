import React, { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import MenuQuote from "../components/MenuQuote";

const Quote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    option: "menu1",
    bread: "",
  });
  const [menuArray, setMenuArray] = useState({
    starters: [],
    main: [],
    desserts: [],
    drinks: [],
  });
  const form = useRef()
  /*
  Allows to manage form state
  */
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
    /*
  Allows to manage form state
  */
  const handleMenuArrayChange = (index,value,currentMenu,menuProp) =>{
    const newMenuArray = [...currentMenu]
    newMenuArray[index] = value
    setMenuArray({...menuArray,[menuProp]:newMenuArray})
  }

  const addNewInput = (menuProp)=>{
    setMenuArray({...menuArray,[menuProp]:[...menuArray[menuProp],""]})
  }
  const launch = () => {
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="font-serif mt-10">
      <div className="mx-auto text-center px-5 text-gray-800 lg:w-[35%] md:w-[50] sm:w-[90%]">
        <h1 className="text-4xl">Did'nt find service you expected</h1>
        <p className="mt-5 text-lg">
          No worries just tell us what you want us to make. Take your time and
          submit a quick quote to us our staff will look into it and tell you if
          its possible
        </p>
      </div>
      {/*Form to submit users quote*/}
      <div className="mt-5 px-5">
        <form
          ref={form}
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit(launch)}
        >
          <div className="flex lg:flex-row md:flex-col sm:flex-col justify-evenly items-center">
            <div>
              <select
                className="outline-none"
                name="menu-type"
                value={formData.option}
                onChange={handleChange}
              >
                <option value="menu1">Wedding</option>
                <option value="menu2">Birthday</option>
                <option value="menu3">Corporate</option>
              </select>
            </div>

            <div className="mt-5">
              <input className='lg:w-[70%] md:w-[90%] sm:w-[70%] h-[35px] outline-none border border-gray-800 rounded-[5px]' type="text" name="name" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="mt-5">
              <input className='lg:w-[70%] md:w-[90%] sm:w-[70%] h-[35px] outline-none border border-gray-800 rounded-[5px]' type="text" name="phone" value={formData.phone} onChange={handleChange}/>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-col sm:flex-col justify-evenly gap-x-5 items-center">
            <div>
              <div>
                <h3 className="text-lg">Starters:</h3>
              </div>
              {menuArray.starters.map((starter, index) => (
                <MenuQuote
                  key={index}
                  value={starter}
                  onChange={(e) => handleMenuArrayChange(index, e.target.value,menuArray.starters,"starters")}
                  index={index}
                  type="Starter"
                  register={register}
                  errors={errors}
                />
              ))}
              <button className="mt-5 w-[100px] h-[30px] bg-gray-800 text-white rounded-sm hover:bg-blue-950 transition-colors" onClick={()=>addNewInput("starters")}>New Starter</button>
            </div>
            {/*Main*/}
            <div>
              <div>
                <h3 className="text-lg">Main Course:</h3>
              </div>
              {menuArray.main.map((main, index) => (
                <MenuQuote
                  key={index}
                  value={main}
                  onChange={(e) => handleMenuArrayChange(index, e.target.value,menuArray.main,"main")}
                  index={index}
                  type="Main"
                  register={register}
                  errors={errors}
                />
              ))}
              <button className="mt-5 w-[100px] h-[30px] bg-gray-800 text-white rounded-sm hover:bg-blue-950 transition-colors" onClick={()=>addNewInput("main")}>New Main</button>
            </div> 
            {/*Bread*/}
            <div>
              <div className="mt-5">
                <h3 className="text-lg">Bread:</h3>
              </div>
              <div>
              <input className='lg:w-[70%] md:w-[90%] sm:w-[70%] h-[35px] outline-none border border-gray-800 rounded-[5px]' {...register("bread", { required: true})} type="text" name="bread" value={formData.bread} onChange={handleChange}/>
              {errors && errors["bread"] && ( 
            <p className="text-xs text-red-700">
              Please check the {"bread".toLowerCase()}
            </p>
          )}
            </div>
            </div>
            {/*Dessert*/}
            <div>
              <div>
                <h3 className="text-lg">Dessert:</h3>
              </div>
              {menuArray.desserts.map((dessert, index) => (
                <MenuQuote
                  key={index}
                  value={dessert}
                  onChange={(e) => handleMenuArrayChange(index, e.target.value,menuArray.desserts,"desserts")}
                  index={index}
                  type="Desserts"
                  register={register}
                  errors={errors}
                />
              ))}
              <button className="mt-5 w-[100px] h-[30px] bg-gray-800 text-white rounded-sm hover:bg-blue-950 transition-colors" onClick={()=>addNewInput("desserts")}>New Desserts</button>
            </div>

            {/*Dessert*/}
            <div>
              <div>
                <h3 className="text-lg">Drinks:</h3>
              </div>
              {menuArray.drinks.map((drink, index) => (
                <MenuQuote
                  keys={index}
                  value={drink}
                  onChange={(e) => handleMenuArrayChange(index, e.target.value,menuArray.drinks,"drinks")}
                  index={index}
                  type="Drinks"
                  register={register}
                  errors={errors}
                />
              ))}
              <button className="mt-5 w-[100px] h-[30px] bg-gray-800 text-white rounded-sm hover:bg-blue-950 transition-colors" onClick={()=>addNewInput("drinks")}>New Drinks</button>
            </div>
          </div>
          <div>
            <button className="mt-5 w-[200px] h-[35px] bg-gray-900 text-white hover:bg-gray-800 rounded-sm transition-colors">
              Done
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Quote;
