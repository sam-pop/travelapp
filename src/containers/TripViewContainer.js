import React from 'react'
import PropTypes from 'prop-types'
import TripView from '../components/TripView'
import AddDestinationDialogBox from '../components/AddDestinationDialogBox'
import ReactModal from 'react-modal'

ReactModal.setAppElement(document.getElementById('root'))

class TripViewContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalDialogOpen: false
    }
  }
  onClickAddDestination () {
    this.setState({ modalDialogOpen: true })
  }
  onDestinationSelection (newPlace) {
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
  }
  render () {
    return (
      <div>
        <TripView
          {...this.props}
          onClickAddDestination={this.onClickAddDestination.bind(this)}
          onClickDeleteDestination={this.props.onClickDeleteDestination}
          onTitleChange={this.props.onTitleChange}
        />
        <ReactModal isOpen={this.state.modalDialogOpen} >
          <h1 onClick={() => { this.setState({ modalDialogOpen: false }) }}>X</h1>
          <AddDestinationDialogBox onAdd={this.onDestinationSelection.bind(this)} />
        </ReactModal>
      </div>
    )
  }
}

TripViewContainer.propTypes = {
  destinations: PropTypes.any,
  onClickDestination: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onClickDeleteDestination: PropTypes.func.isRequired,
  height: PropTypes.any,
  tripInfo: PropTypes.object
}

export default TripViewContainer
