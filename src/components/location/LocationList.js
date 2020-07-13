import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
// import LocationManager from '../../modules/LocationManager';
import APIManager from '../APIManager';
import LocationSelect from "./locationSelectElement"

const LocationList = (props) => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return APIManager.getAll("locations").then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const deleteLocation = id => {
    APIManager.delete(id, "locations")
      .then(() => APIManager.getAll("locations").then(setLocations));
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  if (props.sourceCall === "NavBar") {
  // Finally we use map() to "loop over" the locations array to show a list of location cards
  return (
    <div className="container-cards">
      {locations.map(location => <LocationCard key={location.id} store={location} deleteLocation={deleteLocation} />)}
    </div>
    );
  }
  else if (props.sourceCall === "Form") {
        
    return(
        <>
        {locations.map(location => <LocationSelect key={location.id} location={location} />)}
        </ >   
 )
}
};
export default LocationList