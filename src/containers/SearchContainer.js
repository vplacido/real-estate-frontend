import React from 'react'
import NavBar from '../NavBar'
import ListingContainer from './ListingContainer'
import Search from '../components/Search'

class SearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ""
        }
    }

    changeState(term) {
        this.setState({searchTerm: term})
    }

    render() {
        return(
            <div>
                <NavBar />
                <Search changeState={(e)=>this.changeState(e)}/>
                <ListingContainer searchTerm={this.state.searchTerm}/>
            </div>
        )
    }
}

export default SearchContainer;