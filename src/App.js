import React, { Component } from 'react'
import './App.css'
import BarContainer from './containers/BarContainer'
import MapContainer from './containers/MapContainer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zoomToPlaceId: null
    }
  }
  zoomToPlaceId (placeId) {
    this.setState({ zoomToPlaceId: placeId })
  }
  render () {
    return (
      <div className="App">
        <BarContainer onEnteringTripView={this.zoomToPlaceId.bind(this)} />
        <MapContainer zoomToPlaceId={this.state.zoomToPlaceId} />
      </div>
    )
  }
}

export default App
