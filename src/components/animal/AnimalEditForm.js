import React, { useState, useEffect } from "react"
import APIManager from "../APIManager"
import "./AnimalForm.css"
// import {splitFakePath} from "../../modules/helpers"
import EmployeeList from "../employee/EmployeeList"
import OwnerList from "../owner/OwnerList"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "", employeeId: "", ownerId: ""  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

  


    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      image: animal.image,
      employeeId: parseInt(animal.employeeId),
      ownerId: parseInt(animal.ownerId)
    };

    APIManager.update(editedAnimal, "animals")
      .then(() => props.history.push("/animals"))
  }

  useEffect(() => {
    APIManager.get(props.match.params.animalId, "animals", "")
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, [props.match.params.animalId]);

  const employeeSelect = (<EmployeeList sourceCall = {"Form"} />)
  const ownerSelect = (<OwnerList sourceCall = {"Form"} />)

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
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            
            <select className="select__box"
                onChange={handleFieldChange}
                id="employeeId"
                placeholder="EmployeeId"
                value={animal.employeeId}
                >
                {employeeSelect}
            </select>
            <label htmlFor="employeeId">Caretaker</label>
            <select className="select__box"
                disabled
                onChange={handleFieldChange}
                id="ownerId"
                placeholder="OwnerId"
                value={animal.ownerId}>
                {ownerSelect}
            </select>
            <label htmlFor="ownerId">Owner</label>
            </div>
            { (animal.image !== "") && 
                <picture>
                    <img src={require(`./${animal.image}`)} alt={animal.name} />
                </picture>
            }
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
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
          
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm

