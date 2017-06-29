import React, {Component} from 'react';
import './Listings.css';


class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {pin: 'Tracer', internationalFor: 'Listing for ', internationalFrom: ' from '}
    this.frenchify = this.frenchify.bind(this);
  };

  frenchify() {
    this.setState({ internationalFor: 'Inscription pour', internationalFrom: 'de ' })
  }

  render() {
   return (
   <div className="Listings">
     {this.state.internationalFor} {this.state.pin} {this.state.internationalFrom} {this.props.name}
     <br/>
     <button className="FrenchyButton" onClick={this.frenchify}>Frenchify!</button>
  </div>
   );
  }
}

export default Listings;