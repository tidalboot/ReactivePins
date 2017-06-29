import React, { Component } from 'react';
import './Listings.css'
import Listing from '../Listing/Listing'

class Listings extends Component {
  render() {
    return (
      <div className="Listings">
        Below are the currently available pins
        <Listing name="Tidalboot"/>  
        <Listing name="RyanCosans"/>
        <Listing name="JeffKaplan"/>
      </div>
    );
  }
}

export default Listings;