import React from 'react';
import './AboutSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';


function AboutSection () {
  return (
    <div className="container_1">
      <section className="about-section">
        <div className="header-container">
            <h3 className="heading">we are revelence</h3>
            <div className="bulb-icon">
              <i className="far fa-lightbulb fa-2x " />
            </div>
            <p className="s2-dis">relevent is a one page theme with tons of greate shortcodes,<br />unlimited color schemes and 100% fully responsive desing</p>
            <img src="https://preview.ab-themes.com/revelance/wp-content/uploads/2015/07/wearerevelance.jpg" alt="#" className="bg-about" />
        </div>
      </section>
      {/*features-icon*/}
      <section className="core-fetrs">
        <div className="head-container">
          <h3 className="core-heading">core features</h3>
          <div className="bulb-icon">
            <i className="far fa-lightbulb fa-2x" />
          </div>
          <p className="s3-dis">check out some of our main core features.<br />relevence is a very powerhul theme packed with tones of shortcodes</p>
          <div className="icon-container">
          <Container>
            <Row className="text-center">
              <Col sm={4}>
                <div className="icon-box1">
                  <img className="icon1" src="img/sst1.png" alt="" />
                </div>
                <h4 className="core-icon-heading">best bractices</h4>
                <p className="feature-prgph">We make an software with best practice<br/>and we ensure good quality products.</p>
              </Col>
              <Col sm={4}>
                <div className="icon-box1">
                  <img className="icon1" src="img/sst4.png" alt="" />
                </div>
                <h4 className="core-icon-heading">unlimited color</h4>
                <p className="feature-prgph">Where ignorance lurks, so too do the frontiers<br/> of discovery and imagination.</p>
              </Col>
              <Col sm={4}>
                <div className="icon-box1">
                  <img className="icon1" src="img/sst13.png" alt="" />
                </div>
                <h4 className="core-icon-heading">unique design</h4>
                <p className="feature-prgph">The dreams of yesterday are the hopes of<br/>today and the reality of tomorrow</p>
              </Col>
            </Row>
            <Row className="text-center">
            <Col sm={4}>
                <div className="icon-box1">
                  <img className="icon1" src="img/sst14.png" alt="" />
                </div>
                <h4 className="core-icon-heading">full dynamic</h4>
                <p className="feature-prgph">Where ignorance lurks, so too do the<br/> frontiers of discovery and imagination.</p>
              </Col>
              <Col sm={4}>
                <div className="icon-box1">
                  <img className="icon1" src="img/sst16.png" alt="" />
                </div>
                <h4 className="core-icon-heading">hi dpi images</h4>
                <p className="feature-prgph">The dreams of yesterday are the<br/> hopes of today and the reality of tomorrow.</p>
              </Col>
              <Col sm={4}>
                <div className="icon-box1">
                 <img className="icon1" src="img/sst5.png" alt="" />
                </div>
                <h4 className="core-icon-heading">seo optimised</h4>
                <p className="feature-prgph">Once you're ready to start walking that SEO<br/> walk, it's time to apply those SEO techniques to a site</p>
              </Col>
            </Row>
          </Container>
          </div>
        </div>
		  </section>
   {/*bg-parallax*/}
      <section className="ins-quotes">
        <div className="bg-prlx">
          <div className="q-heading">
            <h1>inspiaration quotes</h1>
            <div className="bulb-icon-q">
            <i className="fa fa-quote-right fa-2x" aria-hidden="true" />
            </div>
            <p className="q-dis">“ design is not just what it looks like and how it feels.<br /> design is how it works.”</p>
            <p className="q-stv">steve jobs</p>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default AboutSection;