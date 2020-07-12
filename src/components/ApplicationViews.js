import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from './animal/AnimalForm'
import EmployeeDetail from "./employee/employeeDetail"

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={props => {
          return <AnimalList 
              {...props}
          />;
        }}
      />
      <Route 
          path="/animals/new" render={(props) => {
            return <AnimalForm 
                {...props} />
          }}
       />
      <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
         return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
             {...props}
         />
        }} />
      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        // Pass the locationId to the locationDetailComponent
         return <LocationDetail locationId={parseInt(props.match.params.locationId)}
             {...props}
         />
        }} />
      <Route path="/employees/:employeeId(\d+)" render={(props) => {
        // Pass the locationId to the locationDetailComponent
         return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}
             {...props}
         />
        }} />
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList sourceCall = {"NavBar"} />;
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;