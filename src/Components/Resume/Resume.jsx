import {React,useState,useEffect} from 'react'
import {RiBriefcaseLine} from 'react-icons/ri'

export const Resume = () => {
    const [resumeData, setResumeData] = useState([]);
    useEffect(() => {
        async function fetchResumeData() {
          const response = await fetch('https://cdn.contentful.com/spaces/kaycm8ritkli/environments/master/entries/3kBoRt8gvZzw8l0dYdb9t5?access_token=KtDKcjJxhcgdzJuzEvf21tWpCd-BLjijjzDu9J8cmro');
          const data = await response.json();
          setResumeData(data.fields.dataresume.resumeData);
        }
    
        fetchResumeData();
      }, []);
  return (
   <>
   <section className="resume-area page-section" id='Resume'>
    <div className="custum-container">
        <div className="resume-content content-width">
            <div className="section-header">
                <h4 className="subtitle">
                    <i><RiBriefcaseLine/></i>Resume
                </h4>
                <h1 className="scroll-animation">
                    Education & <span> Expreince</span>
                </h1>
            </div>
            <div className="resume-timeline">
      {resumeData.map((item, index) => (
        <div className="item scroll-animation" data-animation="fade_from_right" style={{ opacity: 1, transform: 'translate(0px, 0px)' }} key={index}>
          <span className="date">{item.date}</span>
          <h2>{item.title}</h2>
          <p>{item.company}</p>
        </div>
      ))}
    </div>
  
        </div>
    </div>
   </section>
   
   </>
  )
}
