import React from 'react';
import PricingUi from './PricingUi';
import PricingUi1 from './Pricingui1';
import PricingUi2 from './PricingUi2';
import './Pricing.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';


const PricingComponent = props => {
	return (
		<div className="Pricing-main-content">
			<Container fluid>
				<Row className="text-center">
					<div className="pricing-main-heading">
						<h1 className="main-heading">Web development</h1>
					</div>
					<PricingUi2
						mainHeading="Our plans and pricing"
						mainDiscription="The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy."
					/>
				</Row>
				<Row className="text-center">
					<div className="pricing-main-heading">
						<h1 className="main-heading">Graphics Design</h1>
					</div>
					<PricingUi1
						cardBoxHeading="Our plans and pricing"
						cardBoxPragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi."
				  />
				</Row>
				<Row className="text-center">
					<div className="pricing-main-heading">
						<h1 className="main-heading">Software Development</h1>
					</div>
					<PricingUi
						mainHeading="Our plans and pricing"
						mainDiscription="Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program."
					/>
				</Row>
			</Container>
		</div>
	)
}


export default PricingComponent;
