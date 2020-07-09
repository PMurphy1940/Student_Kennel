import React from 'react'

const EmployeeCard = (props) => {
    
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${props.worker.image}`)} alt="My Dog" />
          </picture>
          <h3>
            Name: <span className="card-petname">{props.worker.firstName} {props.worker.lastName}</span>
          </h3>
          <p>Breed: {props.worker.breed}</p>
        </div>
      </div>
    );
  };

export default EmployeeCard