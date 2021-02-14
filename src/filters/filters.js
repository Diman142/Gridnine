/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
export function TransferFilter(data) {

  if (!data.length) {
    return []
  }


  const firstFilter = document.querySelector('#oneTrans').checked
  const secondFilter = document.querySelector('#noTrans').checked

  let arr = []

  if (secondFilter && firstFilter) {
    arr = data.filter((item => {
      if (item.noTransfer || item.oneTransfer) {
        return item
      }
    }))

    return arr
  }

  if (firstFilter) {
    arr = data.filter((item => {
      if (item.oneTransfer) {
        return item
      }
    }))

    return arr
  }

  if (secondFilter) {
    arr = data.filter((item => {
      if (item.noTransfer) {
        return item
      }
    }))

    return arr
  }

  if (!firstFilter && !secondFilter) {
    arr = [...data]
    return arr
  }
}


export function sortsCards(sortParam, data) {
  if (!data.length) {
    return []
  }
  let arr = []

  if (sortParam === 'increase') {
    arr = data.sort((a, b) => +a.price > +b.price ? 1 : -1);

  }
  if (sortParam === 'degrease') {
    arr = data.sort((a, b) => +b.price > +a.price ? 1 : -1);
  }

  if (sortParam === 'travelTime') {
    arr = data.sort((a, b) => a.totalTime > b.totalTime ? 1 : -1);
  }

  return arr
}


export function minPriceFilter(data, minValue) {
  if (!minValue) {
    return data
  }

  return data.filter(item => +item.price > +minValue)
}


export function maxPriceFilter(data, maxValue) {
  if (!maxValue) {
    return data
  }
  return data.filter(item => +item.price < +maxValue)
}



export function companyFilter(data, companyArr) {

  if (!companyArr.length) {
    return data
  }

  let aeroArr = []

  companyArr.forEach(el => {
    aeroArr = [...aeroArr, ...data.filter(item => {
      if (item.logo === el) {
        return item
      }
    })]
  })

  return aeroArr

}

export function facetFilter(formSelector, filterdata) {

  let comapnySet = new Set()

  const checkForm = document.getElementById(`${formSelector}`)

  const checks = checkForm.querySelectorAll('.form-check-input')


  filterdata.forEach(item => {
    comapnySet.add(item.logo.trim())
  })

  comapnySet = Array.from(comapnySet)

  checks.forEach(el => {

    if (!(comapnySet.includes(el.id.trim()))) {
      el.setAttribute('disabled', true)
    } else {
      el.removeAttribute('disabled')
    }
  })

}


export function facettravelFilter(formSelector, filterdata) {

  const checkForm = document.getElementById(`${formSelector}`)

  const checks = checkForm.querySelectorAll('.form-check-input')

  checks.forEach((item => {
    if (item.id === "oneTrans") {
      item.setAttribute('disabled', true)
      filterdata.forEach(el => {
        if (el.oneTransfer) {
          item.removeAttribute('disabled')
          return true
        }
      })
    }

    if (item.id === "noTrans") {
      item.setAttribute('disabled', true)
      filterdata.forEach(el => {
        if (el.noTransfer) {
          item.removeAttribute('disabled')
          return true
        }
      })
    }
  }))


}
