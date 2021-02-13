/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import classes from './Card.module.css'
import france from '../../assets/icons/airfrance.png'
import klm from '../../assets/icons/klm.png'
import flot from '../../assets/icons/aeroflot.png'
import defaultLogo from '../../assets/icons/defaultLogo.png'
import turk from '../../assets/icons/turk.png'
import polish from '../../assets/icons/polish.png'
import brussles from '../../assets/icons/brussels.png'
import fin from '../../assets/icons/fin.png'
import baltic from '../../assets/icons/baltic.png'
import alitalia from '../../assets/icons/alitalia.png'
import pegusus from '../../assets/icons/pegusus.png'

function getLogo(logo) {
  switch (logo) {
    case "Air France":
      return france
    case "KLM":
      return klm
    case "Аэрофлот - российские авиалинии":
      return flot
    case "TURK HAVA YOLLARI A.O.":
      return turk
    case "LOT Polish Airlines":
      return polish
    case "Brussels Airlines":
      return brussles
    case "Finnair Oyj":
      return fin
    case "Air Baltic Corporation A/S":
      return baltic
    case "Alitalia Societa Aerea Italiana":
      return alitalia
    case "Pegasus Hava Tasimaciligi A.S.":
      return pegusus
    default: return defaultLogo
  }
}


const Card = ({ cardInfo }) => {

  const [logo, setLogo] = useState(defaultLogo);

  useEffect(() => {
    setLogo(getLogo(cardInfo.logo))
  }, [cardInfo])

  return (
    <>
      {cardInfo ? (
        <li className={classes.Leg}>
          <div className={`${classes.CardHeader} mb-3`}>
            <a href="/#"><img className={classes.CardLogo} src={logo} alt="logo" /></a>
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

            {`Рейс выполняет ${cardInfo.forwardairLine}`}
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
            {`Рейс выполняет ${cardInfo.backairLine}`}
          </span>
          <Button variant="warning" className={classes.CardBtn}>Выбрать</Button>
        </li>
      ) :
        null}

    </>
  )

}

export default Card
