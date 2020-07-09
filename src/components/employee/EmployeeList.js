import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
// import EmployeeManager from '../../modules/EmployeeManager';
import APIManager from '../APIManager';

const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return APIManager.getAll("employees").then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  const deleteEmployee = id => {
    APIManager.delete(id, "employees")
      .then(() => APIManager.getAll("employees").then(setEmployees));
  };


  // Finally we use map() to "loop over" the employees array to show a list of employee cards
  return (
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard key={employee.id} worker={employee} deleteEmployee={deleteEmployee}/>)}
    </div>
  );
};
export default EmployeeList