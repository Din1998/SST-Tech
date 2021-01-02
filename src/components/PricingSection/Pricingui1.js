import React from 'react';
import './PricingUi1.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Carousel,Card} from 'react-bootstrap';


const PricingUi = props => {
	return (
		<div className="pricing1-ui-main-container">
			<Container fluid>
				<Row>
					<Col md={6} className="pricing-card-section">
						<div className="pricing-box-heading">
							<h2>{props.cardBoxHeading}</h2>
						</div>
						<div className="pricing-box-discription">
							<p>{props.cardBoxPragraph}</p>
						</div>
						<Row>
							<Col md={4}>
								<Card border="primary" className="pricing-card card-1">
									<Card.Header>Basic</Card.Header>
									<Card.Body>
										<Card.Title>Start From </Card.Title>
										<Card.Text>
											<div className="price-of-number">
												<h1>70,000 TK</h1>
											</div>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4}>
								<Card border="primary" className="pricing-card card-2">
									<Card.Header>Premium</Card.Header>
									<Card.Body>
										<Card.Title>Start from </Card.Title>
										<Card.Text>
											<div className="price-of-number">
												<h1>70,000 TK</h1>
											</div>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4}>
								<Card border="primary" className="pricing-card card-3">
									<Card.Header>Platinam</Card.Header>
									<Card.Body>
										<Card.Title>Start From </Card.Title>
										<Card.Text>
											<div className="price-of-number">
													<h1>70,000 TK</h1>
											</div>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Col>
					<Col md={6}>
						<Carousel className="pricing-carousol-box">
							<Carousel.Item>
								<img
									className="d-block w-100 pricing-carousol-img-box"
									src="https://scholarlyoa.com/wp-content/uploads/2020/05/Software-Development-Project.png"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 pricing-carousol-img-box"
									src="https://scholarlyoa.com/wp-content/uploads/2020/05/Software-Development-Project.png"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 pricing-carousol-img-box"
									src="https://scholarlyoa.com/wp-content/uploads/2020/05/Software-Development-Project.png"
									alt=""
								/>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</div>
	)
}


export default PricingUi;
