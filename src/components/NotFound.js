import React from 'react'

const NotFound = (props) => {
    
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./doggone.jpg`)} alt="Dog driving car" />
          </picture>
          <h3>
           We're Sorry, the page you requested cannot be found
          </h3>
          
          <button type="button" onClick={() => props.history.push("/")}>Home</button>
        </div>
      </div>
    );
  };


export default NotFound