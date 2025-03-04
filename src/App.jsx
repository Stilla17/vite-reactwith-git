import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import './Components/Body/Body'
import Body from './Components/Body/Body.jsx';
import Menu from './Components/Menu/Menu.jsx'
import Section from './Components/Section/Section.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Body />
        </section>
        <section>
          <Menu />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Section />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App