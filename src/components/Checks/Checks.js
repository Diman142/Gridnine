/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react'
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import { changeCurrentData, changeSortValue, clearCurrentData, changeFilteInfo, clearFilterInfo } from '../../redux/actions/actions'
import { sortsCards, TransferFilter, companyFilter } from '../../filters/filters'


const Checks = ({ airlinesArr, checks, title, cardInfo, changeCurrentData, clearCurrentData, changeFilteInfo, clearFilterInfo, sortValue }) => (
  <Form className="mb-5">
    <h5>{title || ""}</h5>
    <Form.Group id="formGridCheckbox">
      {checks.map((check, index) => (
        <Form.Check
          className={check.className}
          type="checkbox"
          label={check.price ? `${check.name} от ${check.price} ` : check.name}
          key={index + check}
          id={check.id}
          onClick={() => {
            clearFilterInfo()
            let filterData = sortsCards(sortValue, TransferFilter(cardInfo))
            filterData = [...companyFilter(filterData, airlinesArr)]
            changeFilteInfo(filterData)
            const currentData = filterData.slice(0, 2)
            clearCurrentData();
            changeCurrentData(currentData)
          }}
        />
      ))}
    </Form.Group>
  </Form>
)


const mapStateToProps = (state) => ({
  airlinesArr: state.filter.airlinesArr,
  cardInfo: state.getCards.cardInfo,
  currentCardInfo: state.getCards.currentCardInfo,
  cardAmount: state.getCards.amountCard,
  sortValue: state.filter.sortValue,
})

const mapDispatchToProps = {
  changeSortValue, clearCurrentData, changeCurrentData, changeFilteInfo, clearFilterInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(Checks)

