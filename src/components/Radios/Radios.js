/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { changeData, changeCurrentData, changeSortValue, clearData, clearCurrentData, changeFilteInfo, clearFilterInfo } from '../../redux/actions/actions'
import { sortsCards } from '../../filters/filters'


const Radios = ({ filterInfo, radiosInfo, title = "", changeSortValue, clearCurrentData, changeCurrentData, changeFilteInfo, clearFilterInfo }) => (
  <Form>
    <h5>{title}</h5>
    <Form.Group>
      {radiosInfo.map((radioInfo, index) => (
        <Form.Check
          key={index + radioInfo.name}
          type="radio"
          label={radioInfo.name}
          name="formHorizontalRadios"
          onClick={(event) => {
            changeSortValue(event.target.id)
            const sortdata = sortsCards(event.target.id, filterInfo);
            clearFilterInfo();
            changeFilteInfo(sortdata)
            const currentData = sortdata.slice(0, 2)
            clearCurrentData();
            changeCurrentData(currentData)
          }}
          id={radioInfo.id}
        />
      ))}
    </Form.Group>
  </Form>
)


const mapStateToProps = (state) => ({
  currentCardInfo: state.getCards.currentCardInfo,
  cardAmount: state.getCards.amountCard,
  sortValue: state.filter.sortValue,
  filterInfo: state.getCards.filterInfo
})

const mapDispatchToProps = {
  changeSortValue, changeData, clearData, clearCurrentData, changeCurrentData, changeFilteInfo, clearFilterInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(Radios)
