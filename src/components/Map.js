import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) =>
  <div>
    <h1>
      {text}
    </h1>
  </div>

const somewhereAroundCapetown = {
  lat: -33.55,
  lng: 18.25
};

class SimpleMap extends Component {
  static defaultProps = {
    center: somewhereAroundCapetown,
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTKcRP25mN9r3L-KaeysDE62uMneEaY9U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={somewhereAroundCapetown.lat}
            lng={somewhereAroundCapetown.lng}
            text={'Africa! Wakawaka!'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
