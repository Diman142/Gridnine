import React from 'react'
import classes from './Leg.module.css'

const Leg = ({ legInfo }) => {

  return (

    <React.Fragment>
      {legInfo.map((item, index) => {
        return (
          <li className={classes.Leg} key={index}>
            <div className={`${classes.LegRoute} mb-3`}>
              <span className={classes.LegRouteFrom}>{`${item.depCity} ${item.depAirpot}`} <a href="#" className={classes.LegBlue}>{`(${item.depAirpotCode})`}</a></span>
              <span className={classes.LegRouteArrow}></span>
              <span className={classes.LegRouteTo}>{`${item.arrCity} ${item.arrAirpot}`}<a href="#" className={classes.LegBlue}>{`(${item.arrAirpotCode})`}</a></span>
            </div>
            <div className={classes.LegTime}>
              <div className={classes.LegTimeDep}>
                <span className={classes.LegTimeDepTime}>{`${item.depTimeHours}:${item.depTimeMinutes}`} &nbsp;</span>
                <span className={classes.LegTimeDepDate}>{`${item.depDate}:${item.depDay}`}</span>
              </div>

              <div className={classes.LegRouteTime}>
                <span className={classes.LegRouteTimeIcon}></span>
                <span className={classes.LegRouteTimeClock}>{`${item.tavelTimeHours} ч ${item.travelTimeMinute} мин`}</span>
              </div>

              <div className={classes.LegTimeArr}>
                <span className={classes.LegTimeArrDate}>{`${item.arrDate}:${item.arrDay}`}  &nbsp;</span>
                <span className={classes.LegTimeArrTime}>{`${item.arrTimeHours}:${item.arrTimeMinutes}`}</span>
              </div>
            </div>

            <div className={classes.LegDevider}>
              <span className={classes.LegDeviderSplice}></span>
              <span className={classes.LegDeviderTransfer}>{legInfo.legInfo > 1 ? '1 пересадка' : 'Без пересадок'}</span>
              <span className={classes.LegDeviderSplice}></span>
            </div>

            <span className={classes.LegAirline}>Рейс выполняет {item.airLine}</span>

            <span className={classes.BlueDevider}></span>


            <div className={`${classes.LegRoute} mb-3`}>
              <span className={classes.LegRouteFrom}>{`${item.depCity} ${item.depAirpot}`} <a href="#" className={classes.LegBlue}>{`(${item.depAirpotCode})`}</a></span>
              <span className={classes.LegRouteArrow}></span>
              <span className={classes.LegRouteTo}>{`${item.arrCity} ${item.arrAirpot}`}<a href="#" className={classes.LegBlue}>{`(${item.arrAirpotCode})`}</a></span>
            </div>
            <div className={classes.LegTime}>
              <div className={classes.LegTimeDep}>
                <span className={classes.LegTimeDepTime}>{`${item.depTimeHours}:${item.depTimeMinutes}`} &nbsp;</span>
                <span className={classes.LegTimeDepDate}>{`${item.depDate}:${item.depDay}`}</span>
              </div>

              <div className={classes.LegRouteTime}>
                <span className={classes.LegRouteTimeIcon}></span>
                <span className={classes.LegRouteTimeClock}>{`${item.tavelTimeHours} ч ${item.travelTimeMinute} мин`}</span>
              </div>

              <div className={classes.LegTimeArr}>
                <span className={classes.LegTimeArrDate}>{`${item.arrDate}:${item.arrDay}`}  &nbsp;</span>
                <span className={classes.LegTimeArrTime}>{`${item.arrTimeHours}:${item.arrTimeMinutes}`}</span>
              </div>
            </div>

            <div className={classes.LegDevider}>
              <span className={classes.LegDeviderSplice}></span>
              <span className={classes.LegDeviderTransfer}>{legInfo.legInfo > 1 ? '1 пересадка' : 'Без пересадок'}</span>
              <span className={classes.LegDeviderSplice}></span>
            </div>

            <span className={classes.LegAirline}>Рейс выполняет {item.airLine}</span>

          </li>
        )
      })}
    </React.Fragment>

  )
}


export default Leg



