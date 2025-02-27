import { useState } from 'react'
import './App.css'
import Nav from './Components/Navigation/Nav'
import Header from './Components/Header/Header'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        {/* <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <Nav />
        {/* nav */}

        <Header />

      </header>
    </>
  )
}

export default App
