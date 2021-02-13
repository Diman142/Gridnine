/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap';
import Radios from '../../components/Radios/Radios'
import Checks from '../../components/Checks/Checks'
import Controls from '../../components/Controls/Controls'
import { changeMinPrice, changeMaxPrice, airFilter } from '../../redux/actions/actions'
import classes from './FlightNav.module.css'

let aerCheckArr = []

const FlightNav = ({ sortValue, cardInfo, minPriceValue, maxPriceValue, changeMinPrice, changeMaxPrice, airCompany, airFilter, }) => {

  const radios = [{ name: '-По возрастанию цены', id: 'increase' }, { name: '-По убыванию цены', id: 'degrease' }, { name: '-По времени в пути', id: 'travelTime' }]
  const checks = [{ name: '-1 пересадка', price: "", id: 'oneTrans', className: 'filter-check' }, { name: '-без пересадок', price: "", id: 'noTrans', className: 'filter-check' }]
  const controls = [{ name: 'от', type: 'text', value: minPriceValue, handler: changeMinPrice, placeholder: '21049' }, { name: 'до', type: 'text', value: maxPriceValue, handler: changeMaxPrice, placeholder: '149335' }]


  const [airFlag, setAirFlag] = useState(false)

  useEffect(() => {
    if (airCompany.length) {
      setAirFlag(true)
    }
  }, [airCompany])

  return (
    <div className={classes.flightNav}>
      <Radios title="Сортировать" radiosInfo={radios} className="mb-5" />
      <Checks title="Фильтровать" checks={checks} />
      <Controls controls={controls} />

      <Form className="mb-5" id="aerofilters">
        <h5>Авиакомпании</h5>
        <Form.Group id="formGridCheckbox">
          {airFlag ? airCompany.map((check, index) => (
            <Form.Check
              className="mb-2 aeroCheck"
              type="checkbox"
              label={`${check.aierCompany} от ${check.price}`}
              key={index + check}
              id={check.aierCompany}
              onClick={(event) => {
                if (event.target.checked) {
                  aerCheckArr.push(event.target.id)
                  airFilter(cardInfo, aerCheckArr, sortValue, minPriceValue, maxPriceValue)
                } else {
                  aerCheckArr = aerCheckArr.filter((el) => el !== event.target.id)
                  airFilter(cardInfo, aerCheckArr, sortValue, minPriceValue, maxPriceValue)

                }
              }}
            />
          )) : <div>ЧТо-то не так</div>}
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
