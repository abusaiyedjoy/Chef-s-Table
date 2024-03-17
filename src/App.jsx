import Banner from './Components/banner/banner'
import Recipies from './Components/recipes/recipies'
import { useState } from 'react'
import Cart from './Components/cart/cart'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [item,setItem]= useState([]);
  const [cook,setCook]= useState([]);
  const cartItem=(select)=>{
    const isExist = item.find(card=>card.id==select.id);
    if(!isExist){
      setItem([...item, select])
    }else{
      toast.warning("This recipe already added!",{
        position: "top-center"
      });
    }
    

  }
  const handleDelete=(id,food)=>{
    const exit =item.filter(card=>card.id!=id)
    setItem(exit)
    recipeCooking(food)
  }
  const recipeCooking=(food)=>{
    cook.find(card=>card.id==food.id);
     setCook([...cook, food])
  }   
  

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center my-4 container mx-auto'>
        <h1 className='text-3xl cursor-pointer mb-3 font-bold'>Recipe Calories</h1>
        <ul className='flex justify-between mb-3 items-center text-gray-500 text-lg cursor-pointer gap-6 font-medium'>
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
        <div className='flex justify-center items-center gap-4'>
          <div className='w-[250px] gap-2 flex bg-gray-100 py-2 pl-3 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-gray-400 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input className='bg-transparent' type="text" placeholder='Search' />
          </div>
          <div className='p-2 bg-green-400 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>

        </div>
      </div>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Our Recipies Section */}
      <dir className="container mx-auto text-center my-10">
        <h1 className='text-4xl font-bold'>Our recipes</h1>
        <p className='text-lg my-4'>Explore culinary wonders with our diverse array of recipes, from simple delights <br /> to gourmet creations, inspiring your cooking adventures.</p>
      </dir>
      {/* Recipes Items */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="md:col-span-7">
        <Recipies cartItem={cartItem}></Recipies>

        </div>

        {/* Add to cart */}
        <div className="w-full lg:col-span-5">
          <Cart cook={cook} handleDelete={handleDelete} item={item}></Cart>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
