import React from 'react';
import ServiceUi from './ServiceUi';
import './Service.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

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
            <ServiceUi />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Service;