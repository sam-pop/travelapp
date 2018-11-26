import { SHOW_ADD_DESTINATION_MODAL } from './types'

export const showAddDestinationModal = () => {
  const action = { type: SHOW_ADD_DESTINATION_MODAL, show: true }
  return action
}

export const hideAddDestinationModal = () => {
  const action = { type: SHOW_ADD_DESTINATION_MODAL, show: false }
  return action
}
