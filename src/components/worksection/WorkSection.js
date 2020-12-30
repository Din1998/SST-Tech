import React from 'react';
import WorkGallery from './WorkGallery';
import './Work.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

import img1 from '../ImgAssest/test1.jpg';
import img2 from '../ImgAssest/test2.jpg';
import img3 from '../ImgAssest/test3.jpg';
import img4 from '../ImgAssest/test4.jpg';
import img5 from '../ImgAssest/test5.jpg';
import img6 from '../ImgAssest/test6.jpg';
import img7 from '../ImgAssest/test7.jpg';
import img8 from '../ImgAssest/test8.jpg';

const Work = props => {
	return (
		<div className="work-main-container">
			<div className="work-heading-container">
        <h3 className="work-heading">latest work</h3>
        <div className="bulb-icon">
        <i className="fa fa-camera-retro fa-2x" aria-hidden="true" />
        </div>
        <p className="work-dis">we create quality products that enrich the lives of others.<br/>have a quick look at some of our most recent work.</p>
      </div>
      <div className="work-gallery-container">
      <Container fluid>
          <Row className="justify-content-md-center">
            <Col sm={3}>
              <WorkGallery imgsrc={img1} links={"https://www.google.com"} />
            </Col>
            <Col sm={3}>
              <WorkGallery imgsrc={img2} links={"https://www.facebook.com"}/>
            </Col>
            <Col sm={3}>
              <WorkGallery imgsrc={img3} links={"https://www.twitter.com"}/>
            </Col>
            <Col sm={3}>
              <WorkGallery imgsrc={img4} links={"https://www.facebook.com"}/>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm={3}>
              <WorkGallery imgsrc={img5} links={"https://www.youtube.com"}/>
            </Col>
            <Col sm={3}>
              <WorkGallery imgsrc={img6} links={"https://www.facebook.com"}/>
            </Col>
            <Col sm={3}>
              <WorkGallery imgsrc={img7} links={"https://www.twitter.com"}/>
            </Col>
            <Col sm={3}>
              <WorkGallery imgsrc={img8} links={"https://www.google.com"}/>
            </Col>
          </Row>
      </Container>
      </div>
		</div>
	);
}

export default Work;