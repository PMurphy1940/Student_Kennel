import React, { useState } from 'react';
import APIManager from '../APIManager';
import '../animal/AnimalForm.css'
import {splitFakePath} from "../../modules/helpers"
import LocationList from "../location/LocationList"


const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ firstName: "", lastName: "", locationId: "", image: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...employee};
    stateToChange[event.target.id] = event.target.value;
    setEmployee(stateToChange);
  };
  /*  Local method for validation, set loadingStatus, create employee      object, invoke the EmployeeManager post method, and redirect to the full employee list
  */

 const locationSelect = (<LocationList sourceCall = {"Form"} />)


  const constructNewEmployee = event => {
    event.preventDefault();
    if (employee.firstName === "" ||employee.lastName === "" || employee.locationId === "") {
      window.alert("Please input an employee name and location");
    } 
    else {
      setIsLoading(true);
      if (employee.image === "") {
          employee.image = "dog.svg"
      }

      else {
          let imageURL = splitFakePath(employee.image)
          employee.image = imageURL
      }
      employee.locationId=parseInt(employee.locationId)
      // Create the employee and redirect user to employee list
      APIManager.post(employee, "employees")
        .then(() => props.history.push("/employees"));
    }

  };



  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="firstName"
              placeholder="Employee first name"
            />
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="lastName"
              placeholder="Employee last name"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="file"
              onChange={handleFieldChange}
              id="image"
              placeholder="Image"
            />
            <label htmlFor="image">Image</label>
            <select className="select__box"
                onChange={handleFieldChange}
                id="locationId"
                placeholder="LocationId">
                <option value="0">Choose a location</option>
                {locationSelect}
            </select>
            <label htmlFor="employeeId">Caretaker</label>             
            </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
          <div className="alignLeft">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => {props.history.push("/employees")}}
            >Discard</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm