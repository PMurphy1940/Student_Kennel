import React from 'react'

const locationSelect = (props) => {
    return (
        <option value={props.location.id}>{props.location.name}</option>
    )

}

export default locationSelect