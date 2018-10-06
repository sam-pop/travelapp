import React from 'react'
import Bar from '../components/Bar'
import SingleDestinationBar from '../components/SingleDestinationBar'
import ReactModal from 'react-modal'

ReactModal.setAppElement(document.getElementById('root'))

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
          </ReactModal>
        </div>
    )
  }
}

export default BarContainer
