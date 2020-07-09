import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
// import OwnerManager from '../../modules/OwnerManager';
import APIManager from '../APIManager';

const OwnerList = () => {
  // The initial state is an empty array
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    // After the data comes back from the API, we
    //  use the setOwners function to update state
    return APIManager.getAll("owners").then(ownersFromAPI => {
      setOwners(ownersFromAPI)
    });
  };

  // got the owners from the API on the component's first render
  useEffect(() => {
    getOwners();
  }, []);

  const deleteOwner = id => {
    APIManager.delete(id, "owners")
      .then(() =>APIManager.getAll("owners").then(setOwners));
  };


  // Finally we use map() to "loop over" the owners array to show a list of owner cards
  return (
    <div className="container-cards">
      {owners.map(owner => <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner}/>)}
    </div>
  );
};
export default OwnerList