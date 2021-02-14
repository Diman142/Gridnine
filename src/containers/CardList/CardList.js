/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react'
import Loader from "react-loader-spinner";
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
import classes from './CardList.module.css'
import { getFlightsData, showMore, changeCardAmount } from '../../redux/actions/actions'


const CardList = ({ filterInfo, currentCardInfo, cardAmount, getFlightsData, showMore, changeCardAmount }) => {

  const [isLoading, setisLoading] = useState(false)

  useEffect(async () => {
    await getFlightsData(cardAmount);
    setisLoading(true)
  }, [])




  return (
    <>
      {isLoading ? (
        <>
          <ul>
            {currentCardInfo.map((cardInfo, index) => <Card cardInfo={cardInfo} key={index} />

            )}
          </ul>
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
        : (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            className="text-center mt-5"
          />
        )}
    </>

  )
}


const mapStateToProps = (state) => ({
  filterInfo: state.getCards.filterInfo,
  cardInfo: state.getCards.cardInfo,
  currentCardInfo: state.getCards.currentCardInfo,
  cardAmount: state.getCards.amountCard,
})

const mapDispatchToProps = {
  getFlightsData,
  showMore,
  changeCardAmount,
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
