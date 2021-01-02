import React from 'react';
import './Contact.css';
import ContactUi from './ContactUi';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col} from 'react-bootstrap';


const Contacts = props => {
	return (
		<div className="Contact-main-container">
			<ContactUi />
		</div>
	)
}


export default Contacts;