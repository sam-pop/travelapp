import React from 'react'
import PropTypes from 'prop-types'
import { LocationSearchInput } from './LocationSearchInput'

const AddDestinationDialogBox = ({ onAdd }) => (
  <div>
    <div style={{ width: '300px', margin: 0, float: 'left' }}>
      <LocationSearchInput onSelect={onAdd} />
    </div>
  </div>
)

AddDestinationDialogBox.propTypes = {
  onAdd: PropTypes.func,
}

export default AddDestinationDialogBox
