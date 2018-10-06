import React from 'react'
import PlacesAutocomplete, {
  geocodeByAddress
} from 'react-places-autocomplete'

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
          console.log(results)
          this.setState({ placeInfo: results[0] })
        }
      })
      .catch(error => console.error('Error', error))
  }

  render () {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange.bind(this)}
        onSelect={this.handleSelect.bind(this)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <h2>{this.state.placeInfo && this.state.placeInfo.address_components[0].long_name}</h2>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item'
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                return (
                  <div key={`suggestion-${index}`}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
            <div>
              <h1 onClick={() => this.props.onSelect(this.state.placeInfo)} style={{ float: 'left' }}>Add</h1>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}

export { LocationSearchInput }
