import React from 'react';
import ServiceUi from './ServiceUi';
import './Service.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

import img1 from '../ImgAssest/test9.png';
import img2 from '../ImgAssest/test10.png';
import img3 from '../ImgAssest/test11.png';
import img5 from '../ImgAssest/test13.png';
import img6 from '../ImgAssest/test14.png';
import img7 from '../ImgAssest/test15.png';

const Service = props => {
	return (
    <div className="service-main-container">
      <div className="service-heading-section">
        <div className="service-heading-container">
          <h3 className="service-heading">our sevice</h3>
          <div className="bulb-icon">
          <i className="fa fa-cogs fa-2x" aria-hidden="true" />
          </div>
          <p className="service-dis">check out some of our main core features.<br/>revelance is a very poweerful and daynamic web app with tons of shortcodes</p>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <ServiceUi 
              img={img2}
              title="web development" 
              discription="The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy."
            />
          </Col>
          <Col>
            <ServiceUi 
              img={img1}
              title="analystics" 
              discription="Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program."
            />
          </Col>
          <Col>
            <ServiceUi 
              img={img7}
              title="database structure" 
              discription="The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy."
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ServiceUi 
              img={img5}
              title="advertising"
              discription="The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy."
            />
          </Col>
          <Col>
            <ServiceUi 
              img={img3}
              title="mobile responsive" 
              discription="Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program."
          />
          </Col>
          <Col>
            <ServiceUi 
              img={img6}
              title="graphic design" 
              discription="Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program."
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Service;