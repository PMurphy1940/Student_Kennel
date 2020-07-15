import React from 'react'

const employeeSelect = (props) => {
    return (
        <option key={props.employee.id} value={props.employee.id}>{props.employee.firstName} {props.employee.lastName}</option>
    )

}

export default employeeSelect
