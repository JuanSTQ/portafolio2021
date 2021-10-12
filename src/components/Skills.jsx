import React, { useEffect } from 'react'
import skill from '../images/se.png'
import "../styles/components/skills.css"
import textTransition from '../utils/textTransition'
const Skills = () => {
  useEffect(() => {
    const skillsSection = document.getElementById('skillsId')
    const skillsTitle = document.getElementById('skills')
    console.log(skillsTitle.textContent)
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
    const observerTitle = new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting){
          textTransition(skillsTitle, 80);
          observerTitle.unobserve(skillsTitle)
        }
    }, {threshold:0.1})
    observerTitle.observe(skillsTitle)
  }, [])
  return (
    <>
    <section id="skillsId" className="skills">
        <h2 id="skills" className="skills__title">
          <span>S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>s</span>
        </h2>
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
