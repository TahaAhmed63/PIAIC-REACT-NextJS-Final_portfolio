import React,{useState,useEffect} from 'react'
import {FaGripVertical} from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap';

export const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    useEffect(() => {
        async function fetchPortfolioData() {
          const response = await fetch('  https://cdn.contentful.com/spaces/kaycm8ritkli/environments/master/entries/1pxeDa1TQfM9U5X1p41RC9?access_token=KtDKcjJxhcgdzJuzEvf21tWpCd-BLjijjzDu9J8cmro');
          const data = await response.json();
          setPortfolioItems(data.fields.projects.portfolioItems);
        }
    
        fetchPortfolioData();
      }, []);
  return (
    
   <>
    <section className="portfolio-area">
        <div className="custum-container">
            <div className="portfolio-content content-width">
                <div className="section-header">
                    <h4 className="subtitle">
                        <i><FaGripVertical/></i>
                        Portfolio
                    </h4>
                    <h1>
                        Featured <span>Projects</span>
                    </h1>
                </div>
                <Row className='row portfolio-items'>
  {portfolioItems.map((item) => (
    <Col md={item.type === 'full' ? 12 : 6} xs={12} key={item.id}>
      <div className='portfolio-item portfolio-full'>
        <div className='portfolio-item-inner'>
        <div class="overlay">  
    
        
            <img className='img-fluid' src={item.imageSrc} alt={item.title} />
           
            </div>
     
     
          <ul className='portfolio-categories'>
            {item.categories.map((category) => (
              <li key={category}>
                <a href=''>{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <h2>
        <a href={item.link} data-lightbox='example-1'>
        {item.title}
        </a>
        </h2>
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
