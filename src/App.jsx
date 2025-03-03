import { useState } from 'react'
import './App.css'
import Nav from './Components/Navigation/Nav'
import Header from './Components/Header/Header'
import Knee from './Components/Knee/Knee.jsx';
import Body from './Components/Body/Body.jsx';
function App() {

  return (
    <>
      <header>
      <Header />
      <Body />
      <Knee />
    

      </header>
    </>
  )
}

export default App
