import { combineReducers } from 'redux'
import modals from './modals'
import userData from './user-data'

export default combineReducers({ userData, modals })
