import React from 'react'

const OwnerCard = (props) => {
    
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${props.boss.image}`)} alt="My Dog" />
          </picture>
          <h3>
            Name: <span className="card-petname">{props.boss.firstName} {props.boss.lastName}</span>
          </h3>
          <p>Phone: {props.boss.phone}</p>
        </div>
      </div>
    );
  };


export default OwnerCard