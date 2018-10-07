import React from 'react'
import PropTypes from 'prop-types'
import { destStyle } from './TripView'
import Button from './Button'

const AddButton = ({ onClickAddDay }) =>
  <div style={{ width: '140px', float: 'left', display: 'inline-block', paddingTop: '45px' }}>
    <Button onClick={onClickAddDay} />
  </div>

AddButton.propTypes = {
  onClickAddDay: PropTypes.func
}

const SingleDestinationBar = ({ destination, destinationIndex, onClickBack, onClickAddDay, height }) =>
  <div style={{ height, width: '100%' }}>
    <h2 style={{ textAlign: 'left', marginLeft: '10px', marginBottom: '2px' }}>{destination.name}</h2>
    <div onClick={() => onClickBack()} style={{ height: '100%', padding: '30px', float: 'left' }}>
      Back
    </div>
    {destination.days.map((day, dayIndex) =>
      <div key={`day-${dayIndex}`} style={{ ...destStyle, height: '140px' }}>
        <h2 style={{ margin: 0 }}>Day {dayIndex + 1}</h2>
        <ul style={{ padding: 0, paddingLeft: '5px' }}>
          {day.activities.map((act, actIndex) =>
            <li key={`day-${day}-act-${actIndex}`} style={{ listStyleType: 'none' }}>
              <p style={{ textAlign: 'left' }}>{act.name}</p>
            </li>)}
        </ul>
      </div>
    )}
    <AddButton onClickAddDay={() => onClickAddDay(destinationIndex)} />
  </div>

SingleDestinationBar.propTypes = {
  destination: PropTypes.any,
  destinationIndex: PropTypes.number.isRequired,
  onClickBack: PropTypes.func,
  onClickAddDay: PropTypes.func.isRequired,
  height: PropTypes.any
}

export default SingleDestinationBar
