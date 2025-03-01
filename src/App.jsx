import { useState } from 'react'
import './App.css'
import Nav from './Components/Navigation/Nav'
import Header from './Components/Header/Header'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        

        <Header />
      </header>
    </>
  )
}

export default App