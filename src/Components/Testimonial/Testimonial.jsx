import React, { useState, useEffect, useRef } from 'react';
import { CgComment } from 'react-icons/cg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col } from 'react-bootstrap';

export const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef(null);

  useEffect(() => {
    async function fetchTestimonialData() {
      const response = await fetch(
        'https://cdn.contentful.com/spaces/kaycm8ritkli/environments/master/entries/4XQ2g7Rv1RemLSPJYqkYdC?access_token=KtDKcjJxhcgdzJuzEvf21tWpCd-BLjijjzDu9J8cmro'
      );
      const data = await response.json();
      console.log(data);
      setTestimonialData(data.fields.testimonial);
    }
    fetchTestimonialData();
  }, []);

  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };

  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  console.log(testimonialData);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <>
      <section className="testimonial-area page-section" id='testimonial'>
        <div className="custum-container">
          <div className="testimonial-content content-width">
            <div className="section-header">
              <h4 className="subtitle">
                <i>
                  <CgComment />
                </i>
                Testimonial
              </h4>
              <h1>
                Trusted by <span>Senior mentors & Developer</span>{' '}
              </h1>
            </div>
            <div className="testimonial-slider-wrap">
              <Slider ref={sliderRef} {...settings}>
                {testimonialData.map((testimonial, index) => (
                  <div key={index}>
                    <div className="testimonial-item">
                      <div className="testimonial-item-inner">
                        <div className="author">
                          <img src="" />
                          <div className="right">
                            <h3>{testimonial.name}</h3>
                            <p className="designation">
                              {testimonial.designation}{' '}
                              <span>{testimonial.authorOrganization}</span>{' '}
                            </p>
                          </div>
                        </div>
                        <p>"{testimonial.testimonial}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="testimonial-slider-buttons">
                <button onClick={slidePrev} className="prev-arrow">
                  <i className="fas fa-chevron-left">
                    <FaAngleLeft />
                  </i>
                </button>
                <p>
                  {currentSlide + 1}/{testimonialData.length}
                </p>
                <button onClick={slideNext} className="next-arrow">
                  <i className="fas fa-chevron-right">
                    <FaAngleRight />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
