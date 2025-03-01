import { useState } from 'react'
import './App.css'
import Nav from './Components/Navigation/Nav'
import Header from './Components/Header/Header'
import './Components/Body/Body'
import Body from './Components/Body/Body.jsx';
import Menu from './Components/Menu/Menu.jsx'
function App() {


  return (
    <>
      <header>
        <Header />
        <Body />
        <Menu />
      </header>
    </>
  )
}

export default App