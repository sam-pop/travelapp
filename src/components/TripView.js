import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import EditableText from '../containers/EditableText'
import EditableDate from '../containers/EditableDate'
import moment from 'moment'
import { IconButton } from '@rmwc/icon-button'
import '@material/icon-button/dist/mdc.icon-button.css'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const DestinationCard = ({
  dest,
  height,
  onClick,
  onClickDeleteDestination,
}) => (
  <div
    style={{
      ...destStyle,
      height,
      position: 'relative',
    }}
    onClick={onClick}
  >
    <p
      style={{
        marginTop: '5px',
        marginBottom: '1px',
        marginLeft: '10px',
        textAlign: 'left',
        fontSize: 'small',
      }}
    >
      {dest.name}
    </p>
    <div
      style={{
        position: 'absolute',
        left: '80px',
        top: '-10px',
      }}
    >
      <IconButton
        icon="delete"
        onClick={event => {
          // Prevent parent from handling the onClick
          event.stopPropagation()
          onClickDeleteDestination(dest)
        }}
      />
    </div>

    <hr
      style={{
        display: 'block',
        height: '1px',
        border: 0,
        borderTop: '1px solid #ccc',
        margin: '10px 1px',
        padding: 0,
      }}
    />
    <h2>
      {moment
        .duration(moment(dest.end_date).diff(moment(dest.start_date)))
        .asDays() + ' days'}
    </h2>
  </div>
)

DestinationCard.propTypes = {
  dest: PropTypes.object.isRequired,
  height: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  onClickDeleteDestination: PropTypes.func.isRequired,
}

export const destStyle = {
  float: 'left',
  display: 'inline-block',
  paddingLeft: '10px',
  width: '120px',
  borderWidth: '5px',
  borderStyle: 'solid',
  margin: '4px',
  padding: 0,
  textAlign: 'center',
}

const AddButton = ({ onClickAddDestination }) => (
  <div
    style={{
      width: '140px',
      float: 'left',
      display: 'inline-block',
      paddingTop: '70px',
    }}
  >
    <Button onClick={onClickAddDestination} />
  </div>
)

AddButton.propTypes = {
  onClickAddDestination: PropTypes.func,
}

const InlineString = ({ value }) => (
  <div style={{ display: 'inline' }}>
    <h3 style={{ margin: 0, display: 'inline' }}>{value}</h3>
  </div>
)

InlineString.propTypes = {
  value: PropTypes.string.isRequired,
}

const TripView = ({
  onClickDestination,
  onClickAddDestination,
  height,
  tripInfo,
  onTitleChange,
  onDateChange,
  onClickDeleteDestination,
  destinations,
}) => (
  <div style={{ height, width: '100%' }}>
    <div
      style={{
        height: 40,
        textAlign: 'left',
        paddingLeft: '30px',
        paddingTop: '10px',
      }}
    >
      <EditableText
        value={tripInfo.name}
        onChange={value => onTitleChange(value)}
      />
      <InlineString
        value={`, ${tripInfo.tripEndDate.diff(
          tripInfo.tripStartDate,
          'days'
        )} Days, `}
      />
      <EditableDate
        value={tripInfo.tripStartDate}
        onChange={date => onDateChange({ tripStartDate: date })}
      />
      <InlineString value=" - " />
      <EditableDate
        value={tripInfo.tripEndDate}
        onChange={date => onDateChange({ tripEndDate: date })}
      />
    </div>

    <div>
      <Droppable droppableId={'yuyuyu'} type="PERSON" direction="horizontal" >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              ...destStyle,
              height: 150,
              width: 700,
              position: 'relative',
              backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',
              display: 'flex',
              alignItems: 'start',
            }}
            {...provided.droppableProps}
          >
            {provided.placeholder}

            {destinations.map((dest, destIndex) => {
              return (
                <Draggable
                  key={dest.place_id}
                  draggableId={dest.place_id}
                  index={destIndex}
                >
                  {(dragProvided, dragSnapshot) => (
                    <div
                      ref={dragProvided.innerRef}
                      key={`${dest.name}-${destIndex}`}
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                    >
                      <DestinationCard
                        dest={dest}
                        height={height - 70}
                        onClick={() => onClickDestination(dest, destIndex)}
                        onClickDeleteDestination={onClickDeleteDestination}
                      />
                    </div>
                  )}
                </Draggable>
              )
            })}
          </div>
        )}
      </Droppable>
    </div>

    <div>
      <AddButton onClickAddDestination={onClickAddDestination} />
    </div>
  </div>
)

TripView.propTypes = {
  destinations: PropTypes.any,
  onTitleChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onClickDestination: PropTypes.func.isRequired,
  onClickAddDestination: PropTypes.func.isRequired,
  onClickDeleteDestination: PropTypes.func.isRequired,
  height: PropTypes.any,
  tripInfo: PropTypes.object,
}

export default TripView
