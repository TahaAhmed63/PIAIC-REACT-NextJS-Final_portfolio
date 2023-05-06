import React, { useState } from 'react';
import { Form, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import {TbCurrencyDollar} from 'react-icons/tb'
import {VscCloudUpload} from 'react-icons/vsc'

 const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    budget: '',
    message: '',
    attachment: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      attachment: event.target.files[0],
    }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
   <>
   <section className="contact-area page-section" id='contact'>
    <div className="custum-container">
        <div className="contact-content content-width">
            <div className="section-header">
                <h4 className="subtitle">
<i><TbCurrencyDollar/></i>
CONTACT
                </h4>
                <h1>Let'S Work <span>Togather!</span></h1>
            </div>
            <h3>ataha6381@gmail.com</h3>
            <Form>
      <Row>
        <Col md={6}>
          <Form.Group>
            <InputGroup>
              <Form.Label htmlFor="full-name">Full Name <sup>*</sup></Form.Label>
              <FormControl className='fields' type="text" name="full-name" id="full-name" placeholder="Your Full Name" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <InputGroup>
              <Form.Label htmlFor="email">Email <sup>*</sup></Form.Label>
              <FormControl className='fields' type="email" name="email" id="email" placeholder="Your email adress" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <InputGroup>
              <Form.Label htmlFor="phone-number">Phone <span>(optional)</span></Form.Label>
              <FormControl className='fields' type="text" name="phone-number" id="phone-number" placeholder="Your phone number" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <InputGroup>
              <Form.Label htmlFor="subject">Subject <sup>*</sup></Form.Label>
              <Form.Select className='fields' name="subject" id="subject">
                <option value="">Select a subject</option>
                <option value="subject1">Subject 1</option>
                <option value="subject2">Subject 2</option>
                <option value="subject3">Subject 3</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group>
            <InputGroup>
              <Form.Label htmlFor="budget">Your Budget <span>(optional)</span></Form.Label>
              <FormControl className='fields' type="number" name="budget" id="budget" placeholder="A range budget for your project" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group>
            <InputGroup>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control className='fields' as="textarea" name="message" id="message" placeholder="Write your message here ..." />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group>
            <InputGroup className="upload-attachment">
              <div>
                <Form.Label htmlFor="upload-attachment">
                  <i className="las la-cloud-upload-alt"><VscCloudUpload/></i> Add an attachment
                  <FormControl className='fields' type="file" name="file" id="upload-attachment" />
                </Form.Label>
              </div>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group>
            <InputGroup className="submit-btn-wrap">
            <button type="submit" name="submit" id="submit-form" class="theme-btn btn btn-primary">Send Message</button>            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
    </Form>
        </div>

  
    </div>
   </section>
   
   
   </>
  )
}
export default Contact