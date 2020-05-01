import React from 'react'
import {Link} from 'react-router-dom'

class Listing extends React.Component {

    render() {
        return(
            <div>
                <Link to={{pathname: `/Listing/${this.props.listing.identifier.fips}`, state:{listing: this.props.listing}}} >
                    <p>{this.props.listing.address.line1}</p>
                </Link>
            </div>
        )
    }
}

export default Listing;