import React from 'react'

const OwnerCard = () => {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>
                        Our Owner Felix
                    </h2>
                    <picture>
                        <img src={require("../owner/Owner.jpeg")} alt="joe" />
                    </picture>
                </div>               
            </div>
        )
}

export default OwnerCard