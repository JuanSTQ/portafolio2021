import React from 'react'
import "../styles/components/contact.css"
const Contacto = () => {
  return (
    <>
      <section className="section-contact">
        <h2 id="contact" className="contact__title">Contacto</h2>
        <div className="social">
          <a href="https://twitter.com/juanstq" target="_blank" className="circle">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://github.com/JuanSTQ" target="_blank" className="circle">
            <i  className="fab fa-github-alt github"></i>
          </a>
          <a href="https://www.tiktok.com/@juanstq" target="_blank" className="circle">
            <i  className="fab fa-tiktok tiktok"></i>
          </a>
          
        </div>
        <form className="container_form" action="/">
          <label className="label" htmlFor="email">nombre</label>
          <input className="input" id="email" type="text" 
          placeholder="Juan Sebastian Tello Quinteros" />
          <label className="label" htmlFor="password">email</label>
          <input className="input" id="password" type="email" 
          placeholder="juan@example.com" />
          <label className="label" htmlFor="message">Your message</label>
          <textarea name="" id="message" cols="30" rows="4"></textarea>
          <button className="send_data" type="submit">Enviar</button>
        </form>
      </section> 
    </>
  )
}

export default Contacto
