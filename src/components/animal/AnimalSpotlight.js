// import React, { useState, useEffect } from "react";
// import APIManager from "../APIManager";
// import "./AnimalSpotlight.css";

// const AnimalSpotlight = props => {
//   const [animal, setAnimal] = useState({ name: "", breed: "", image: "", ownerId: "", employeeId: "" });

//   useEffect(() => {
//     APIManager.get(props.animalId, "animals", "?_expand=employee&_expand=owner").then(animal => {
//       setAnimal({
//         name: animal.name,
//         breed: animal.breed,
//         image: animal.image,
//         ownerId: animal.ownerId,
//         employeeId: animal.employeeId
//       });
//     });
//   }, [props.animalId]);

//   return (
//     <div className="animal-spotlight">
//       <img src={require('./dog.svg')} alt="My Dog" />
//       <div>
//         <h3>{animal.name}</h3>
//         <p>{animal.breed}</p>
//       </div>
//     </div>
//   );
// };

// export default AnimalSpotlight;