import React from 'react'
import './Skills.css'
import UIDesigin from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const skills = () => {
  return (
    <section id = 'skills'>
      <span className="skillsTitle">What I Do</span>
      <span className="skillDesc">
      I specialize in full-stack Python web development, adept at creating dynamic and user-friendly websites utilizing HTML, CSS, and JavaScript, with proficiency in ReactJS for interactive front-end experiences. My back-end expertise lies in Django, enabling seamless integration and robust server-side functionalities. Additionally, I excel in building chatbots and websites, leveraging AI applications using LLM models like ChatGPT and Gemini. With the ability to develop REST APIs, I ensure efficient communication between front-end and back-end systems. Moreover, I possess a knack for custom machine learning and deep learning model development, enabling solutions tailored to various use cases. Overall, my skill set encompasses the creation of intuitive websites, coupled with the implementation of advanced AI capabilities to tackle diverse tasks effectively." </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesigin} alt="UIDesgin" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Ui/Ux Design</h2>
            <p>This is Demo</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="UIDesgin" className="skillBarImg" />
          <div className="skillBarText">
            <h2>WebDesign</h2>
            <p>This is Demo</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="UIDesgin" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App</h2>
            <p>This is demo</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills
