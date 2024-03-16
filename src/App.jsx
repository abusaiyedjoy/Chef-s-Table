import Banner from './Components/banner'
import Recipies from './Components/recipies'
import './App.css'

function App() {

  return (
    <>
      <div className='flex justify-between items-center my-4 container mx-auto'>
      <h1 className='text-3xl font-bold'>Recipe Calories</h1>
      <ul className='flex justify-between items-center text-xl gap-6 font-medium'>
        <li>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Search</li>
      </ul>
      <div className='w-[200px] bg-gray-100 py-2 px-4 rounded-full'>
        <input className='bg-transparent' type="text" placeholder='Search' />
      </div>
      </div>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Our Recipies Section */}
      <dir className="container mx-auto text-center my-10">
        <h1 className='text-4xl font-bold'>Our recipes</h1>
        <p className='text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nihil numquam ratione impedit molestiae, <br /> vero officiis itaque provident dolore molestias!</p>
      </dir>
      {/* Recipes Items */}
      <Recipies></Recipies>
    </>
  )
}

export default App
