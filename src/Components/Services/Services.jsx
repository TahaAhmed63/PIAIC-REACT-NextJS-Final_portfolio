import React, { useState ,useEffect,useMemo} from 'react'
import {FaStream} from 'react-icons/fa'
import {FaBezierCurve} from 'react-icons/fa'
import {RiCodeSSlashFill} from 'react-icons/ri'
import {IoIosGitNetwork} from 'react-icons/io'
export const Services = () => {
    const [servicesData,setServicesData]=useState([])
    useEffect(() => {
        async function fetchServicesData() {
          const response = await fetch('https://cdn.contentful.com/spaces/kaycm8ritkli/environments/master/entries/3YVq74KpMgaCIiEDXHzf8v?access_token=KtDKcjJxhcgdzJuzEvf21tWpCd-BLjijjzDu9J8cmro');
          const data = await response.json();
          setServicesData(data.fields.services);
        }
    
        fetchServicesData();
      }, []);
const services=useMemo(()=>{
return servicesData
}, [servicesData])
  return (
    <>
<section className="services-area page-section" id="services">
    <div className="custum-container">
        <div className="service-content content-width">
            <div className="section-header">
               <h4 className="subtitle">
                <i><FaStream/></i>
                Services
               </h4>
               <h1>My <span>Specializations</span></h1>
            </div>
            <div className="services-items">
            {services.map((service, index) => (
                <div className="service-item" key={index}>
                  <i>{service.icon === '<FaBezierCurve />' && <FaBezierCurve /> || service.icon === '<RiCodeSSlashFill />' && <RiCodeSSlashFill /> || service.icon === '<IoIosGitNetwork />' && <IoIosGitNetwork />   }</i>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <span className="projects">{service.projectCount} Projects</span>
                </div>
              ))}
           
            </div>
        </div>
    </div>
    
    </section>    
    </>
  )
}
