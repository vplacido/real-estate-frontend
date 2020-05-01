import React from 'react'
import {withRouter} from 'react-router-dom'
import NavBar from '../NavBar'

class ListingCard extends React.Component {


    render() {
        console.log(this.props)
        return(
            <div>
                <NavBar />
                <h1>{this.props.location.state.listing.address.oneLine}</h1>
            </div>
        )
    }
}

export default withRouter(ListingCard);