import React from 'react'
import Contacto from '../components/Contacto'
import Header from '../components/header'
import Home from '../components/home'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
const App = () => {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <Contacto></Contacto>
    </>
  )
}

export default App
