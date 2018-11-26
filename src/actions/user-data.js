import { SET_DESTINATIONS } from './types'

export const setDestinations = destinations => {
  const action = { type: SET_DESTINATIONS, destinations }
  return action
}
