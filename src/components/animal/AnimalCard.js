import React from "react";
import "./Animal.css"


const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.pet.name}</span>
        </h3>
        <p>Breed: {props.pet.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;