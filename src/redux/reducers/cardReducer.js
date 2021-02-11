import { CARD_DATA, CLEAR_DATA, CURRENT_CARD_DATA, CLEAR_CURRENT_DATA, ADD_RESULT_COUNT, CHANGE_FILTER_INFO, CLEAR_FILTER_INFO } from '../types'


const initialState = {
  cardInfo: [],
  currentCardInfo: [],
  filterInfo: [],
  amountCard: 2,
}

const cardReducer = (state = initialState, action) => {

  switch (action.type) {
    case CARD_DATA:
      return {
        ...state,
        cardInfo: state.cardInfo.concat([...action.payload]),
      }

    case CURRENT_CARD_DATA:
      return {
        ...state,
        currentCardInfo: state.currentCardInfo.concat([...action.payload]),
      }
    case CLEAR_DATA:
      return {
        ...state,
        cardInfo: [],
      }

    case CLEAR_CURRENT_DATA:
      return {
        ...state,
        currentCardInfo: []
      }
    case ADD_RESULT_COUNT:
      return {
        ...state,
        amountCard: action.payload
      }

    case CHANGE_FILTER_INFO:
      return {
        ...state,
        filterInfo: state.filterInfo.concat([...action.payload]),
      }

    case CLEAR_FILTER_INFO:
      return {
        ...state,
        filterInfo: []
      }
    default: return state
  }
}


export default cardReducer
