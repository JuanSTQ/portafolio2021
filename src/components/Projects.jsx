import React from 'react'
import "../styles/components/projects.css"
import confStore from '../images/enzardev.png'
const Projects = () => {
  return (
    <>
      <section className="projects__section">
        <h2 id="projects" className="projects__title">Projects</h2>
        <div className="container__projects">
          <section className="card_project">
            <img src={confStore} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript, ReactJS, firebase</p>
            <div className="overlay-project">
              <p>Una web para comprar articulos</p>
              <a href="https://enzardev.xyz/" target="_blank">Visit Website</a>
            </div>
          </section>
          <section className="card_project">
            <img src={confStore} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript, ReactJS, firebase</p>
            <div className="overlay-project">
              <p>Una web para comprar articulos</p>
              <a href="https://enzardev.xyz/" target="_blank">Visit Website</a>
            </div>
          </section>
          <section className="card_project">
            <img src={confStore} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript, ReactJS, firebase</p>
            <div className="overlay-project">
              <p>Una web para comprar articulos</p>
              <a href="https://enzardev.xyz/" target="_blank">Visit Website</a>
            </div>
          </section>
          <section className="card_project">
            <img src={confStore} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript, ReactJS, firebase</p>
            <div className="overlay-project">
              <p>Una web para comprar articulos</p>
              <a href="https://enzardev.xyz/" target="_blank">Visit Website</a>
            </div>
          </section>
          <section className="card_project">
            <img src={confStore} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript, ReactJS, firebase</p>
            <div className="overlay-project">
              <p>Una web para comprar articulos</p>
              <a href="https://enzardev.xyz/" target="_blank">Visit Website</a>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Projects
