import React from 'react';
import './Serviceui.css';


const ServiceUi = props => {
	return (
    <div>
      <div className="service-icon-box1">
        <img className="service-icon1" 
          src={props.img} 
          alt="" 
        />
      </div>
      <h4 className="service-core-icon-heading">{props.title}</h4>
      <p className="service-feature-prgph">{props.discription}</p>
    </div>
  )
}

export default ServiceUi;    