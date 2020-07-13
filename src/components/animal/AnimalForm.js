import React, { useState } from 'react';
import APIManager from '../APIManager';
import './AnimalForm.css'
import {splitFakePath} from "../../modules/helpers"
import EmployeeList from "../employee/EmployeeList"
import OwnerList from "../owner/OwnerList"

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "", employeeId: "", ownerId: "" });
  const [isLoading, setIsLoading] = useState(false);
//   const [file, setFile] = useState(null);
//   const [employeeSelect, setemployeeSelect] = useState([])

  const handleFieldChange = event => {
    const stateToChange = { ...animal };
    stateToChange[event.target.id] = event.target.value;
    setAnimal(stateToChange);
  };
// get the employee select element HTML from EmployeeList/EmployeeSelectElement
  const employeeSelect = (<EmployeeList sourceCall = {"Form"} />)
  const ownerSelect = (<OwnerList sourceCall = {"Form"} />)


  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewAnimal = event => {
    event.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } 
    else {
      setIsLoading(true);
      if (animal.image === "") {
          animal.image = "dog.svg"
      }

      else {
          let imageURL = splitFakePath(animal.image)
          animal.image = imageURL
      }
      animal.employeeId=parseInt(animal.employeeId)
      animal.ownerId=parseInt(animal.ownerId)
      // Create the animal and redirect user to animal list
      APIManager.post(animal, "animals")
        .then(() => props.history.push("/animals"));
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
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <input
              type="file"
              onChange={handleFieldChange}
              id="image"
              placeholder="Image"
            />
            <label htmlFor="image">Image</label>             
            <select className="select__box"
                onChange={handleFieldChange}
                id="employeeId"
                placeholder="EmployeeId">
                <option value="0">Choose a caretaker</option>
                {employeeSelect}
            </select>
            <label htmlFor="employeeId">Caretaker</label>
            <select className="select__box"
                onChange={handleFieldChange}
                id="ownerId"
                placeholder="OwnerId">
                <option value="0">Choose an owner</option>
                {ownerSelect}
            </select>
            <label htmlFor="ownerId">Owner</label>
            </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
          <div className="alignLeft">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => {props.history.push("/animals")}}
            >Discard</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm

