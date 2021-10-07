import React from 'react'
import "../styles/components/projects.css"
import confStore from '../images/enzardev.png'
import weatherApp from '../images/weather.png'
import bateria from '../images/bateria.png'
import rickandmorty from '../images/rickandmorty.png'
import benturi from '../images/benturi.png'
const Projects = () => {
  return (
    <>
      <section className="projects__section">
        <h2 id="projects" className="projects__title">Projects</h2>
        <div className="container__projects">
          <section className="card_project">
            <img src={benturi} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript, ReactJS, Nodejs, Redux</p>
            <div className="overlay-project">
              <p>Una web para ver peliculas</p>
              <a href="https://benturi.herokuapp.com/" target="_blank">Visit Website</a>
            </div>
          </section>
          <section className="card_project">
            <img src={weatherApp} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript</p>
            <div className="overlay-project">
              <p>Una web para buscar el clima de tu ciudad</p>
              <a href="https://enzardev.xyz/" target="_blank">Visit Website</a>
            </div>
          </section>
          <section className="card_project">
            <img src={bateria} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript</p>
            <div className="overlay-project">
              <p>Una web para tocar musica</p>
              <a href="https://enzardev.xyz/" target="_blank">Visit Website</a>
            </div>
          </section>
          <section className="card_project">
            <img src={rickandmorty} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript</p>
            <div className="overlay-project">
              <p>Una web para ver personajes de rick and morty</p>
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
