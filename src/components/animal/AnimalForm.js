import React, { useState } from 'react';
import APIManager from '../APIManager';
import './AnimalForm.css'
import {splitFakePath} from "../../modules/helpers"
const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "", caretaker: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFieldChange = event => {
    const stateToChange = { ...animal };
    stateToChange[event.target.id] = event.target.value;
    setAnimal(stateToChange);
  };
//   const [employees, setEmployees] = useState([]);

//   const getEmployees = () => {
//     // After the data comes back from the API, we
//     //  use the setEmployees function to update state
//     return APIManager.getAll("employees").then(employeesFromAPI => {
//       setEmployees(employeesFromAPI)
//     });
//   };

//   // got the employees from the API on the component's first render
//   useEffect(() => {
//     getEmployees();
//   }, []);

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
      APIManager.uploadFile(file)
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
              onChange={(event) => setFile(event.target.files[0])}
              id="image"
              placeholder="Image"
            />
            <label htmlFor="image">Image</label>
          </div>
          
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm

/* <option value="0">Select an Item</option>
                        <option value="event">Event</option>
                        <option value="friend">Friend</option>
                        <option value="message">Message</option>
                        <option value="news">News</option>
                        <option value="task">Task</option> */

                    //     <label htmlFor="caretaker"></label>
                    // <select id="dropdown" className="select__box">
                    //     <option value="0">Choose a caretaker</option>
                    //     {/* { employees.map(employee => {
                    //       return <option value={employee.firstName}>{employee.firstName} {employee.lastName}</option>
                    //     })

                    //     } */}
                    // </select>