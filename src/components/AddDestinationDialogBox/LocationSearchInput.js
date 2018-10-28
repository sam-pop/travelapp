import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import PlacesAutocomplete, {
  geocodeByAddress
} from 'react-places-autocomplete'

import './style.css'

class LocationSearchInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = { address: '', placeInfo: null }
  }

  handleChange (address) {
    this.setState({ address })
  }

  handleSelect (address) {
    geocodeByAddress(address)
      .then(results => {
        if (results.length === 1) {
          this.setState({ placeInfo: results[0] })
        }
      })
      .catch(error => console.error('Error', error))
  }

  render () {
    return (
      <div style={{ width: 500, margin: '0 auto' }}>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange.bind(this)}
          onSelect={this.handleSelect.bind(this)}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <Fragment>
              <h2>
                {this.state.placeInfo &&
                  this.state.placeInfo.address_components[0].long_name}
              </h2>
              <input
                {...getInputProps({
                  placeholder: 'Search Places...',
                  className: 'location-search-input'
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion, index) => {
                  const className = suggestion.active
                    ? 'suggestion-item suggestion-item--active'
                    : 'suggestion-item'
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#dadada', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' }
                  return (
                    <div
                      key={`suggestion-${index}`}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <strong>{suggestion.formattedSuggestion.mainText}</strong>{' '}
                      <small>
                        {suggestion.formattedSuggestion.secondaryText}
                      </small>
                    </div>
                  )
                })}
              </div>
              <div />
            </Fragment>
          )}
        </PlacesAutocomplete>
        <button
          onClick={() => this.props.onSelect(this.state.placeInfo)}
          className="btn"
          type="button"
        >
          <span>Add</span>
        </button>
      </div>
    )
  }
}

LocationSearchInput.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export { LocationSearchInput }
