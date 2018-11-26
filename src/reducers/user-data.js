import { SET_DESTINATIONS } from '../actions/types'

const defaultState = {
  destinations: [
    {
      name: 'Tel Aviv',
      place_id: 'ChIJi3fyBh9c5kcRYJSMaMOCCwQ',
      duration: '3 days',
      days: [
        {
          activities: [
            { name: 'Frog watching' },
            { name: 'Baguette shopping' },
          ],
        },
      ],
    },
    {
      name: 'Paris',
      place_id: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
      duration: '3 days',
      days: [
        {
          activities: [
            { name: 'Frog watching' },
            { name: 'Baguette shopping' },
          ],
        },
      ],
    },
    {
      name: 'Seattle',
      place_id: 'ChIJVTPokywQkFQRmtVEaUZlJRA',
      duration: '3 days',
      days: [
        {
          activities: [
            { name: 'Grunging out' },
            { name: 'Driving to Vancouver' },
          ],
        },
        {
          activities: [
            { name: 'Visiting Microsoft' },
            { name: 'Watching the ocean' },
          ],
        },
      ],
    },
  ],
}

export default (state = defaultState, action) => {
  switch (action.type) {
  case SET_DESTINATIONS:
    return Object.assign({}, { destinations: action.destinations })
  default:
    return state
  }
}
