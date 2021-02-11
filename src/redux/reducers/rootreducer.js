import { combineReducers } from 'redux'
import filterReducer from './filterreducer'
import cardReducer from './cardReducer'
// eslint-disable-next-line import/no-named-as-default
import aeroReducer from './aeroReducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  getCards: cardReducer,
  aero: aeroReducer,
})

export default rootReducer
