import React from 'react'

const EmployeeCard = () => {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require("../employee/bad-employee-1.jpg")} alt="joe" />
                    </picture>
                    <h3>
                        Name: <span className="card-petname">Puddles</span>
                    </h3>
                    <p>Breed: Unknown</p>
                </div>
                <div className="card-content">
                    <picture>
                        <img src={require("../employee/bad-employee-2.jpg")} alt="joe" />
                    </picture>
                    <h3>
                        Name: <span className="card-petname">Florida Man</span>
                    </h3>
                    <p>Breed: Unknown</p>
                </div>
                <div className="card-content">
                    <picture>
                        <img src={require("../employee/bad-employee-3.jpeg")} alt="joe" />
                    </picture>
                    <h3>
                        Name: <span className="card-petname">Jim</span>
                    </h3>
                    <p>Breed: Unknown</p>
                </div>
            </div>
        )
}

export default EmployeeCard