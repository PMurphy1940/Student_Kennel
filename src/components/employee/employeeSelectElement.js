import React from 'react'

const employeeSelect = (props) => {
    return (
        <option value={props.employee.firstName}>{props.employee.firstName} {props.employee.lastName}</option>
    )

}

export default employeeSelect

//     <label htmlFor="caretaker"></label>
                    // <select id="dropdown" className="select__box">
                    //     <option value="0">Choose a caretaker</option>
                    //     {/* { employees.map(employee => {
                    //       return <option value={employee.firstName}>{employee.firstName} {employee.lastName}</option>
                    //     })

                    //     } */}
                    // </select>