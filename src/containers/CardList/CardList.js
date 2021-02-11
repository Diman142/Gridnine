/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
import classes from './CardList.module.css'
import { getFlightsData, showMore, changeCardAmount } from '../../redux/actions/actions'

const CardList = ({ filterInfo, currentCardInfo, cardAmount, getFlightsData, showMore, changeCardAmount }) => {

  const [flag, setFlag] = useState(false)

  useEffect(() => {
    getFlightsData(cardAmount);
    setFlag(true)
  }, [])


  return (
    <>
      {flag ?
        currentCardInfo.map((cardInfo, index) => <Card cardInfo={cardInfo} key={index} />) : <span>Загрузка</span>}
      <button
        className={classes.CardListBtn}
        onClick={() => {
          const count = cardAmount + 2;
          changeCardAmount(count)
          showMore(count, filterInfo)
        }}
      >
        Показать еще
      </button>

    </>

  )
}


const mapStateToProps = (state) => ({
  filterInfo: state.getCards.filterInfo,
  cardInfo: state.getCards.cardInfo,
  currentCardInfo: state.getCards.currentCardInfo,
  cardAmount: state.getCards.amountCard
})

const mapDispatchToProps = {
  getFlightsData,
  showMore,
  changeCardAmount,
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
