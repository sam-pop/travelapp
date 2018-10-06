import React from 'react'
import PropTypes from 'prop-types'
import Bar from '../components/Bar'
import SingleDestinationBar from '../components/SingleDestinationBar'
import ReactModal from 'react-modal'
import AddDestinationDialogBox from '../components/AddDestinationDialogBox'

ReactModal.setAppElement(document.getElementById('root'))

const fakeData = {
  destinations: [
    {
      name: 'Paris',
      place_id: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
      duration: '3 days',
      days: [
        {
          activities: [
            { name: 'Frog watching' },
            { name: 'Baguette shopping' }
          ]
        }
      ]
    },
    {
      name: 'Seattle',
      place_id: 'ChIJVTPokywQkFQRmtVEaUZlJRA',
      duration: '3 days',
      days: [
        {
          activities: [
            { name: 'Grunging out' },
            { name: 'Driving to Vancouver' }
          ]
        },
        {
          activities: [
            { name: 'Visiting Microsoft' },
            { name: 'Watching the ocean' }
          ]
        }
      ]
    }
  ]
}

const fakeNewDay = {
  activities: [
    { name: 'farting' },
    { name: 'sunbathing' }
  ]
}

class BarContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      destination: null,
      destinations: fakeData.destinations,
      modalDialogOpen: false
    }
  }
  onClickDestination (destination, destinationIndex) {
    this.props.onEnteringTripView(destination.place_id)
    this.setState({ destination, destinationIndex })
  }
  onClickAddDestination () {
    this.setState({ modalDialogOpen: true })
  }
  onClickBack () {
    this.setState({ destination: null })
    return 6
  }
  onClickAddDay (destinationIndex) {
    const newDestinations = [...this.state.destinations]
    newDestinations[destinationIndex].days.push(fakeNewDay)
    this.setState({ destinations: newDestinations })
  }
  render () {
    return (
      this.state.destination
        ? <SingleDestinationBar
          destination={this.state.destination}
          destinationIndex={this.state.destinationIndex}
          onClickBack={this.onClickBack.bind(this)}
          onClickAddDay={this.onClickAddDay.bind(this)}
        />
        : <div>
          <Bar
            destinations={this.state.destinations}
            onClickDestination={this.onClickDestination.bind(this)}
            onClickAddDestination={this.onClickAddDestination.bind(this)}
          />
          <ReactModal isOpen={this.state.modalDialogOpen} >
            <h1 onClick={() => { this.setState({ modalDialogOpen: false }) }}>X</h1>
            <AddDestinationDialogBox onAdd={(newPlace) => {
              this.setState({ modalDialogOpen: false })
              if (newPlace) {
                this.setState({
                  destinations: [
                    ...this.state.destinations,
                    {
                      name: newPlace.address_components[0].long_name,
                      duration: '1 day',
                      place_id: newPlace.place_id,
                      days: []
                    }
                  ]
                })
              }
            }} />
          </ReactModal>
        </div>
    )
  }
}

BarContainer.propTypes = {
  onEnteringTripView: PropTypes.func
}

export default BarContainer
