import React, { useState, useEffect } from 'react';
import APIManager from '../APIManager';
import './OwnerDetail.css'
import { firstLetterCase } from "../../modules/helpers"
import AnimalList from "../animal/AnimalList"

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ firstName: "", lastName: "", phone: "", image: "", id: ""});
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get(props.ownerId, "owners", "")
      .then(owner => {
        setOwner({
          firstName: owner.firstName,
          lastName: owner.lastName,
          phone: owner.phone,
          image: owner.image,
          id: owner.id
        });
        setIsLoading(false);
        if (owner.id === undefined  ) {
            props.history.push("/404")
        }
      });
  }, [props]);

  const thisOwnersPets = <AnimalList sourceCall = "ownerDetail" ownerId ={owner.id} {...props} />

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the owner list.
    setIsLoading(true);
    APIManager.delete(props.ownerId, "owners").then(() =>
      props.history.push("/owners")
    );
  };
   
  return (
    <div className="card">
        {(owner.id !== undefined) &&
      <div className="card-content">
      { (owner.image !== "") && 
        <picture>
            <img src={require(`./${owner.image}`)} alt={firstLetterCase(owner.firstName)} />
        </picture>
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(owner.firstName)} {firstLetterCase(owner.lastName)}</span></h3>
        <p>Contact: {owner.phone}</p>
        <div>
         {thisOwnersPets}
        </div>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Checkout owner and discharge pets
        </button>
      </div>
        }
    </div>
  );
}

export default OwnerDetail;

