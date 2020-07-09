import React, { useState, useEffect } from 'react';
import APIManager from '../APIManager';
import './AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(props.animalId, "animals")
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed
        });
      });
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
      </div>
    </div>
  );
}

export default AnimalDetail;