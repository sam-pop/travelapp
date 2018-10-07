import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export const destStyle = {
  float: 'left',
  display: 'inline-block',
  paddingLeft: '10px',
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

const formatDate = tripInfo =>
  `${tripInfo.tripStartDate.format('MMM Do')} - ${tripInfo.tripEndDate.format('MMM Do')}`

const TripView = ({ destinations, onClickDestination, onClickAddDestination, height, tripInfo }) =>
  <div style={{ height, width: '100%' }}>
    <div style={{ height: 40, textAlign: 'left', paddingLeft: '30px', paddingTop: '10px' }}>
      <span><h3 style={{display: 'inline'}}>{tripInfo.name}</h3></span>
      <h3 style={{ margin: 0, display: 'inline' }}>
        {`, ${tripInfo.numberOfDays} Days, ${formatDate(tripInfo)}`}
      </h3>
    </div>
    <div>
      {destinations.map((dest, destIndex) =>
        <div key={`${dest.name}-${destIndex}`} style={{ ...destStyle, height: height - 70 }} onClick={() => onClickDestination(dest, destIndex)}>
          <h1>{dest.name}</h1>
          <h2>{dest.duration}</h2>
        </div>)}
      <AddButton onClickAddDestination={onClickAddDestination} />
    </div>
  </div>

TripView.propTypes = {
  destinations: PropTypes.any,
  onClickDestination: PropTypes.func.isRequired,
  onClickAddDestination: PropTypes.func.isRequired,
  height: PropTypes.any,
  tripInfo: PropTypes.object
}

export default TripView
