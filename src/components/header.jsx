import React, { useEffect } from 'react'
import '../styles/components/header.css'

const Header = () => {
  const onHandleClick = ()=>{
    const nv=document.getElementById('nav_header')
    nv.classList.contains('activeNav') ? nv.classList.remove('activeNav') : nv.classList.add('activeNav')
  }
  return(
    <React.Fragment>
      <div onClick={onHandleClick} className="container_icon">
       <i className="fas fa-bars hamburg"></i>
      </div>
      <nav id="nav_header" className="nav">
        <div className="container__header">
          <a href="">DevJuan</a>
          <div className="container__ancla">
              <li className="container__item"><a onClick={onHandleClick} href="#home">HOME</a></li>
              <li className="container__item"><a onClick={onHandleClick} href="#skills">SKILLS</a></li>
              <li className="container__item"><a onClick={onHandleClick} href="#projects">PROJECTS</a></li>
              <li className="container__item"><a onClick={onHandleClick} href="#contact">CONTACTO</a></li>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header