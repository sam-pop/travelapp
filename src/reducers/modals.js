import { SHOW_ADD_DESTINATION_MODAL } from '../actions/types'

const defaultState = {
  showAddDestinationModal: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
  case SHOW_ADD_DESTINATION_MODAL:
    return Object.assign({}, state, {
      showAddDestinationModal: action.show,
    })
  default:
    return state
  }
}
