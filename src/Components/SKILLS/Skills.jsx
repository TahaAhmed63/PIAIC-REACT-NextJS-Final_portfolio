import React,{useState,useEffect} from 'react'
import {FaShapes} from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'
import htmlImg from './../../assets/html3.png';
import cssImg from './../../assets/cart (1).png';
import jsImg from './../../assets/java-script.png';
import reactImg from './../../assets/react.png';
import reduxImg from './../../assets/redux.png';
import nodeImg from './../../assets/node.png';
import dockerImg from './../../assets/docker.png';
import kubernetesImg from './../../assets/kubernets (1).png';
import Image from 'next/image'
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

        {SkillsData.map((skill, index) => (
              <Col key={index} xs={6} md={3}>
                <div className="skill">
                  <div className="skill-inner">
                    <Image src={skill.image=== htmlImg && htmlImg ||skill.image=== cssImg && cssImg || skill.image ===jsImg && jsImg || skill.image === reactImg && reactImg || skill.image === reduxImg && reduxImg || skill.image === nodeImg && nodeImg || skill.image === dockerImg && dockerImg || skill.image === kubernetesImg && kubernetesImg } />
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
