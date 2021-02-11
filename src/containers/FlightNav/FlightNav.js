import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import classes from './FlightNav.module.css'
import Radios from '../../components/Radios/Radios'
import Checks from '../../components/Checks/Checks'
import Controls from '../../components/Controls/Controls'
import { changeMinPrice, changeMaxPrice, airFilter } from '../../redux/actions/actions'
import { Form } from 'react-bootstrap';

let aerCheckArr = []

const FlightNav = ({ sortValue, cardInfo, minPriceValue, maxPriceValue, changeMinPrice, changeMaxPrice, airCompany, airFilter, }) => {

  const radios = [{ name: '-По возрастанию цены', id: 'increase' }, { name: '-По убыванию цены', id: 'degrease' }, { name: '-По времени в пути', id: 'travelTime' }]
  const checks = [{ name: '-1 пересадка', price: "", id: 'oneTrans', className: 'filter-check' }, { name: 'без пересадок', price: "", id: 'noTrans', className: 'filter-check' }]
  const controls = [{ name: 'от', type: 'text', value: minPriceValue, handler: changeMinPrice }, { name: 'до', type: 'text', value: maxPriceValue, handler: changeMaxPrice }]
  const airChecks = [{ name: 'Aэрофлот', price: '21123' }]


  const [airFlag, setAirFlag] = useState(false)

  console.log(airCompany)

  useEffect(() => {
    if (airCompany.length) {
      setAirFlag(true)
    }
  }, [airCompany])

  return (
    <div className={classes.flightNav}>
      <Radios title="Сортировать" radiosInfo={radios} className="mb-5"></Radios>
      <Checks title="Фильтровать" checks={checks}></Checks>
      <Controls controls={controls}></Controls>

      <Form className="mb-5">
        <h5>Авиакомпании</h5>
        <Form.Group id="formGridCheckbox">
          {airFlag ? airCompany.map((check, index) => {
            return <Form.Check className="mb-2 aeroCheck" type="checkbox" label={`${check.aierCompany} от ${check.price}`} key={index + check} id={check.aierCompany} onClick={(event) => {
              if (event.target.checked) {
                aerCheckArr.push(event.target.id)
                airFilter(cardInfo, aerCheckArr, sortValue, minPriceValue, maxPriceValue)
              } else {
                aerCheckArr = aerCheckArr.filter((el) => el !== event.target.id)
                airFilter(cardInfo, aerCheckArr, sortValue, minPriceValue, maxPriceValue)

              }
            }} />
          }) : <div>ЧТо-то не так</div>}
        </Form.Group>
      </Form>

    </div>
  )
}


const mapStateToProps = (state) => ({
  cardInfo: state.getCards.cardInfo,
  minPriceValue: state.filter.minPrice,
  maxPriceValue: state.filter.maxPrice,
  airCompany: state.aero.companylist,
  sortValue: state.filter.sortValue,

})

const mapDispatchToProps = {
  changeMinPrice, changeMaxPrice, airFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightNav)
