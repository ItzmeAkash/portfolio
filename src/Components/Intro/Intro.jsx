import React from 'react'
import './intro.css'
import bg from '../../assets/image1.png'
import {Link} from 'react-scroll'
import btn from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className='introName'>Akash Ps</span><br />Full Stack Developer</span>
            <p className="introPara">I am a skiled Full Stack web developer and Ai Engineer </p>
            <Link><button className='btn'><img src={btn} alt="" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro
