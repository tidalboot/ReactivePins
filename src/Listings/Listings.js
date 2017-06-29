import React, { Component } from 'react';
import './Listings.css'
import Listing from '../Listing/Listing'
import AddListing from '../AddListing/AddListing'

class Listings extends Component {
  constructor(traders) {
    super(traders);
    this.state = {traderNames: ['Tidalboot', 'RyanCosans', 'JeffKaplan', 'ChrisMetzen']}
    this.addListing = this.addListing.bind(this);
  }

  addListing(pinName) {
    this.setState({traderNames: [...this.state.traderNames, pinName]});
  }

  allListings() {
    return this.state.traderNames.map(name => (
    <Listing key={name} name={name}/>  
    ));
  }

  render() {
    return (
      <div className="Listings">
        <AddListing addListing={this.addListing}/>
        {this.allListings()}
      </div>
    );
  }
}

export default Listings;