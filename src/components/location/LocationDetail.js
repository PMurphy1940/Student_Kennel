import React, { useState, useEffect } from 'react';
import APIManager from '../APIManager';
import './LocationDetail.css'
import { firstLetterCase } from "../../modules/helpers"
import EmployeeList from "../employee/EmployeeList"

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "", image: "", id: "" });
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(props.locationId, "locations", "?_embed=employees")
      .then(location => {
        setLocation({
          ...location
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

  const employeesHere = <EmployeeList sourceCall = "locationDetail" locationId ={location.id} {...props} />

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
      <div>
        {employeesHere}
      </div>
      {props.hasUser &&
      <div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Shutter Location
      </button>
      </div>
      }
      </div>
        }
    </div>
  );
}

export default LocationDetail;
