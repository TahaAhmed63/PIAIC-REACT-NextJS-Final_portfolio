import React from 'react'
import {FaShapes} from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'
export const Skills = () => {
  return (
 <>
 <section className="skills-area page-section">
    <div className="custum-container">
        <div className="skill-content content-width">
       <div className="section-header">
        <h4 className="subtitle">
   <i><FaShapes/></i>
   MY SKILLS
        </h4>
        <h1>My <span>Advantages</span> </h1>
        </div> 
        <Row className='text-center'>

            <Col xs={6} md={3}>
            
            </Col>
            
        </Row>    
        </div>
    </div>
 </section>
 
 
 </>
  )
}
