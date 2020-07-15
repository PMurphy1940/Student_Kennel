import React from 'react'
import { Link } from "react-router-dom";

const EmployeeCard = props => {
    
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./${props.employee.image}`)} alt={props.employee.firstName} />
          </picture>
          <h3>
            Name: <span className="card-petname">{props.employee.firstName} {props.employee.lastName}</span>
          </h3>
          <Link to={`/employees/${props.employee.id}`}>
            <button>Details</button>
          </Link>
          <button type="button" onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>Edit</button>
          <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Terminate</button>
        </div>
      </div>
    );
  };

export default EmployeeCard