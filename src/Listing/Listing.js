import React, {Component} from 'react';
import './Listing.css';


class Listing extends Component {
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
   <div className="Listing">
     {this.state.internationalFor} {this.state.pin} {this.state.internationalFrom} {this.props.name}
     <br/>
     <button className="FrenchyButton" onClick={this.frenchify}>Frenchify!</button>
  </div>
   );
  }
}

export default Listing;