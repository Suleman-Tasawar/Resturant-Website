import React from 'react'
import useStore from '../store/zustord';

const CateringMenu = ({EventName,Starters,StarterItems,Main,MainItems,Bread,BreadItems,Desserts,DessertItems,Drinks,DrinkItems}) => {
    const addObject = useStore((state) => state.addObject);

    const addToCart = () => {
      const newOrder = {
        eventName: EventName,
        starter: Starters,
        starterMenu: StarterItems,
        main: Main,
        mainMenu: MainItems,
        bread: Bread,
        breadMenu: BreadItems,
        desserts: Desserts,
        dessertMenu: DessertItems,
        drinks: Drinks,
        drinkMenu: DrinkItems
      };
  
      addObject(newOrder);
  
      console.log(newOrder);
    };
  
return (
    <div className=' text-gray-800 p-5 font-serif lg:w-[20%] cursor-grabbing md:w-[25%] sm:w-[200px] shrink-0 shadow-md'>
        <h1 className='text-2xl font-bold'>{EventName}</h1>
        <div className='mt-5'>
            <h3 className='text-lg font-bold '>{Starters}:</h3>
            <ul className='text-base ml-5'>{
                StarterItems.map((starters,index)=>(
                    <li key={index}>{starters}</li>
                ))
                }
            </ul>
        </div>
        <div className='mt-5'>
            <h3 className='text-lg font-bold '>{Main}:</h3>
            <ul className='text-base ml-5'>{
                MainItems.map((main,index)=>(
                    <li key={index}>{main}</li>
                ))
                }
            </ul>
        </div>
        <div className='mt-5'>
            <h3 className='text-lg font-bold '>{Bread}:</h3>
            <ul className='text-base ml-5'>
                {BreadItems.map((bread,index)=>(
                    <li key={index}>{bread}</li>
                ))}
            </ul>
        </div>
        <div className='mt-5'>
            <h3  className='text-lg font-bold '>{Desserts}:</h3>
            <ul className='text-base ml-5'>
                {DessertItems.map((desserts,index)=>(
                    <li key={index}>{desserts}</li>
                ))}
            </ul>
        </div>
        <div className='mt-5'>
            <h3 className='text-lg font-bold '>{Drinks}:</h3>
            <ul className='text-base ml-5'>
                {DrinkItems.map((drinks,index)=>(
                    <li key={index}>{drinks}</li>
                ))}
            </ul>
        </div>

        <div>
            <button onClick={addToCart} className='w-[150px] h-10 bg-gray-900 text-white rounded-sm'>Add to Cart</button>
        </div>
        
    </div>
  )
}

export default CateringMenu
