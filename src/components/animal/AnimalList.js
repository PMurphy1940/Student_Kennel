import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
// import AnimalManager from '../../modules/AnimalManager';
import APIManager from '../APIManager';

const AnimalList = (props) => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return APIManager.getAll("animals").then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };
    //Discharge an animal//
  const deleteAnimal = id => {
    APIManager.delete(id, "animals")
      .then(() => APIManager.getAll("animals").then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  let ownerAnimals = animals.filter(animal => {
 
      return (animal.ownerId === props.ownerId) ? true:false
  })


    if (props.sourceCall === "NavBar") {
  // Finally we use map() to "loop over" the animals array to show a list of animal cards
    return (
        <>
        <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {props.history.push("/animals/new")}}>
            Admit Animal
        </button>
    </section>
        <div className="container-cards">
        {animals.map(animal =>
            <AnimalCard
            key={animal.id}
            pet={animal}
            deleteAnimal={deleteAnimal} />)}
        </div>
        </>
        );
    }
    else if (props.sourceCall === "details") {
        return(
            <div className="container-cards">
                {ownerAnimals.map(animal =>
                    <AnimalCard
                    key={animal.id}
                    pet={animal}
                    deleteAnimal={deleteAnimal} />)}        
            </div>   
    )};


};
export default AnimalList