import React, { useState, useEffect } from "react";
// import AnimalSpotlight from "../animal/AnimalSpotlight";
import APIManager from "../APIManager";
import AnimalDetail from "../animal/AnimalDetail";

const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    APIManager.getRandomId("animals").then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalDetail animalId={spotlightId} sourceCall = "spotlight" />
      }
    </>
  );
};

export default Home;