import React from 'react'

const LocationCard = () => {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require("../location/BB-Dog_House-2.jpg")} alt="joe" />
                    </picture>
                    <address>
                        Visit Us at the Nashville North Location<br />
                        500 Puppy Way
                    </address>
                </div>
                <div className="card-content">
                    <picture>
                        <img src={require("../location/bad-location2.JPG")} alt="joe" />
                    </picture>
                    <address>
                        Visit Us at the Nashville West Location<br />
                        13 Nowhere rd.
                    </address>
                </div>
                <div className="card-content">
                    <picture>
                        <img src={require("../location/badlocation3.jpg")} alt="joe" />
                    </picture>
                    <address>
                        Visit Us at the Nashville East Location<br />
                        1 Lookout rock
                    </address>
                </div>
               
            </div>
        )
}

export default LocationCard