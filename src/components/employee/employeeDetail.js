import React, { useState, useEffect } from 'react';
import APIManager from '../APIManager';
import './employeeDetail.css'
import { firstLetterCase } from "../../modules/helpers"

const EmployeeDetail = props => {
  const [employee, setLocation] = useState({ firstName: "", breed: "", image: "" });
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(props.employeeId, "employees", "")
      .then(employee => {
        setLocation({
          firstName: employee.firstName,
          breed: employee.address,
          image: employee.image
         
        });
        setIsLoading(false);
      });
  }, [props.employeeId]);

  const handleDelete = () => {
      setIsLoading(true);
      APIManager.delete(props.employeeId, "employees").then(() =>
      props.history.push("/employees"))
  }

  return (
    <div className="card">
      <div className="card-content">
        { (employee.image !== "") ?  
        <picture>
            <img src={require(`./${employee.image}`)} alt={employee.firstName} />
        </picture> : null
        }
        <h3>
            <span className="card-petname"> {firstLetterCase(employee.firstName)}</span>
        </h3>
          <p>{employee.address}</p>
      </div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Fire Employee
      </button>
    </div>
  );
}

export default EmployeeDetail;
