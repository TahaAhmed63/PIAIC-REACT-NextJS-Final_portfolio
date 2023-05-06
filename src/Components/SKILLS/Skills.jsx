import React,{useState,useEffect,useMemo} from 'react'
import {FaShapes} from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'

export const Skills = () => {
    const [SkillsData,setSkillsData]=useState([])
    useEffect(() => {
        async function fetchSkillsData() {
          const response = await fetch('https://cdn.contentful.com/spaces/kaycm8ritkli/environments/master/entries/4eozkTnnytG7no6H6cXeZB?access_token=KtDKcjJxhcgdzJuzEvf21tWpCd-BLjijjzDu9J8cmro');
          const data = await response.json();
          setSkillsData(data.fields.skills);
        }
    
        fetchSkillsData();
      }, []);
const  myskillData=useMemo(()=>{
return SkillsData
}, [SkillsData])

  return (
 <>
 <section className="skills-area page-section" id='skills' >
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

        {myskillData.map((skill, index) => (
              <Col key={index} xs={6} md={3}>
                <div className="skill">
                  <div className="skill-inner">
                    <img src={skill.image} />
                    <h1 className="parcent">{skill.percentage}%</h1>
                  </div>
                  <p className="name">{skill.name}</p>
                </div>
              </Col>
            ))}
        </Row>    
        </div>
    </div>
 </section>
 
 
 </>
  )
}
