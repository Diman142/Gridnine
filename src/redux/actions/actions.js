import axios from 'axios'
import { SORT_VALUE, FILTER_VALUE, MIN_PRICE, MAX_PRICE, AIRLINE_FILTER, CLEAR_AIRLINE_FILTER, CARD_DATA, CLEAR_DATA, CURRENT_CARD_DATA, CLEAR_CURRENT_DATA, ADD_RESULT_COUNT, CLEAR_FILTER_INFO, CHANGE_FILTER_INFO, SET_COMPANY_CHECK } from '../types'
import { minPriceFilter, maxPriceFilter } from '../../filters/filters'
import { sortsCards, TransferFilter, companyFilter } from '../../filters/filters'


function getRusDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "пн"
    case 2:
      return "вт"
    case 3:
      return "ср"
    case 4:
      return "чт"
    case 5:
      return "пт"
    case 6:
      return "сб"
    case 7:
      return "вс"
    default: return NaN
  }
}


function getRusMonth(monthNumber) {
  switch (monthNumber) {
    case 0:
      return "янв"
    case 1:
      return "фев"
    case 2:
      return "марта"
    case 3:
      return "апр"
    case 4:
      return "мая"
    case 5:
      return "июня"
    case 6:
      return "июля"
    case 7:
      return "авг"
    case 8:
      return "сент"
    case 9:
      return "окт"
    case 10:
      return "нояб"
    case 11:
      return "дек"
    default: return NaN
  }
}

export function changeMinPrice(price, data, sortParam, minValue, maxValue, airlinesArr) {

  return dispatch => {
    dispatch({ type: MIN_PRICE, payload: price })
    let arr = minPriceFilter(data, price)
    arr = [...maxPriceFilter(arr, maxValue)]
    arr = [...companyFilter(arr, airlinesArr)]
    arr = [...TransferFilter(arr)]
    arr = [...sortsCards(sortParam, arr)]
    dispatch({ type: CLEAR_FILTER_INFO })
    dispatch({ type: CHANGE_FILTER_INFO, payload: arr })
    dispatch({ type: CLEAR_CURRENT_DATA })
    if (arr.length) {
      dispatch({ type: CURRENT_CARD_DATA, payload: arr.slice(0, 2) })
    }
  }
}

export function changeMaxPrice(price, data, sortParam, minValue, maxValue, airlinesArr) {
  return dispatch => {
    dispatch({ type: MAX_PRICE, payload: price })
    let arr = maxPriceFilter(data, price)
    arr = [...minPriceFilter(arr, minValue)]
    arr = [...companyFilter(arr, airlinesArr)]
    arr = [...TransferFilter(arr)]
    arr = [...sortsCards(sortParam, arr)]
    dispatch({ type: CLEAR_FILTER_INFO })
    dispatch({ type: CHANGE_FILTER_INFO, payload: arr })
    dispatch({ type: CLEAR_CURRENT_DATA })
    if (arr.length) {
      dispatch({ type: CURRENT_CARD_DATA, payload: arr.slice(0, 2) })
    }
  }
}


export function changeAirCompany(data) {
  return {
    type: SET_COMPANY_CHECK,
    payload: data
  }
}

export function getAeroCompany(data) {
  let count = 0;
  let mySet = new Set();
  let priceArr = []
  let prevPrice = Infinity
  let currprice = null
  let result = []

  data.forEach(item => {
    mySet.add(item.flight.carrier.caption)
  })

  for (let item of mySet.values()) {
    data.forEach(el => {
      if (el.flight.carrier.caption === item) {
        currprice = Math.min(prevPrice, el.flight.price.total.amount)
        prevPrice = currprice
      }
    })
    priceArr.push(currprice)
  };

  for (let item of mySet.values()) {
    result.push({ aierCompany: item, price: priceArr[count] })
    count++
  }
  return result
}

export function changeFilteInfo(filterInfo) {
  return dispatch => {
    dispatch({ type: CHANGE_FILTER_INFO, payload: filterInfo })
  }
}



export function airFilter(data, filterArr, sortParam, minValue, maxValue) {
  return dispatch => {
    dispatch({ type: CLEAR_AIRLINE_FILTER })
    dispatch({ type: AIRLINE_FILTER, payload: filterArr })
    let arr = companyFilter(data, filterArr)
    arr = [...minPriceFilter(arr, minValue)]
    arr = [...maxPriceFilter(arr, maxValue)]
    arr = [...TransferFilter(arr)]
    arr = [...sortsCards(sortParam, arr)]

    dispatch({ type: CLEAR_FILTER_INFO })
    dispatch({ type: CHANGE_FILTER_INFO, payload: arr })
    dispatch({ type: CLEAR_CURRENT_DATA })
    if (arr.length) {
      dispatch({ type: CURRENT_CARD_DATA, payload: arr.slice(0, 2) })
    }
  }
}

