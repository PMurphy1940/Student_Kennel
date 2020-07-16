import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import APIManager from '../APIManager';
import './employeeDetail.css'
import { firstLetterCase } from "../../modules/helpers"
import AnimalList from "../animal/AnimalList"
import LocationList from "../location/LocationList"

const EmployeeDetail = props => {
  const [employee, setLocation] = useState({ firstName: "", lastName: "", image: "", id: "" });
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(props.employeeId, "employees", "?_embed=animals&_expand=location")
      .then(employee => {
        setLocation({
          ...employee

         
        });
        setIsLoading(false);
        if (employee.id === undefined  ) {
            props.history.push("/404")
        }
      });
  }, [props]);
  const thisEmployeesCharges = <AnimalList sourceCall = "employeeDetail" employeeId ={employee.id} {...props} />

  const handleDelete = () => {
      setIsLoading(true);
      APIManager.delete(props.employeeId, "employees").then(() =>
      props.history.push("/employees"))
  }
console.log(employee)
  return (
    <div className="card">
        {(employee.id !== undefined) &&
    <div>
      <div className="card-content">
        { (employee.image !== "") ?  
        <picture>
            <img src={require(`./${employee.image}`)} alt={employee.firstName} />
        </picture> : null
        }
        <h3>
            <span className="card-petname">{firstLetterCase(employee.firstName)} {firstLetterCase(employee.lastName)}</span>
        </h3>
        {employee.id !== "" &&
        <Link to={`/locations/${employee.locationId}`}>
            {employee.location.name} location
        </Link>}
      </div>
      <div>
          {thisEmployeesCharges}
      </div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Fire Employee
      </button>
      </div>
        }
    </div>
  );
}

export default EmployeeDetail;
