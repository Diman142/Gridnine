import { SET_COMPANY_CHECK, CLEAR_COMPANY_CHECK } from '../types'

const initialState = {
  companylist: []
}

export const aeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY_CHECK:
      return {
        ...state,
        companylist: state.companylist.concat([...action.payload]),
      }
    case CLEAR_COMPANY_CHECK:
      return {
        ...state,
        companylist: []
      }
    default: return state
  }
}

export default aeroReducer