export function clearFilterInfo() {
  return dispatch => {
    dispatch({ type: CLEAR_FILTER_INFO })
  }
}

export function changeSortValue(sortValue) {
  return dispatch => {
    dispatch({
      type: SORT_VALUE,
      payload: sortValue
    })
  }
}

export function changeData(data) {
  return dispatch => {
    dispatch({
      type: CARD_DATA,
      payload: data
    })
  }
}

export function changeCurrentData(data) {
  return dispatch => {
    dispatch({
      type: CURRENT_CARD_DATA,
      payload: data
    })
  }
}

export function clearCurrentData() {
  return dispatch => {
    dispatch({ type: CLEAR_CURRENT_DATA })
  }
}

export function clearData() {
  return dispatch => {
    dispatch({
      type: CLEAR_DATA,
    })
  }
}

export function changeCardAmount(amount) {
  return dispatch => {
    dispatch({ type: ADD_RESULT_COUNT, payload: amount })
  }
}

function getFlightData(flightData = {}) {

  let forwardSegmentsLength = flightData.flight.legs[0].segments.length
  let backwardSegmentsLength = flightData.flight.legs[1].segments.length


  if (!(flightData.flight && flightData.flight.price && flightData.flight.legs[0].segments.length && flightData.flight.legs[1].segments.length && flightData.flight.legs[0].segments[0].departureDate && flightData.flight.legs[0].segments[forwardSegmentsLength - 1].arrivalDate && flightData.flight.legs[1].segments[0].departureDate && flightData.flight.legs[1].segments[backwardSegmentsLength - 1].arrivalDate && flightData.flight.legs[0].segments[0].departureAirport && flightData.flight.legs[0].segments[0].departureAirport.uid && flightData.flight.legs[0].segments[0].departureCity && flightData.flight.legs[0].segments[forwardSegmentsLength - 1].arrivalCity && flightData.flight.legs[0].segments[forwardSegmentsLength - 1].arrivalAirport.uid && flightData.flight.legs[0].segments[forwardSegmentsLength - 1].arrivalAirport && flightData.flight.legs[1].segments[0].departureCity && flightData.flight.legs[1].segments[0].departureAirport && flightData.flight.legs[1].segments[0].departureAirport.uid && flightData.flight.legs[1].segments[backwardSegmentsLength - 1].arrivalCity && flightData.flight.legs[1].segments[backwardSegmentsLength - 1].arrivalAirport && flightData.flight.legs[1].segments[backwardSegmentsLength - 1].arrivalAirport.uid && flightData.flight.legs[1].segments[backwardSegmentsLength - 1].airline)) {
    return null
  }

  let totalPrice = flightData.flight.price.total.amount

  let fordepdate = new Date(flightData.flight.legs[0].segments[0].departureDate)

  let forardate = new Date(flightData.flight.legs[0].segments[forwardSegmentsLength - 1].arrivalDate)

  let backDepdate = new Date(flightData.flight.legs[1].segments[0].departureDate)

  let backArrdate = new Date(flightData.flight.legs[1].segments[backwardSegmentsLength - 1].arrivalDate)

  let totalTime = (backArrdate - backDepdate) + (forardate - fordepdate)

  let forwardTimeHours = Math.floor((forardate - fordepdate) / 1000 / 3600)
  let forwardTimeMinute = Math.floor((forardate - fordepdate) / 1000 / 60 % 60)

  let backTimeHours = Math.floor((backArrdate - backDepdate) / 1000 / 3600)
  let backTimeMinute = Math.floor((backArrdate - backDepdate) / 1000 / 60 % 60)

  let forTransfer = "Без пересадок"
  let backTransfer = "Без пересадок"
  let forOneTransefer = false
  let forWithoutTransfer = true
  let backOneTransefer = false
  let backWithoutTransfer = true
  let oneTransfer = false
  let noTransfer = true
  let forsegmentsLength = flightData.flight.legs[0].segments.length
  let backsegmentsLength = flightData.flight.legs[1].segments.length

  if (forsegmentsLength == 2) {
    forTransfer = "1 пересадка"
    forOneTransefer = true
    forWithoutTransfer = false
    oneTransfer = true
    noTransfer = false
  }

  if (forsegmentsLength > 2) {
    forTransfer = `${forsegmentsLength} пересадки`
    forOneTransefer = false
    forWithoutTransfer = false
    noTransfer = false
  }

  if (backsegmentsLength == 2) {
    backTransfer = "1 пересадка"
    backOneTransefer = true
    backWithoutTransfer = false
    oneTransfer = true
    noTransfer = false
  }

  if (backsegmentsLength > 2) {
    backTransfer = `${backsegmentsLength} пересадки`
    backOneTransefer = false
    backWithoutTransfer = false
    noTransfer = false
  }

  if (backOneTransefer && forOneTransefer) {
    oneTransfer = false
    noTransfer = false
  }



  let obj = {
    logo: flightData.flight.carrier.caption,
    forwarddepAirpot: flightData.flight.legs[0].segments[0].departureAirport.caption,
    forwarddepAirpotCode: flightData.flight.legs[0].segments[0].departureAirport.uid,
    forwarddepCity: flightData.flight.legs[0].segments[0].departureCity.caption,
    forwarddepDay: getRusDay(fordepdate.getDay()),
    forwarddepTimeHours: fordepdate.getHours(),
    forwarddepTimeMinutes: fordepdate.getMinutes(),
    forwarddepDate: fordepdate.getDate(),
    forwarddepMounth: getRusMonth(fordepdate.getMonth()),


    forwardarrAirpot: flightData.flight.legs[0].segments[forwardSegmentsLength - 1].arrivalCity.caption,
    forwardarrAirpotCode: flightData.flight.legs[0].segments[forwardSegmentsLength - 1].arrivalAirport.uid,
    forwardarrCity: flightData.flight.legs[0].segments[forwardSegmentsLength - 1].arrivalAirport.caption,
    forwardarrTimeHours: forardate.getHours(),
    forwardarrTimeMinutes: forardate.getMinutes(),
    forwardarrDate: forardate.getDate(),
    forwardarrMounth: getRusMonth(forardate.getMonth()),
    forwardarrDay: getRusDay(forardate.getDay()),

    forwardtavelTimeHours: forwardTimeHours,
    forwardtravelTimeMinute: forwardTimeMinute,

    forwardTransfer: forTransfer,
    forwardairLine: flightData.flight.legs[0].segments[0].airline.caption,

    backdepCity: flightData.flight.legs[1].segments[0].departureCity.caption,
    backdepAirpot: flightData.flight.legs[1].segments[0].departureAirport.caption,
    backdepAirpotCode: flightData.flight.legs[1].segments[0].departureAirport.uid,
    backdepTimeHours: backDepdate.getHours(),
    backdepTimeMinutes: backDepdate.getMinutes(),
    backdepDate: backDepdate.getDate(),
    backdepMounth: getRusMonth(backDepdate.getMonth()),
    backdepDay: getRusDay(backDepdate.getDay()),


    backarrCity: flightData.flight.legs[1].segments[backwardSegmentsLength - 1].arrivalCity.caption,
    backarrAirpot: flightData.flight.legs[1].segments[backwardSegmentsLength - 1].arrivalAirport.caption,
    backarrAirpotCode: flightData.flight.legs[1].segments[backwardSegmentsLength - 1].arrivalAirport.uid,
    backarrTimeHours: backArrdate.getHours(),
    backarrTimeMinutes: backArrdate.getMinutes(),
    backarrDate: backArrdate.getDate(),
    backarrMounth: getRusMonth(backArrdate.getMonth()),
    backarrDay: getRusDay(backArrdate.getDay()),

    backtavelTimeHours: backTimeHours,
    backtravelTimeMinute: backTimeMinute,

    backTransfer: backTransfer,
    backairLine: flightData.flight.legs[1].segments[backwardSegmentsLength - 1].airline.caption,

    price: totalPrice,
    totalTime: totalTime,
    oneTransfer: oneTransfer,
    noTransfer: noTransfer
  }


  return obj
}



export function getFlightsData(amountCard = 2) {
  return async dispatch => {
    try {
      let response = await axios.get('http://localhost:3000/result')


      let userdata = []
      let currentData = []


      response.data.flights.forEach((item, index) => {
        if (getFlightData(item)) {
          userdata.push(getFlightData(item))
        }
      })

      getAeroCompany(response.data.flights)

      dispatch(changeAirCompany(getAeroCompany(response.data.flights)))

      dispatch(changeData(userdata))
      dispatch(changeFilteInfo(userdata))
      currentData = userdata.slice(0, amountCard)
      dispatch(changeCurrentData(currentData))
    } catch (e) {
      console.error(e)
    }
  }
}

export function showMore(amount, data) {

  let currentData = data.slice(amount - 2, amount)

  return dispatch => {
    //dispatch(clearCurrentData())
    dispatch(changeCurrentData(currentData))
  }
}
