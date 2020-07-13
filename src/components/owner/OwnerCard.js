import React from 'react'
import { Link } from 'react-router-dom'

const OwnerCard = (props) => {
    
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./${props.owner.image}`)} alt="My Dog" />
          </picture>
          <h3>
            Name: <span className="card-petname">{props.owner.firstName} {props.owner.lastName}</span>
          </h3>
          <p>Phone: {props.owner.phone}</p>
          <Link to={`/owners/${props.owner.id}`}>
            <button>Details</button>
          </Link>
          <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Checkout Owner and discharge pets</button>
        </div>
      </div>
    );
  };


export default OwnerCard