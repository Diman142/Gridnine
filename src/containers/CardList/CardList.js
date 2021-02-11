import React, { useState, useEffect } from 'react'

import Card from '../../components/Card/Card'
import { connect } from 'react-redux'
import classes from './CardList.module.css'
import { getFlightsData, showMore, changeCardAmount } from '../../redux/actions/actions'

const CardList = ({ filterInfo, currentCardInfo, cardAmount, getFlightsData, showMore, changeCardAmount }) => {

  const [flag, setFlag] = useState(false)

  useEffect(() => {
    getFlightsData(cardAmount);
    setFlag(true)
    console.log('effect', currentCardInfo)
  }, [])


  return (
    <React.Fragment>
      {flag ?
        currentCardInfo.map((cardInfo, index) => {
          return <Card cardInfo={cardInfo} key={index}></Card>
        }) : <span>Загрузка</span>
      }
      <button className={classes.CardListBtn} onClick={() => {
        let count = cardAmount + 2;
        changeCardAmount(count)
        showMore(count, filterInfo)
      }}>Показать еще</button>

    </React.Fragment>

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
