import React from 'react'
import {RxPerson} from 'react-icons/rx'
export const About = () => {
  return (
    <>
    <section className="about page-section" id='About'>
        <div className="custum-container">
            <div className="about-content content-width">
                <div className="section-header">
                 <h4 className="subtitle">
                    <i><RxPerson/></i>
                    About
                    </h4>   
                    <h1 className="scroll-animation">
                      Every great design begin with <br /> an even <span>better story</span>
                    </h1>
                </div>
                <p>
I'm a passionate web designer and developer with a year of experience. I create stunning designs that engage users and bring ideas to life. My expertise in Next.js and React.js enables me to craft dynamic web applications that stand out in the crowded digital space. I believe that good design is not just about aesthetics, but also about creating an exceptional user experience. Let's work together to create something amazing!</p>
            </div>
        </div>
    </section>
    
    </>
  )
}
