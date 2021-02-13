export function getRusDay(dayNumber) {
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


export function getRusMonth(monthNumber) {
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

export function addZero(str) {
  if (str.toString().length === 1) {
    return `0${str}`
  } return str
}
