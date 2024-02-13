import React from 'react'
import './intro.css'
import bg from '../../../assets/image1.png'
import {Link} from 'react-scroll'
import btn from '../../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className='introName'>Akash Ps</span><br />Website Designer</span>
            <p className="introPara">I am a skiled web designer with experence in creating web application</p>
            <Link><button className='btn'><img src={btn} alt="" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro
