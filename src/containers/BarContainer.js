import React from 'react'
import Bar from '../components/Bar'
import SingleDestinationBar from '../components/SingleDestinationBar'

const fakeData = {
  destinations: [
    {
      name: 'Paris',
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

const fakeNewDestination = {
  name: 'Iceland',
  duration: '6 days',
  days: [
    {
      activities: [
        { name: 'Ice' },
        { name: 'More ice' }
      ]
    },
    {
      activities: [
        { name: 'Seeing Ice' },
        { name: 'Orca hunting' }
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
      destinations: fakeData.destinations
    }
  }
  onClickDestination (destination, destinationIndex) {
    this.setState({ destination, destinationIndex })
  }
  onClickAddDestination () {
    this.setState({ destinations: [...this.state.destinations, fakeNewDestination] })
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
        : <Bar
          destinations={this.state.destinations}
          onClickDestination={this.onClickDestination.bind(this)}
          onClickAddDestination={this.onClickAddDestination.bind(this)}
        />
    )
  }
}

export default BarContainer
