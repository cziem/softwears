import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.scss'

const checkoutBlock = [
  "Product", "Description", "Quantity", "Price", "Remove"
]

const genHeader = checkoutBlock.map(item =>
  <div className="header-block">
    <span>{item}</span>
  </div>
)

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      {genHeader}
    </div>
    {
      cartItems.map(cartItem => cartItem.name)
    }

    <div className="total">
      <span>TOTAL: ${total}.00</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)