import React from 'react'
import PropTypes from 'prop-types'
import SingleDestinationBar from '../components/SingleDestinationBar'
import moment from 'moment'
import TripViewContainer from './TripViewContainer'
import { connect } from 'react-redux'

const fakeTripInfo = {
  name: 'Trip to China',
  tripStartDate: moment(),
  tripEndDate: moment().add(5, 'days'),
  numberOfDays: 15,
}

// const fakeData = {}

const fakeNewDay = {
  activities: [{ name: 'farting' }, { name: 'sunbathing' }],
}

class BarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      destination: null,
      // destinations: fakeData.destinations,
      tripInfo: fakeTripInfo,
    }
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
    // const newDestinations = [...this.state.destinations]
    // newDestinations[destinationIndex].days.push(fakeNewDay)
    // this.setState({ destinations: newDestinations })
  }

  saveDestination(newPlace) {
    this.setState({ modalDialogOpen: false })
    if (newPlace) {
      // this.setState({
      //   destinations: [
      //     ...this.state.destinations,
      //     {
      //       name: newPlace.address_components[0].long_name,
      //       duration: '1 day',
      //       place_id: newPlace.place_id,
      //       days: [],
      //     },
      //   ],
      // })
    }
  }

  onClickDeleteDestination(destToDelete) {
    // this.setState({
    //   destinations: this.state.destinations.filter(
    //     dest => dest.place_id !== destToDelete.place_id
    //   ),
    // })
  }

  render() {
    return this.props.destination ? (
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
          destinations={this.props.destinations}
          onClickDestination={this.onClickDestination.bind(this)}
          onClickDeleteDestination={this.onClickDeleteDestination.bind(this)}
          tripInfo={this.state.tripInfo}
          onTitleChange={value =>
            this.setState({ tripInfo: { ...this.state.tripInfo, name: value } })
          }
          onDateChange={value =>
            this.setState({ tripInfo: { ...this.state.tripInfo, ...value } })
          }
          addDestination={newPlace => {
            if (newPlace) {
              // this.setState({
              //   destinations: [
              //     ...this.state.destinations,
              //     {
              //       name: newPlace.address_components[0].long_name,
              //       duration: '1 day',
              //       place_id: newPlace.place_id,
              //       days: [],
              //     },
              //   ],
              // })
            }
          }}
        />
      </div>
    )
  }
}

BarContainer.propTypes = {
  onEnteringTripView: PropTypes.func,
  height: PropTypes.any,
  destination: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    destinations: state.userData.destinations,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideAddDestinationModal: () => {
      // const action = modals.hideAddDestinationModal()
      // dispatch(action)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarContainer)

// export default BarContainer
