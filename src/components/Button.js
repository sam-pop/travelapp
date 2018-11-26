import React from 'react'
import PropTypes from 'prop-types'
import '@material/fab/dist/mdc.fab.css'
import { Fab } from '@rmwc/fab'
import { connect } from 'react-redux'
import * as modals from '../actions/modals'

const Button = ({ showAddDestinationModal }) => (
  <Fab icon="+" className="fab" onClick={showAddDestinationModal} />
)

Button.propTypes = {
  showAddDestinationModal: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    showAddDestinationModal: () => {
      const action = modals.showAddDestinationModal()
      dispatch(action)
    },
  }
}

export default connect(null,
  mapDispatchToProps
)(Button)
