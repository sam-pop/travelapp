import React from 'react'
import PropTypes from 'prop-types'
import TripView from '../components/TripView'
import AddDestinationDialogBox from '../components/AddDestinationDialogBox/index'
import ReactModal from 'react-modal'

ReactModal.setAppElement(document.getElementById('root'))

class TripViewContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalDialogOpen: false,
      destinations: []
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
          onTitleChange={this.props.onTitleChange}
        />
        <ReactModal isOpen={this.state.modalDialogOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => {
              this.setState({ modalDialogOpen: false })
            }}
            style={{
              float: 'right',
              cursor: 'pointer'
            }}
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <AddDestinationDialogBox
            onAdd={this.onDestinationSelection.bind(this)}
          />
        </ReactModal>
      </div>
    )
  }
}

TripViewContainer.propTypes = {
  destinations: PropTypes.any,
  onClickDestination: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  height: PropTypes.any,
  tripInfo: PropTypes.object
}

export default TripViewContainer
