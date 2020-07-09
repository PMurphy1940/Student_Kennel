import React from 'react'

const LocationCard = (props) => {
    
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${props.store.image}`)} alt="My Dog" />
          </picture>
          <h3>
             <span className="card-petname">Visit us at our {props.store.name} location</span>
          </h3>
          <p>{props.store.address}</p>
        </div>
      </div>
    );
  };

export default LocationCard