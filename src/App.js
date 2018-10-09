import React, { Component } from 'react'
import './App.css'
import BarContainer from './containers/BarContainer'
import MapContainer from './containers/MapContainer'
import { getTrip } from './db'

const barContainerHeight = 200 // height in pixels

class App extends Component {
  constructor (props) {
    console.log('HI')
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
        <BarContainer
          getTrip={ getTrip }
          onEnteringTripView={this.zoomToPlaceId.bind(this)}
          height={barContainerHeight}
        />
        <MapContainer
          zoomToPlaceId={this.state.zoomToPlaceId}
          height={window.innerHeight - barContainerHeight}
        />
      </div>
    )
  }
}

export default App
