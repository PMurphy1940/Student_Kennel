import React from 'react'
import { Link } from "react-router-dom";

const LocationCard = (props) => {
    
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./${props.store.image}`)} alt="My Dog" />
          </picture>
          <h3>
             <span className="card-petname">Visit us at our {props.store.name} location</span>
          </h3>
          <p>{props.store.address}</p>
          <Link to={`/locations/${props.store.id}`}>
            <button>Details</button>
          </Link>
          <button type="button" onClick={() => props.deleteLocation(props.store.id)}>Shutter Location</button>
        </div>
      </div>
    );
  };

export default LocationCard