import React from 'react'
import Listing from '../components/Listing'

class ListingContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: []
        }
    }

    componentDidMount() {
        // "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/snapshot?postalcode=11215&minUniversalSize=1200&maxUniversalSize=1800"
        
        fetch(`https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=${this.props.searchTerm}`, {
            headers: {
                apiKey: 'eddcf6b022ef6027fc5e32be220795ca',
                Accept: 'application/json',
            }
        }).then(response => response.json())
        .then(json => this.setState({properties: json.property.filter(l => l.location.latitiude !== "0.000000" && l.location.longitude !== "0.000000")}))
    }

    renderListing() {
        return this.state.properties.map(l => {
            return <Listing listing={l} />
        })
    }
    render() {
        return(
            <div>
                <ul>
                    {this.renderListing()}
                </ul>
            </div>
        )
    }
}

export default ListingContainer;