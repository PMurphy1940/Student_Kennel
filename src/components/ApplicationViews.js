import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from './animal/AnimalForm';
import EmployeeDetail from "./employee/employeeDetail";
import OwnerDetail from "./owner/ownerDetail";
import AnimalEditForm from "./animal/AnimalEditForm";
import OwnerForm from "./owner/newOwnerForm"
import EmployeeForm from "./employee/newEmployeeForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import NotFound from "./NotFound"
import Login from "./auth/Login";

const ApplicationViews = (props) => {

    const hasUser = props.hasUser;
    const setUser = props.setUser;
 

return (
    <React.Fragment>
        <Route 
        path="/404" 
        render={props => {
            return <NotFound {...props} />
        }} 
        />
        <Route path="/login" 
        render={props => {
           return <Login setUser={setUser} {...props}/>
        }}  />

      <Route
        exact
        path="/"
        render={props => {
          return <Home hasUser={hasUser} />;
        }}
      />        
      <Route
        exact
        path="/animals"
        render={props => {
          if (hasUser) {    
            return <AnimalList hasUser={hasUser} sourceCall = {"NavBar"} 
              {...props} />
            }
             else {
            return <Redirect to="/login" />
            }
          
        }}
      />
      <Route 
          path="/animals/new" render={(props) => {
            if (hasUser) {
            return <AnimalForm hasUser={hasUser}
                {...props} />
          }
          else {
            return <Redirect to="/login" />
            }
            }}
       />
      <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          if (hasUser) {
        // Pass the animalId to the AnimalDetailComponent
         return <AnimalDetail hasUser={hasUser} animalId={parseInt(props.match.params.animalId)}
             {...props}
         />
        }
          else {
            return <Redirect to="/login" />
            }
        }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
            if (hasUser) {
                return <AnimalEditForm {...props} />
            } 
            else {
                return <Redirect to="/login" />
            }
        }} />
      <Route
        exact
        path="/locations"
        render={props => {

          return <LocationList sourceCall = {"NavBar"} hasUser={hasUser} {...props}/>;
        }
        }
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        // Pass the locationId to the locationDetailComponent
         return <LocationDetail hasUser={hasUser} locationId={parseInt(props.match.params.locationId)} setUser={setUser}
             {...props}
         />
        }} />
      <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
        if (hasUser) {
        // Pass the locationId to the locationDetailComponent
         return <EmployeeDetail hasUser={hasUser} employeeId={parseInt(props.match.params.employeeId)}
             {...props}
         />
        }
          else {
            return <Redirect to="/login" />
            }
        }} />
      <Route exact path="/employees/:employeeId(\d+)/edit" render={(props) => {
        if (hasUser) {
        // Pass the locationId to the locationDetailComponent
         return <EmployeeEditForm employeeId={parseInt(props.match.params.employeeId)}
             {...props}
         />
        }
          else {
            return <Redirect to="/login" />
            }
        }} />
      <Route
        exact
        path="/employees"
        render={props => {
            if (hasUser) {    
          return <EmployeeList hasUser={hasUser} sourceCall = {"NavBar"} {...props} />;
        }
          else {
            return <Redirect to="/login" />
            }
        }}
      />
      <Route 
          path="/employees/new" render={(props) => {
            if (hasUser) {
            return <EmployeeForm 
                {...props} />
          }
          else {
            return <Redirect to="/login" />
            }
            }}
       />
      <Route
        exact
        path="/owners"
        render={props => {
            if (hasUser) {    
          return <OwnerList hasUser={hasUser} sourceCall = {"NavBar"} {...props}/>;
        }
          else {
            return <Redirect to="/login" />
            }
        }}
      />
      <Route 
          path="/owners/new" render={(props) => {
            if (hasUser) {
            return <OwnerForm 
                {...props} />
          }
          else {
            return <Redirect to="/login" />
            }
            }}
       />
      <Route path="/owners/:ownerId(\d+)" render={(props) => {
           if (hasUser) { 
          return <OwnerDetail hasUser={hasUser} ownerId={parseInt(props.match.params.ownerId)}
          {...props} />
        }
          else {
            return <Redirect to="/login" />
            }
      }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;