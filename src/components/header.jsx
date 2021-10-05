import React, { useEffect } from 'react'
import '../styles/components/header.css'

const Header = () => {

  return(
    <React.Fragment>
      <nav id="nav_header" className="nav">
        <div className="container__header">
          <a href="">DevJuan</a>
          <div className="container__ancla">
              <li className="container__item"><a href="">HOME</a></li>
              <li className="container__item"><a href="">SKILLS</a></li>
              <li className="container__item"><a href="">PROJECTS</a></li>
              <li className="container__item"><a href="">CONTACTO</a></li>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header