import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import EmployeeSelect from './employeeSelectElement'
import APIManager from '../APIManager';


const EmployeeList = (sourceCall) => {
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

    if (sourceCall.sourceCall === "NavBar") 
    // Finally we use map() to "loop over" the employees array to show a list of employee cards
        { 
            return (
            <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} worker={employee} deleteEmployee={deleteEmployee}/>)}
            </div>
            );
        }
    else if (sourceCall.sourceCall === "Form") {
        
            return(
                <>
                {employees.map(employee => <EmployeeSelect key={employee.id} employee={employee} />)}
                </ >   
         )
        }
    else if (sourceCall.sourceCall === "Caretaker") {
        return employees
    }


}
export default EmployeeList