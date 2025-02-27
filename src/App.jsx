import { useState } from 'react'
import './App.css'
import './Components/Body/Body'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex items-center gap-[20px]">
        <button onClick={() => setCount(count => count + 1)} className='text-2xl bg-gray-600 w-[50px] h-[50px]'>+</button>
        <h1 id='text' className='text-2xl text-gray-700'>{count}</h1>
        <button onClick={() => setCount(count => count - 1)} className='text-2xl bg-gray-600 w-[50px] h-[50px]'>-</button>
      </div >
    </>
  )
}

export default App
