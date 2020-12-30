import React from 'react';
import './TeamSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';

function TeamSection() {
  return(
    <div className="main-container">
      <div className="team-crd">
        <div className="head-container">
        <h3 className="team-heading">the team</h3>
        <div className="bulb-icon">
        <i className="fa fa-users fa-2x" aria-hidden="true" />
        </div>
        <p className="team-dis">check out some of our main core features.<br />relevence is a very powerhul theme packed with tones of shortcodes</p>
        </div>
        <div className="card-container">
          <Container fluid>
          <Row className="justify-content-md-center">
              <Col sm={3}>
                <Card>
                  <Card.Img variant="top" className="crd-img" src="https://preview.ab-themes.com/revelance/wp-content/uploads/revslider/parallax_slider/slide.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Img variant="top" className="crd-img" src="https://preview.ab-themes.com/revelance/wp-content/uploads/revslider/parallax_slider/Untitled-1-e1399994290886.jpg" />
                  <Card.Body>
                    <Card.Title>Card </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                  <Card.Img variant="top" className="crd-img" src="https://preview.ab-themes.com/revelance/wp-content/uploads/revslider/parallax_slider/taxi.jpg" />
                  <Card.Body>
                    <Card.Title>Card </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col sm={3}>
                <Card>
                  <Card.Img variant="top" className="crd-img" src="https://preview.ab-themes.com/revelance/wp-content/uploads/revslider/parallax_slider/Untitled-1-e1399994290886.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={3}>
                <Card>
                    <Card.Img variant="top" className="crd-img" src="https://preview.ab-themes.com/revelance/wp-content/uploads/revslider/parallax_slider/taxi.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
              <Col sm={3}>
                <Card>
                    <Card.Img variant="top" className="crd-img" src="https://preview.ab-themes.com/revelance/wp-content/uploads/revslider/parallax_slider/slide.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* bg-parralax section */}
      <div className="prlx-sectoin">
          <div className="bg-prlx2">
            <div className="prlx-heading">
              <h1>Some real fact</h1>
              <div className="bulb-icon-q">
              <i className="fa fa-quote-right fa-2x" aria-hidden="true" />
              </div>
              {/* Animation Number Counter section */}
              <div className="ani-counter">
                <Container>
                  <Row className="text-center">
                    <Col sm={3}>
                      <div className="ani-text">
                        <Spring
                          from={{ number: 1 }}
                          to={{ number: 193 }}
                          config={{duration: 10000 }}
                          >
                          {props => <div className="number">{props.number.toFixed()}</div>}
                        </Spring>
                          <h3>Project</h3>
                          <div className="icon-box">
                          <img className="icon2 icon2-img" src="img/sst17.png" alt=""/>
                          </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="ani-text">
                        <Spring
                          from={{ number: 1 }}
                          to={{ number: 1588 }}
                          config={{ duration: 10000 }}
                          >
                          {props => <div className="number">{props.number.toFixed()}</div>}
                        </Spring>
                        <h3>Facebook Like</h3>
                        <div className="icon-box">
                        <img className="icon2 icon2-img" src="img/sst19.png" alt=""/>
                        </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="ani-text">
                        <Spring
                          from={{ number: 1 }}
                          to={{ number: 690 }}
                          config={{ duration: 10000 }}
                          >
                          {props => <div className="number">{props.number.toFixed()}</div>}
                        </Spring>
                        <h3>Awards Won</h3>
                        <div className="icon-box">
                        <img className="icon2" src="img/sst20.png" alt=""/>
                        </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="ani-text">
                        <Spring
                          from={{ number: 1 }}
                          to={{ number: 3577 }}
                          config={{ duration: 10000 }}
                          >
                          {props => <div className="number">{props.number.toFixed()}</div>}
                        </Spring>
                        <h3>Cup Of Coffe</h3>
                        <div className="icon-box">
                          <img className="icon2" src="img/sst21.png" alt=""/>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};


export default TeamSection;
