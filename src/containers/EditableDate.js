import React from 'react'
import PropTypes from 'prop-types'
import OutsideAlerter from './OutsideAlerter'
import moment from 'moment'

const titleDateFormat = 'MMM Do'
const inputValueDateFormat = 'YYYY-MM-DD'

class EditableDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || moment(),
      editingMode: false,
    }
  }
  onClick() {
    this.setState({ editingMode: true })
  }
  onChange(event) {
    this.setState({ value: moment(event.target.value) })
  }
  onDone() {
    this.props.onChange(this.state.value)
  }
  onClickOutside() {
    this.setState({ editingMode: false }, () => {
      this.onDone()
    })
  }
  render() {
    return (
      <span onClick={this.onClick.bind(this)}>
        <OutsideAlerter onClickOutside={this.onClickOutside.bind(this)}>
          {this.state.editingMode ? (
            <input
              type="date"
              value={this.state.value.format(inputValueDateFormat)}
              onChange={this.onChange.bind(this)}
            />
          ) : (
            <h3 style={{ display: 'inline' }}>
              {this.state.value.format(titleDateFormat)}
            </h3>
          )}
        </OutsideAlerter>
      </span>
    )
  }
}

EditableDate.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
}

export default EditableDate
