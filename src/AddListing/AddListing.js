import React, { Component } from 'react';
import './AddListing.css';

class AddListing extends Component {
  constructor(props) {
    super(props);
    this.state = { traderName: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addListing = this.addListing.bind(this);
  }
  handleUpdate(event) {
    this.setState({ traderName: event.target.value });
  }

  addListing() {
    this.props.addListing(this.state.traderName);
    this.setState({traderName: ''});
  }

  render() {
    return (
      <div className="AddListing">
        <input type="text" placeholder="Trader name" onChange={this.handleUpdate} value={this.state.traderName}/>
        &nbsp;&nbsp;
        <button onClick={this.addListing}>Add Listing</button>
      </div>
    );
  }
}

export default AddListing;