import React from 'react'
import Map from '../components/Map'

const google = window.google
// needed for mysterious Google reasons
const fakeElement = document.createElement('div')

const convertPlaceIdToLongLat = (placeId) => new Promise((resolve, reject) => {
  const service = new google.maps.places.PlacesService(fakeElement)
  service.getDetails({ placeId }, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      resolve(place)
    }
  })
})

const fakeData = {
  'name': 'Trip to China',
  'description': 'this was fun',
  'destinations': [
    {
      'name': 'Beijing',
      'description': "China's capital",
      'image': '',
      'start_date': '2017-04-05T18:25:43.511Z',
      'end_date': '2017-04-09T18:25:43.511Z',
      'place_id': 'ChIJuSwU55ZS8DURiqkPryBWYrk',
      'activites': [
        {
          'type': 'attraction',
          'name': 'Summer Palace',
          'description': 'Lakefront palace renowned for its ornate temples & artworks plus its lavishly landscaped grounds.',
          'image': '',
          'date': '2017-04-06T09:25:43.511Z',
          'duration': '3.5',
          'time_of_day': 'morning',
          'place_id': 'ChIJP4_Ducf4AjQRMqEETHex2UU',
          'cost': '30 CNY'
        },
        {
          'type': 'accomodation',
          'name': 'Beijing 161 Lama Temple Courtyard Hotel',
          'description': 'Guests liked the clean, updated rooms, though some said maintenance could be improved · Some guests mentioned bathroom cleanliness could be improved',
          'image': '',
          'date': '2017-04-06T09:25:43.511Z',
          'duration': '',
          'time_of_day': '',
          'place_id': 'ChIJ1aQVUrWs8TURsbj_v6Z_7yA',
          'cost': '300 CNY'
        },
        {
          'type': 'transportation',
          'name': 'flight Beijing -> Xian',
          'description': 'CA1231 9:35 Terminal 1 on time',
          'image': '',
          'date': '2017-04-09T09:25:43.511Z',
          'duration': '1',
          'time_of_day': 'morning',
          'place_id': '',
          'cost': '860 CNY'
        }
      ]
    },
    {
      'name': 'Xian',
      'description': "China's old capital",
      'image': '',
      'start_date': '2017-04-09T18:25:43.511Z',
      'end_date': '2017-04-11T18:25:43.511Z',
      'place_id': 'ChIJuResIul5YzYRLliUp_1m1IU',
      'activites': [
        {
          'type': 'Attraction',
          'name': "Emperor Qinshihuang's Mausoleum Site Museum",
          'description': 'Attraction renowned for lifelike sculptures of terra-cotta warriors built around the 3rd century BC.',
          'image': '',
          'date': '2017-04-09T09:25:43.511Z',
          'duration': '3',
          'time_of_day': 'afternoon',
          'place_id': 'ChIJowMUgi2nZDYRxz_j6XQ',
          'cost': '350 CNY'
        }
      ]
    }
  ]
}

const somewhereAroundCapetown = {
  lat: -33.55,
  lng: 18.25
}

class MapContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      places: []
    }
  }

  componentDidMount () {
    const placeIds = fakeData.destinations.map(dest => dest.place_id)
    const promises = placeIds.map(convertPlaceIdToLongLat)

    Promise.all(promises)
      .then(places => {
        console.log('got places info', places)
        console.log('locations are: ', places.map(p => p.geometry.location.lat()))
        this.setState({ places })
      })
  }

  render () {
    return (
      <div>
        <Map places={this.state.places}
          center={this.state.places.length === 0 ? somewhereAroundCapetown
            : {
              lat: this.state.places[0].geometry.location.lat(),
              lng: this.state.places[0].geometry.location.lng()
            }}/>
      </div>
    )
  }
}

export default MapContainer
