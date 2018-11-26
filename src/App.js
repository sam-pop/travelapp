import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import BarContainer from './containers/BarContainer'
import MapContainer from './containers/MapContainer'
import 'material-components-web/dist/material-components-web.min.css'
import { DragDropContext } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import * as userData from './actions/user-data'

const barContainerHeight = 200 // height in pixels

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zoomToPlaceId: null,
    }
  }
  zoomToPlaceId(placeId) {
    this.setState({ zoomToPlaceId: placeId })
  }

  onDragEnd(a, b, c) {
    const { destinations, setDestinations } = this.props

    const fromIdx = a.source.index
    if (a.destination === null) {
      // debugger
      return
    }
    const toIdx = a.destination.index

    const tmp = destinations[toIdx]
    destinations[toIdx] = destinations[fromIdx]
    destinations[fromIdx] = tmp
    const newDestinations = destinations.slice()
    setDestinations(newDestinations)
  }

  render() {
    return (
      <DragDropContext
        onBeforeDragStart={this.onBeforeDragStart}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <div className="App">
          <BarContainer
            onEnteringTripView={this.zoomToPlaceId.bind(this)}
            height={barContainerHeight}
          />
          <MapContainer
            zoomToPlaceId={this.state.zoomToPlaceId}
            height={window.innerHeight - barContainerHeight}
          />
        </div>
      </DragDropContext>
    )
  }
}

App.propTypes = {
  destinations: PropTypes.array,
  setDestinations: PropTypes.func,
}
const mapStateToProps = state => {
  return {
    destinations: state.userData.destinations,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDestinations: destinations => {
      const action = userData.setDestinations(destinations)
      dispatch(action)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// export default App
