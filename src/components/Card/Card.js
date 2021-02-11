import React from 'react'
import classes from './Card.module.css'
import turk from '../../assets/icons/turk.png'
import klm from '../../assets/icons/klm.png'
import france from '../../assets/icons/airfrance.png'
import flot from '../../assets/icons/aeroflot.png'
import deflogo from '../../assets/icons/defaultLogo.png'
import Leg from '../Leg/Leg'
import { Button } from 'react-bootstrap'



const Card = ({ cardInfo }) => {


  // let logo = deflogo
  // if (cardInfo.logo === ' "Air France"') {
  //   logo = france
  // }

  return (
    <React.Fragment>
      {cardInfo ?
        <li className={classes.Leg}>
          <div className={`${classes.CardHeader} mb-3`}>
            <a href="#"><img className={classes.CardLogo} src={france} alt="logo"></img></a>
            <div className={classes.Pricewrap}>
              <span className={classes.CardPrice}>{`${cardInfo.price} руб`}</span>
              <span className={classes.CardText}>На одного взрослого пассажира</span>
            </div>
          </div>
          <div className={`${classes.LegRoute} mb-3`}>
            <span className={classes.LegRouteFrom}>{`${cardInfo.forwarddepCity} ${cardInfo.forwarddepAirpot}`} <a href="#" className={classes.LegBlue}>{`(${cardInfo.forwarddepAirpotCode})`}</a></span>
            <span className={classes.LegRouteArrow}></span>
            <span className={classes.LegRouteTo}>{`${cardInfo.forwardarrCity} ${cardInfo.forwardarrAirpot}`} <a href="#" className={classes.LegBlue}>{`(${cardInfo.forwardarrAirpotCode})`}</a></span>
          </div>
          <div className={classes.LegTime}>
            <div className={classes.LegTimeDep}>
              <span className={classes.LegTimeDepTime}>{`${cardInfo.forwarddepTimeHours}:${cardInfo.forwarddepTimeMinutes}`} &nbsp;</span>
              <span className={classes.LegTimeDepDate}>{`${cardInfo.forwarddepDate} ${cardInfo.forwarddepMounth} ${cardInfo.forwarddepDay}`}</span>
            </div>

            <div className={classes.LegRouteTime}>
              <span className={classes.LegRouteTimeIcon}></span>
              <span className={classes.LegRouteTimeClock}>{`${cardInfo.forwardtavelTimeHours} ч ${cardInfo.forwardtravelTimeMinute} мин`}</span>
            </div>

            <div className={classes.LegTimeArr}>
              <span className={classes.LegTimeArrDate}>{`${cardInfo.forwardarrDate} ${cardInfo.forwardarrMounth} ${cardInfo.forwardarrDay}`}  &nbsp;</span>
              <span className={classes.LegTimeArrTime}>{`${cardInfo.forwardarrTimeHours}:${cardInfo.forwardarrTimeMinutes}`}</span>
            </div>
          </div>

          <div className={classes.LegDevider}>
            <span className={classes.LegDeviderSplice}></span>
            <span className={classes.LegDeviderTransfer}>{cardInfo.forwardTransfer}</span>
            <span className={classes.LegDeviderSplice}></span>
          </div>

          <span className={classes.LegAirline}>Рейс выполняет {cardInfo.forwardairLine}</span>

          <span className={classes.BlueDevider}></span>


          <div className={`${classes.LegRoute} mb-3`}>
            <span className={classes.LegRouteFrom}>{`${cardInfo.backdepCity} ${cardInfo.backdepAirpot}`} <a href="#" className={classes.LegBlue}>{`(${cardInfo.backdepAirpotCode})`}</a></span>
            <span className={classes.LegRouteArrow}></span>
            <span className={classes.LegRouteTo}>{`${cardInfo.backarrCity} ${cardInfo.backarrAirpot}`} <a href="#" className={classes.LegBlue}>{`(${cardInfo.backarrAirpotCode})`}</a></span>
          </div>
          <div className={classes.LegTime}>
            <div className={classes.LegTimeDep}>
              <span className={classes.LegTimeDepTime}>{`${cardInfo.backdepTimeHours}:${cardInfo.backdepTimeMinutes}`} &nbsp;</span>
              <span className={classes.LegTimeDepDate}>{`${cardInfo.backdepDate} ${cardInfo.backdepMounth} ${cardInfo.backdepDay}`}</span>
            </div>

            <div className={classes.LegRouteTime}>
              <span className={classes.LegRouteTimeIcon}></span>
              <span className={classes.LegRouteTimeClock}>{`${cardInfo.backtavelTimeHours} ч ${cardInfo.backtravelTimeMinute} мин`}</span>
            </div>

            <div className={classes.LegTimeArr}>
              <span className={classes.LegTimeArrDate}>{`${cardInfo.backarrDate} ${cardInfo.backarrMounth} ${cardInfo.backarrDay}`} &nbsp;</span>
              <span className={classes.LegTimeArrTime}>{`${cardInfo.backarrTimeHours}:${cardInfo.backdepTimeMinutes}`}</span>
            </div>
          </div>

          <div className={classes.LegDevider}>
            <span className={classes.LegDeviderSplice}></span>
            <span className={classes.LegDeviderTransfer}>{cardInfo.backTransfer}</span>
            <span className={classes.LegDeviderSplice}></span>
          </div>

          <span className={classes.LegAirline}>Рейс выполняет {cardInfo.backairLine}</span>
          <Button variant="warning" className={classes.CardBtn}>Выбрать</Button>
        </li> :
        null}

    </React.Fragment>
  )
}

export default Card
