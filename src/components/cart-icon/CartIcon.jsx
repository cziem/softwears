import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actons'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.scss'
import { dispatch } from 'rxjs/internal/observable/range'

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)