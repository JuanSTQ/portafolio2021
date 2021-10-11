import React, { useEffect } from 'react'
import "../styles/components/home.css"
import tasinteo from '../images/Tasinteo.jpg'
import textDinamicHome from '../utils/textDinamicHome'
const Home = () => {

  useEffect(() => {
    const text = document.getElementById('text-dinamic')
    textDinamicHome(text)
    const  headerTarget = document.getElementById('nav_header')      
    const introContent = document.getElementById('intro__content')
    const activeClass = (nodo)=>{
      headerTarget.classList.add('is_active__header')
    }
    const isIntersecting = (entry)=>{
      if(document.body.clientWidth<=764){
        console.log(document.body.clientWidth)
        observer.unobserve(introContent)
        headerTarget.classList.add('is_active__header')
      }
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
    if(document.body.clientWidth<=764){
      console.log(document.body.clientWidth)
      observer.unobserve(introContent)
      headerTarget.classList.add('is_active__header')
    }else{
      observer.observe(introContent)
    }

  }, [])
  return (
      <div id="home" className="intro">
        <div className="overlay-itro"></div>
        <img src={tasinteo} alt="Fondo" />
        <div id="intro__content" className="intro-content">
          <div className="container-text">
            <h1>Hola, Soy Juan Tello</h1>
            <div className="container-text-dinamic">
              <p id="text-dinamic"></p>
              <p className="underscore">|</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Home
