import { useState } from 'react'
import './App.css'
import Nav from './Components/Navigation/Nav'
import Header from './Components/Header/Header'
import './Components/Body/Body'
import Body from './Components/Body/Body.jsx';
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header />

        <Body />
      </header>

      {/* <div className="flex items-center gap-[20px]">
        <button onClick={() => setCount(count => count + 1)} className='text-2xl bg-gray-600 w-[50px] h-[50px]'>+</button>
        <h1 id='text' className='text-2xl text-gray-700'>{count}</h1>
        <button onClick={() => setCount(count => count - 1)} className='text-2xl bg-gray-600 w-[50px] h-[50px]'>-</button>
      </div > */}
    </>
  )
}

export default App