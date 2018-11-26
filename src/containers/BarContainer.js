import React from 'react'
import PropTypes from 'prop-types'
import SingleDestinationBar from '../components/SingleDestinationBar'
import TripViewContainer from './TripViewContainer'

const fakeNewDay = {
  activities: [{ name: 'farting' }, { name: 'sunbathing' }],
}

class BarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      destination: null,
      trip: null,
    }
    this.getTrip = props.getTrip.bind(this)
  }
  componentDidMount() {
    this.getTrip().then(tripInfo => {
      this.setState({ tripInfo })
    })
  }
  onClickDestination(destination, destinationIndex) {
    this.props.onEnteringTripView(destination.place_id)
    this.setState({ destination, destinationIndex })
  }
  onClickBack() {
    this.setState({ destination: null })
    return 6
  }
  onClickAddDay(destinationIndex) {
    // TODO: update backend
    const newDestinations = [...this.state.tripInfo.destinations]
    newDestinations[destinationIndex].days.push(fakeNewDay)
    this.setState({
      tripInfo: {
        ...this.state.tripInfo,
        destinations: newDestinations,
      },
    })
  }
  saveDestination(newPlace) {
    // TODO: update backend
    this.setState({ modalDialogOpen: false })
    if (newPlace) {
      this.setState({
        tripInfo: {
          ...this.state.tripInfo,
          destinations: [
            ...this.state.tripInfo.destinations,
            {
              name: newPlace.address_components[0].long_name,
              duration: '1 day',
              place_id: newPlace.place_id,
              days: [],
            },
          ],
        },
      })
    }
  }
  onClickDeleteDestination(destToDelete) {
    this.setState({
      destinations: this.state.destinations.filter(
        dest => dest.place_id !== destToDelete.place_id
      ),
    })
  }

  render() {
    return this.state.destination ? (
      <SingleDestinationBar
        height={this.props.height}
        destination={this.state.destination}
        destinationIndex={this.state.destinationIndex}
        onClickBack={this.onClickBack.bind(this)}
        onClickAddDay={this.onClickAddDay.bind(this)}
      />
    ) : (
      <div>
        <TripViewContainer
          height={this.props.height}
          destinations={this.state.destinations}
          onClickDestination={this.onClickDestination.bind(this)}
          onClickDeleteDestination={this.onClickDeleteDestination.bind(this)}
          tripInfo={this.state.tripInfo}
          onTitleChange={value =>
            // TODO: update backend
            this.setState({
              tripInfo: { ...this.state.tripInfo, name: value },
            })
          }
          onDateChange={value =>
            // TODO: update backend
            this.setState({ tripInfo: { ...this.state.tripInfo, ...value } })
          }
          addDestination={newPlace => {
            // TODO: update backend
            if (newPlace) {
              this.setState({
                destinations: [
                  ...this.state.destinations,
                  {
                    name: newPlace.address_components[0].long_name,
                    duration: '1 day',
                    place_id: newPlace.place_id,
                    days: [],
                  },
                ],
              })
            }
          }}
        />
      </div>
    )
  }
}

BarContainer.propTypes = {
  getTrip: PropTypes.func,
  onEnteringTripView: PropTypes.func,
  height: PropTypes.any,
}

export default BarContainer
