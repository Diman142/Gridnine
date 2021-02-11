/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from 'react-bootstrap'
import classes from './Card.module.css'
import france from '../../assets/icons/airfrance.png'



const Card = ({ cardInfo }) =>


(
  <>
    {cardInfo ? (
      <li className={classes.Leg}>
        <div className={`${classes.CardHeader} mb-3`}>
          <a href="/#"><img className={classes.CardLogo} src={france} alt="logo" /></a>
          <div className={classes.Pricewrap}>
            <span className={classes.CardPrice}>{`${cardInfo.price} руб`}</span>
            <span className={classes.CardText}>На одного взрослого пассажира</span>
          </div>
        </div>
        <div className={`${classes.LegRoute} mb-3`}>
          <span className={classes.LegRouteFrom}>
            {`${cardInfo.forwarddepCity} ${cardInfo.forwarddepAirpot}`}
            {' '}
            <a href="/#" className={classes.LegBlue}>{`(${cardInfo.forwarddepAirpotCode})`}</a>
          </span>
          <span className={classes.LegRouteArrow} />
          <span className={classes.LegRouteTo}>
            {`${cardInfo.forwardarrCity} ${cardInfo.forwardarrAirpot}`}
            {' '}
            <a href="/#" className={classes.LegBlue}>{`(${cardInfo.forwardarrAirpotCode})`}</a>
          </span>
        </div>
        <div className={classes.LegTime}>
          <div className={classes.LegTimeDep}>
            <span className={classes.LegTimeDepTime}>
              {`${cardInfo.forwarddepTimeHours}:${cardInfo.forwarddepTimeMinutes}`}
              {' '}
&nbsp;
            </span>
            <span className={classes.LegTimeDepDate}>{`${cardInfo.forwarddepDate} ${cardInfo.forwarddepMounth} ${cardInfo.forwarddepDay}`}</span>
          </div>

          <div className={classes.LegRouteTime}>
            <span className={classes.LegRouteTimeIcon} />
            <span className={classes.LegRouteTimeClock}>{`${cardInfo.forwardtavelTimeHours} ч ${cardInfo.forwardtravelTimeMinute} мин`}</span>
          </div>

          <div className={classes.LegTimeArr}>
            <span className={classes.LegTimeArrDate}>
              {`${cardInfo.forwardarrDate} ${cardInfo.forwardarrMounth} ${cardInfo.forwardarrDay}`}
              {' '}
&nbsp;
            </span>
            <span className={classes.LegTimeArrTime}>{`${cardInfo.forwardarrTimeHours}:${cardInfo.forwardarrTimeMinutes}`}</span>
          </div>
        </div>

        <div className={classes.LegDevider}>
          <span className={classes.LegDeviderSplice} />
          <span className={classes.LegDeviderTransfer}>{cardInfo.forwardTransfer}</span>
          <span className={classes.LegDeviderSplice} />
        </div>

        <span className={classes.LegAirline}>
          Рейс выполняет
          {cardInfo.forwardairLine}
        </span>

        <span className={classes.BlueDevider} />


        <div className={`${classes.LegRoute} mb-3`}>
          <span className={classes.LegRouteFrom}>
            {`${cardInfo.backdepCity} ${cardInfo.backdepAirpot}`}
            {' '}
            <a href="/#" className={classes.LegBlue}>{`(${cardInfo.backdepAirpotCode})`}</a>
          </span>
          <span className={classes.LegRouteArrow} />
          <span className={classes.LegRouteTo}>
            {`${cardInfo.backarrCity} ${cardInfo.backarrAirpot}`}
            {' '}
            <a href="/#" className={classes.LegBlue}>{`(${cardInfo.backarrAirpotCode})`}</a>
          </span>
        </div>
        <div className={classes.LegTime}>
          <div className={classes.LegTimeDep}>
            <span className={classes.LegTimeDepTime}>
              {`${cardInfo.backdepTimeHours}:${cardInfo.backdepTimeMinutes}`}
              {' '}
&nbsp;
            </span>
            <span className={classes.LegTimeDepDate}>{`${cardInfo.backdepDate} ${cardInfo.backdepMounth} ${cardInfo.backdepDay}`}</span>
          </div>

          <div className={classes.LegRouteTime}>
            <span className={classes.LegRouteTimeIcon} />
            <span className={classes.LegRouteTimeClock}>{`${cardInfo.backtavelTimeHours} ч ${cardInfo.backtravelTimeMinute} мин`}</span>
          </div>

          <div className={classes.LegTimeArr}>
            <span className={classes.LegTimeArrDate}>
              {`${cardInfo.backarrDate} ${cardInfo.backarrMounth} ${cardInfo.backarrDay}`}
              {' '}
&nbsp;
            </span>
            <span className={classes.LegTimeArrTime}>{`${cardInfo.backarrTimeHours}:${cardInfo.backdepTimeMinutes}`}</span>
          </div>
        </div>

        <div className={classes.LegDevider}>
          <span className={classes.LegDeviderSplice} />
          <span className={classes.LegDeviderTransfer}>{cardInfo.backTransfer}</span>
          <span className={classes.LegDeviderSplice} />
        </div>

        <span className={classes.LegAirline}>
          Рейс выполняет
          {cardInfo.backairLine}
        </span>
        <Button variant="warning" className={classes.CardBtn}>Выбрать</Button>
      </li>
    ) :
      null}

  </>
)


export default Card
