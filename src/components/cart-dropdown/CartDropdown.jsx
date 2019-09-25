import React from 'react'

import CustomButton from '../custom-button/customButton'

import './cart-dropdown.scss'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown