import React, { useState, useEffect } from 'react';
import APIManager from '../APIManager';
import './LocationDetail.css'
import { firstLetterCase } from "../../modules/helpers"

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "", image: "", id: "" });
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(props.locationId, "locations", "")
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          image: location.image,
          id: location.id
        });
        setIsLoading(false);
        if (location.id === undefined  ) {
            props.history.push("/404")
        }
      });
  }, [props]);

  const handleDelete = () => {
      setIsLoading(true);
      APIManager.delete(props.locationId, "locations").then(() =>
      props.history.push("/locations"))
  }

  return (
    <div className="card">
        {(location.id !== undefined) &&
    <div>
      <div className="card-content">
        { (location.image !== "") ?  
        <picture>
            <img src={require(`./${location.image}`)} alt={location.name} />
        </picture> : null
        }
        <h3>
            <span className="card-petname">Visit us at our {firstLetterCase(location.name)} location</span>
        </h3>
          <p>{location.address}</p>
      </div>
      {props.hasUser &&
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Shutter Location
      </button>}
      </div>
        }
    </div>
  );
}

export default LocationDetail;
