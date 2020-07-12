import React from 'react'
import { Link } from "react-router-dom";

const EmployeeCard = props => {
    
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./${props.worker.image}`)} alt={props.worker.firstName} />
          </picture>
          <h3>
            Name: <span className="card-petname">{props.worker.firstName} {props.worker.lastName}</span>
          </h3>
          <p>Breed: {props.worker.breed}</p>
          <Link to={`/employees/${props.worker.id}`}>
            <button>Details</button>
          </Link>
          <button type="button" onClick={() => props.deleteEmployee(props.worker.id)}>Terminate</button>
        </div>
      </div>
    );
  };

export default EmployeeCard