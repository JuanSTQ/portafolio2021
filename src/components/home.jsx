import React, { useEffect } from 'react'
import "../styles/components/home.css"

const Home = () => {
  useEffect(() => {
    const introContent = document.getElementById('intro__content')
    const activeClass = (nodo)=>{
      const  headerTarget = document.getElementById('nav_header')      
      headerTarget.classList.add('is_active__header')
    }
    const isIntersecting = (entry)=>{
      return !entry.isIntersecting
    }
    const removeClass=()=>{
      const  headerTarget = document.getElementById('nav_header')
      headerTarget.classList.remove('is_active__header')
    }
    const observer = new IntersectionObserver((entries)=>{
      entries.filter(isIntersecting).forEach(activeClass)
      entries.filter((entry)=>{return entry.isIntersecting}).forEach(removeClass)
    }, {threshold:0.5})
    observer.observe(introContent)
  }, [])
  return (
      <div id="home" className="intro">
        <div className="overlay-itro"></div>
        <div id="intro__content" className="intro-content">
          <h1>Hola, Soy Juan Tello</h1>
          <p>Web Developer</p>
        </div>
      </div>

  )
}

export default Home
