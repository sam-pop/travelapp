import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TripView from '../components/TripView'
import AddDestinationDialogBox from '../components/AddDestinationDialogBox/index'
import ReactModal from 'react-modal'
import * as modals from '../actions/modals'

ReactModal.setAppElement(document.getElementById('root'))

class TripViewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalDialogOpen: false,
    }
  }
  onClickAddDestination() {
    this.setState({ modalDialogOpen: true })
  }
  onDestinationSelection(newPlace) {
    const { hideAddDestinationModal } = this.props
    hideAddDestinationModal()
    this.props.addDestination(newPlace)
  }
  render() {
    const { hideAddDestinationModal, modalDialogOpen } = this.props
    return (
      <div>
        <TripView
          {...this.props}
          onClickAddDestination={this.onClickAddDestination.bind(this)}
          onClickDeleteDestination={this.props.onClickDeleteDestination}
          onTitleChange={this.props.onTitleChange}
          onDateChange={this.props.onDateChange}
        />
        <ReactModal isOpen={modalDialogOpen}>
          <h1 onClick={hideAddDestinationModal}>X</h1>
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
  onDateChange: PropTypes.func.isRequired,
  height: PropTypes.any,
  tripInfo: PropTypes.object,
}

const mapStateToProps = state => {
  return { modalDialogOpen: state.modals.showAddDestinationModal }
}

const mapDispatchToProps = dispatch => {
  return {
    hideAddDestinationModal: () => {
      const action = modals.hideAddDestinationModal()
      dispatch(action)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripViewContainer)

// export default TripViewContainer
