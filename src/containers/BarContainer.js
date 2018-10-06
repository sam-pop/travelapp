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

class BarContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      destination: null
    }
  }
  onClickDestination (destination) {
    this.setState({ destination })
  }
  onClickBack () {
    this.setState({ destination: null })
  }
  render () {
    return (
      this.state.destination
        ? <SingleDestinationBar
          destination={this.state.destination}
          onClickBack={this.onClickBack.bind(this)}
        />
        : <Bar
          destinations={fakeData.destinations}
          onClickDestination={this.onClickDestination.bind(this)}
        />
    )
  }
}

export default BarContainer
