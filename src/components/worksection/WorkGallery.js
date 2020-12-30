import React from 'react';
import './WorkGallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';



const WorkGallery = props => {
  return (
    <div className="work-card-img-gallery">
      <Card className="work-g-card h-100 w-100">
        <div className="img-overflow">
          <a href={props.links} target="blank">
            <img
              className="work-g-img"
              src={props.imgsrc}
              alt=""
            />
          </a>
        </div>
      </Card>
    </div>
  )
};


export default WorkGallery;