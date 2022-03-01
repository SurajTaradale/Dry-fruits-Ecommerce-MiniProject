import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import '../style/About.css';
import Logo from '../Assets/logo.jpg'
function About() {
  return (
    <>
      <div className='About'>
        <Row sm={12} style={{padding:'0px',margin:'0px'}}>
          <Col sm={4}>
            <Image src={Logo} fluid />
          </Col>
          <Col sm={8} className='allcenter'>
            <h1 className='text-center text'>Swant Dry Fruits</h1>
            <li className='aboutcontain'>Provide healthy mix dry fruits specially for fitness streaks</li>
            <li className='aboutcontain'>Good quality dry fruits</li>
            <li className='aboutcontain'>Free Home delivery</li>
          </Col>
          
        </Row>
      </div>
    </>
  );
}
export default About;