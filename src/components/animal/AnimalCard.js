import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";


const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`./${props.pet.image}`)} alt={props.pet.name} />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.pet.name}</span>
        </h3>
        <p>Breed: {props.pet.breed}</p>
        <Link to={`/animals/${props.pet.id}`}>
            <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.deleteAnimal(props.pet.id)}>Discharge</button>
      </div>
    </div>
  );
};

export default AnimalCard;