import React from 'react'
import Bar from '../components/Bar'

const fakeData = {
  destinations: [
    {
      name: 'Paris',
      duration: '3 days'
    },
    {
      name: 'Seattle',
      duration: '3 days'
    }
  ]
}

class BarContainer extends React.Component {
  render () {
    return (
      <Bar destinations={fakeData.destinations} />
    )
  }
}

export default BarContainer
