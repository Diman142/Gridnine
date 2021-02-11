import React from 'react'
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux'


const Controls = ({ controls, cardInfo, sortValue, minPriceValue, maxPriceValue, airlinesArr }) => (
  <Form>
    <Form.Group className="">

      {controls.map((control, index) => (
        <div className="d-flex" key={index + control}>
          <span>{control.name}</span>
          <Form.Control
            type={control.type}
            className="ml-3 mb-4 user-control"
            value={control.value}
            onChange={(event) => {
              control.handler(event.target.value, cardInfo, sortValue, minPriceValue, maxPriceValue, airlinesArr)
            }}
          />
        </div>
      ))}
    </Form.Group>
  </Form>
)

const mapStateToProps = (state) => ({
  minPriceValue: state.filter.minPrice,
  maxPriceValue: state.filter.maxPrice,
  cardInfo: state.getCards.cardInfo,
  sortValue: state.filter.sortValue,
  airlinesArr: state.filter.airlinesArr,
})


export default connect(mapStateToProps, null)(Controls)


