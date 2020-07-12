import React from 'react'

const OwnerSelect = (props) => {
    return (
        <option value={props.owner.id}>{props.owner.firstName} {props.owner.lastName}</option>
    )

}

export default OwnerSelect