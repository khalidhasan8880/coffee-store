import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const [count, setCount] = useState(0)
const coffees = useLoaderData()
console.log(coffees);
  return (
    <div>
      <h2 className='text-center text-5xl font-bold text-fuchsia-950 my-5'>Welcome to coffee store</h2>
      <div className='grid sm:grid-cols-2 container mx-auto mt-40'>
        {
          coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
