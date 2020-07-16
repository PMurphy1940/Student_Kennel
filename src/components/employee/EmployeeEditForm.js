import React, { useState, useEffect } from "react"
import APIManager from "../APIManager"
import "../animal/AnimalForm.css"
// import {splitFakePath} from "../../modules/helpers"

import LocationList from "../location/LocationList"

const EmployeeEditForm = props => {
    const [employee, setEmployee] =useState({firstName: "", lastName: "", location: "", image: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange ={...employee};
        stateToChange[event.target.id] = event.target.value;
        setEmployee(stateToChange);
    }

const locationSelect = (<LocationList sourceCall = {"Form"} />) 

const updateExistingEmployee = e => {
    e.preventDefault()
    setIsLoading(true);

const editedEmployee = {
    id: props.match.params.employeeId,
    firstName: employee.firstName,
    lastName: employee.lastName,
    location: employee.location,
    image: employee.image
    }
console.log("edited emp", editedEmployee)

APIManager.update(editedEmployee, "employees")
      .then(() => props.history.push("/employees"))
} 

useEffect(() => {
    APIManager.get(props.match.params.employeeId, "employees", "")
    .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
    })
}, [props.match.params.employeeId]);

return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="firstName"
              value={employee.firstName}
            />
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="lastName"
              value={employee.lastName}
            />
            <label htmlFor="lastName">Last Name</label>
            <select className="select__box"
                onChange={handleFieldChange}
                id="locationId"
                placeholder="LocationId"
                value={employee.location}>              
                {locationSelect}
                   
            </select>
            <label htmlFor="location">Location</label> 
            { (employee.image !== "") ?  
                <picture>
                    <img src={require(`./${employee.image}`)} alt={employee.firstName} />
                </picture> : null
             }
          </div>
          <div className="alignLeft">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => {props.history.goBack()}}
            >Discard</button>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
)
}

export default EmployeeEditForm