import React, { useState, useEffect } from 'react';
import APIManager from '../APIManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "", image: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(props.locationId, "locations")
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          image: location.image
         
        });
   
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        { (location.image !== "") ?  
        <picture>
            <img src={require(`./${location.image}`)} alt={location.name} />
        </picture> : null
        }
        <h3>
            <span className="card-petname">Visit us at our {location.name} location</span>
        </h3>
          <p>{location.address}</p>
      </div>
    </div>
  );
}

export default LocationDetail;