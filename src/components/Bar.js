import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export const destStyle = {
  float: 'left',
  display: 'inline-block',
  paddingLeft: '10px',
  height: '180px',
  width: '140px',
  borderWidth: '5px',
  borderStyle: 'solid',
  margin: '4px',
  padding: 0,
  textAlign: 'center'
}

const AddButton = ({ onClickAddDestination }) =>
  <div style={{ width: '140px', float: 'left', display: 'inline-block', paddingTop: '70px' }}>
    <Button onClick={onClickAddDestination} />
  </div>

AddButton.propTypes = {
  onClickAddDestination: PropTypes.func
}

const Bar = ({ destinations, onClickDestination, onClickAddDestination }) =>
  <div style={{ height: '200px', width: '100%' }}>
    {destinations.map((dest, destIndex) =>
      <div key={`${dest.name}-${destIndex}`} style={destStyle} onClick={() => onClickDestination(dest, destIndex)}>
        <h1>{dest.name}</h1>
        <h2>{dest.duration}</h2>
      </div>)}
    <AddButton onClickAddDestination={onClickAddDestination} />
  </div>

Bar.propTypes = {
  destinations: PropTypes.any,
  onClickDestination: PropTypes.func.isRequired,
  onClickAddDestination: PropTypes.func.isRequired
}

export default Bar
