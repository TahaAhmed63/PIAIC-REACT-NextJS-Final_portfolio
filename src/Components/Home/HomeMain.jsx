import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import myimg from "./../../assets/round-text.png"
import Image from 'next/image'
import {AiOutlineArrowDown} from 'react-icons/ai'
export const HomeMain = () => {
  const [Expreinceyear,setExpreinceYear]=useState(0)
  const [completeProject,setCompleteProject]=useState(0)


  return (
<>
<section className="hero-section" id='home'>
  <div className="custom-container">
<div className="hero-content content-width">
  <div className="section-header">
    <h4 className="subtitle">
      <i><AiOutlineHome/></i>
      Introduce
    </h4>
    <h1>Say Hi From <span>Taha, </span>Web Designer And Developer</h1>
  </div>
  <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
  <a href="" className='go-to-project-btn'>
<Image src={myimg}/>
<i><AiOutlineArrowDown/></i>
  </a>
  <div className="facts d-flex">
    <div className="left-scroll">
      <h1>1+</h1>
      <p>Years of <br /> Expreince</p>
    </div>
    <div className="left-scroll">
      <h1>5+</h1>
      <p>projects completed <br /> by me </p>
      
     </div>
  </div>
</div>
  </div>
</section>
</>
  )
}
