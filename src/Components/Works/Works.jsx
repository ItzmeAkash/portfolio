import React from 'react'
import './Work.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'


const Works = () => {
  return (
<section id='works'>
    <h2 className="worksTitle">My Portfolio </h2>
        
        <span className="workDesc">
        My dedication to precision and meticulous attention to detail ensures that my work is always impeccable, down to the smallest pixel. I am enthusiastic about leveraging my skills and experience to help businesses achieve their goals and establish a strong online presence. With a focus on excellence, I am committed to delivering exceptional results and making a lasting impact in the digital landscape 
        </span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">  See More</button>
    

</section>
  )
}

export default Works
