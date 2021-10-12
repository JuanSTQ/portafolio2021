import React, { useEffect } from 'react'
import "../styles/components/projects.css"
import confStore from '../images/enzardev.png'
import weatherApp from '../images/weather.png'
import bateria from '../images/bateria.png'
import rickandmorty from '../images/rickandmorty.png'
import benturi from '../images/benturi.png'
import textTransition from '../utils/textTransition'
const Projects = () => {
  
  useEffect(() => {
    const titleProjects = document.getElementById('projects')
    const observer = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting){
        textTransition(titleProjects, 60);
        observer.unobserve(titleProjects);
        console.log('adios')
      }
    }, {threshold:0.3})
    observer.observe(titleProjects)
  }, [])
  //Projects
  return (
    <>
      <section className="projects__section">
        <h2 id="projects" className="projects__title">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </h2>
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
              <a href="https://6064f285d270fc0007f0ddff--cranky-jackson-4efe0c.netlify.app/" target="_blank">Visit Website</a>
            </div>
          </section>
          <section className="card_project">
            <img src={bateria} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript</p>
            <div className="overlay-project">
              <p>Una web para tocar musica</p>
              <a href="https://606aa9696caf8d00076b9df2--dazzling-stonebraker-7cbe45.netlify.app/" target="_blank">Visit Website</a>
            </div>
          </section>
          <section className="card_project">
            <img src={rickandmorty} alt="Proyecto" />
            <p className="card_tecnologies">html, css, Javascript</p>
            <div className="overlay-project">
              <p>Una web para ver personajes de rick and morty</p>
              <a href="https://605e70e1a0cf9b47cfb6dab1--pedantic-archimedes-10f5e2.netlify.app/" target="_blank">Visit Website</a>
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
