import React from 'react'

const OwnerCard = (props) => {
    
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${props.owner.image}`)} alt="My Dog" />
          </picture>
          <h3>
            Name: <span className="card-petname">{props.owner.firstName} {props.owner.lastName}</span>
          </h3>
          <p>Phone: {props.owner.phone}</p>
          <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Disloyal</button>
        </div>
      </div>
    );
  };


export default OwnerCard