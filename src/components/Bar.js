import React from 'react'
import PropTypes from 'prop-types'

const destStyle = {
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

const Bar = ({ destinations }) =>
  <div style={{ height: '200px', width: '100%' }}>
    {destinations.map(dest =>
      <div key={dest.name} style={destStyle}>
        <h1>{dest.name}</h1>
        <h2>{dest.duration}</h2>
      </div>)}
  </div>

Bar.propTypes = {
  destinations: PropTypes.any
}

export default Bar
