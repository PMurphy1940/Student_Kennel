import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
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

const ApplicationViews = () => {
    // Check if credentials are in session storage returns true/false
const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  

return (
    <React.Fragment>
    <Route 
        path="/404" 
        render={props => {
            return <NotFound {...props} />
        }} 
        />
    <Route path="/login" component={Login} />
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
          if (isAuthenticated()) {    
            return <AnimalList sourceCall = {"NavBar"}
              {...props} />
            }
             else {
            return <Redirect to="/login" />
            }
          
        }}
      />
      <Route 
          path="/animals/new" render={(props) => {
            if (isAuthenticated()) {
            return <AnimalForm 
                {...props} />
          }
          else {
            return <Redirect to="/login" />
            }
            }}
       />
      <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          if (isAuthenticated()) {
        // Pass the animalId to the AnimalDetailComponent
         return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
             {...props}
         />
        }
          else {
            return <Redirect to="/login" />
            }
        }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
            if (isAuthenticated()) {
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
            if (isAuthenticated()) {
          return <LocationList sourceCall = {"NavBar"} {...props}/>;
        }
          else {
            return <Redirect to="/login" />
            }
        }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
            if (isAuthenticated()) {
        // Pass the locationId to the locationDetailComponent
         return <LocationDetail locationId={parseInt(props.match.params.locationId)}
             {...props}
         />
        }
          else {
            return <Redirect to="/login" />
            }
        }} />
      <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
        if (isAuthenticated()) {
        // Pass the locationId to the locationDetailComponent
         return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}
             {...props}
         />
        }
          else {
            return <Redirect to="/login" />
            }
        }} />
      <Route exact path="/employees/:employeeId(\d+)/edit" render={(props) => {
        if (isAuthenticated()) {
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
            if (isAuthenticated()) {    
          return <EmployeeList sourceCall = {"NavBar"} {...props} />;
        }
          else {
            return <Redirect to="/login" />
            }
        }}
      />
      <Route 
          path="/employees/new" render={(props) => {
            if (isAuthenticated()) {
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
            if (isAuthenticated()) {    
          return <OwnerList sourceCall = {"NavBar"} {...props}/>;
        }
          else {
            return <Redirect to="/login" />
            }
        }}
      />
      <Route 
          path="/owners/new" render={(props) => {
            if (isAuthenticated()) {
            return <OwnerForm 
                {...props} />
          }
          else {
            return <Redirect to="/login" />
            }
            }}
       />
      <Route path="/owners/:ownerId(\d+)" render={(props) => {
           if (isAuthenticated()) { 
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}
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