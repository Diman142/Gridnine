import { SORT_VALUE, FILTER_VALUE, MIN_PRICE, MAX_PRICE, AIRLINE_FILTER, CLEAR_AIRLINE_FILTER } from '../types'


const initialState = {
  sortValue: "increase",
  filterValue: '',
  minPrice: '',
  maxPrice: '',
  airlinesArr: [],
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_VALUE:
      return { ...state, sortValue: action.payload }
    case FILTER_VALUE:
      return { ...state, filterValue: action.payload }
    case MIN_PRICE:
      return { ...state, minPrice: action.payload }
    case MAX_PRICE:
      return { ...state, maxPrice: action.payload }
    case AIRLINE_FILTER: {
      return {
        ...state,
        airlinesArr: state.airlinesArr.concat([...action.payload]),
      }
    }
    case CLEAR_AIRLINE_FILTER: {
      return {
        ...state,
        airlinesArr: []
      }
    }
    default: return state
  }
}


export default filterReducer
