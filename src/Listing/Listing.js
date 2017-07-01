import React, {Component} from 'react';
import './Listing.css';


class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {pin: 'Tracer', internationalFor: 'Listing for ', internationalFrom: ' from '}
    this.frenchify = this.frenchify.bind(this);
    this.removeListing = this.removeListing.bind(this);
  };

  frenchify() {
    this.setState({ internationalFor: 'Inscription pour', internationalFrom: 'de ' })
  }

  removeListing() {
    this.props.removeListing(this.props.name);
  }

  render() {
   return (
   <div className="Listing">
     {this.state.internationalFor} {this.state.pin} {this.state.internationalFrom} {this.props.name}
     <br/>
     <button className="FrenchyButton" onClick={this.frenchify}>Frenchify!</button>
     <button className="RemoveListing" onClick={this.removeListing}>Remove listing</button>
  </div>
   );
  }
}

export default Listing;