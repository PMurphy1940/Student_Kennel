import React, { useState, useEffect } from 'react';
import APIManager from '../APIManager';
import './AnimalDetail.css'
import { firstLetterCase } from "../../modules/helpers"
import { Link } from "react-router-dom";

const AnimalDetail = props => {
  const [animal, setAnimal] = useState( {id: "", name: "", breed: "", image: "", employeeId: "", employee: "", ownerId: "", owner: ""});
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(props.animalId, "animals", "?_expand=employee&_expand=owner")
      .then(animal => {

        setAnimal({
            ...animal
        });
        setIsLoading(false);
        if (animal.id === undefined  ) {
            props.history.push("/404")
        }
      });
  }, [props.animalId, props.history]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    APIManager.delete(props.animalId, "animals").then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
    { (animal.id !== undefined) &&
      <div className="card-content">
      { (animal.image !== "") && 
        <picture>
            <img src={require(`./${animal.image}`)} alt={firstLetterCase(animal.name)} />
        </picture>
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(animal.name)}</span></h3>
        <p>Breed: {animal.breed}</p>
        {props.hasUser &&
        <div className="petTies">
            { (animal.employeeId !== "" && animal.employee.image !== "") &&
            <div className="caretaker__Container" >
                <Link to={`/employees/${animal.employeeId}`}>
                    <p>Caretaker: {animal.employee.firstName}</p>
                    <img src={require(`../employee/${animal.employee.image}`)} alt={firstLetterCase(animal.employee.firstName) } className="caretakerPic"/>
                </Link>
            </div>
            }
            { (animal.ownerId !== "" && animal.owner.image !== "") &&
            <div className="owner__Container" >
                <Link to={`/owners/${animal.ownerId}`}>
                    <p>Owner: {animal.owner.firstName} {animal.owner.lastName}</p>
                    {(props.sourceCall !== "spotlight") &&
                    <p>Contact: {animal.owner.phone}</p>}
                    <img src={require(`../owner/${animal.owner.image}`)} alt={firstLetterCase(animal.owner.firstName) } className="caretakerPic"/>
                </Link>
            </div>
            }
        </div>
        }
        { (props.sourceCall !== "spotlight") &&
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
        }
      </div>
    }
    </div>
  );
// }
}

export default AnimalDetail;
