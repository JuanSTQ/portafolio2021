import React, { useEffect } from 'react'
import skill from '../images/se.png'
import "../styles/components/skills.css"
const Skills = () => {
  useEffect(() => {
    const skillsSection = document.getElementById('skillsId')
    const activeClassBar = (nodo)=>{
      const bars = Array.from(document.getElementsByClassName('skill__bar'))
      bars.forEach((nodo, index)=>{
        switch(index){
          case 0: 
            nodo.style.width = "70%"
            break;
          case 1:
            nodo.style.width = "40%"
            break;
          case 2:
            nodo.style.width = "60%"
            break;
          case 3: 
            nodo.style.width = "25%"
            break;
          default: 
           console.log('mmm')
        }
      })
    }
    const observer = new IntersectionObserver((entries)=>{
      entries.filter((entry)=>{return entry.isIntersecting}).forEach(activeClassBar)
      
    }, {threshold:0.5})
    observer.observe(skillsSection)
  }, [])
  return (
    <>
    <section id="skillsId" className="skills">
        <h2 className="skills__title">Skills</h2>
        <div className="container__skills">
          <figure>
            <img src={skill} alt="" />
          </figure>
          <div className="container__bar">
            <section className="Front-end">
              <h2>Front-end</h2>
              <div className="skills__bar-gris">
                <div className="skill__bar"></div>
              </div>
            </section>
            <section className="Back-end">
              <h2>Back-end</h2>
              <div className="skills__bar-gris">
                <div className="skill__bar"></div>
              </div>
            </section>
            <section className="ReactJS">
              <h2>ReactJs</h2>
              <div className="skills__bar-gris">
                <div className="skill__bar"></div>
              </div>
            </section>
            <section className="NodeJs">
              <h2>NodeJs</h2>
              <div className="skills__bar-gris">
                <div className="skill__bar"></div>
              </div>
            </section>
          </div>
        </div>
    </section>
    </>
  )
}

export default Skills
