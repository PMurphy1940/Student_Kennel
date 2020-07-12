import React, { useState, useEffect } from 'react';
import APIManager from '../APIManager';
import './AnimalDetail.css'
import { firstLetterCase } from "../../modules/helpers"
import EmployeeList from "../employee/EmployeeList"

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "", employeeId: "", employee: ""});
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(props.animalId, "animals")
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          image: animal.image,
          employeeId: animal.employeeId,
          employee: animal.employee
        });
        setIsLoading(false);
        console.log(animal)
      });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    APIManager.delete(props.animalId, "animals").then(() =>
      props.history.push("/animals")
    );
  };
   
  return (
    <div className="card">
      <div className="card-content">
      { (animal.image !== "") && 
        <picture>
            <img src={require(`./${animal.image}`)} alt={firstLetterCase(animal.name)} />
        </picture>
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(animal.name)}</span></h3>
        <p>Breed: {animal.breed}</p>
        { (animal.employeeId !== "" && animal.employee.image !== "") &&
        <>
        <p>Caretaker: {animal.employee.firstName}</p>
        <picture>
            <img src={require(`../employee/${animal.employee.image}`)} alt={firstLetterCase(animal.name)} />
        </picture>
        </>
        }
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;