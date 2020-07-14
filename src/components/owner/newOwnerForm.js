import React, { useState } from 'react';
import APIManager from '../APIManager';
import '../animal/AnimalForm.css'
import {splitFakePath} from "../../modules/helpers"

const OwnerForm = props => {
  const [owner, setOwner] = useState({ firstName: "", lastName: "", phone: "", image: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...owner};
    stateToChange[event.target.id] = event.target.value;
    setOwner(stateToChange);
  };
  /*  Local method for validation, set loadingStatus, create owner      object, invoke the OwnerManager post method, and redirect to the full owner list
  */
  const constructNewOwner = event => {
    event.preventDefault();
    if (owner.firstName === "" ||owner.lastName === "" || owner.phone === "") {
      window.alert("Please input an owner name and phone number");
    } 
    else {
      setIsLoading(true);
      if (owner.image === "") {
          owner.image = "dog.svg"
      }

      else {
          let imageURL = splitFakePath(owner.image)
          owner.image = imageURL
      }

      // Create the owner and redirect user to owner list
      APIManager.post(owner, "owners")
        .then(() => moveOn());
    }
  const moveOn = () => {
    let checkIn = window.confirm("Would you like to check in a pet now?")
    if (checkIn===true) { props.history.push("/animals/new")}
    else {
    props.history.push("/owners")};
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
              id="firstName"
              placeholder="Owner first name"
            />
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="lastName"
              placeholder="Owner last name"
            />
            <label htmlFor="name">Last Name</label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              onChange={handleFieldChange}
              id="phone"
              placeholder="phone"
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="file"
              onChange={handleFieldChange}
              id="image"
              placeholder="Image"
            />
            <label htmlFor="image">Image</label>             
            </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
          <div className="alignLeft">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => {props.history.push("/owners")}}
            >Discard</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm