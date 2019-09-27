import { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const CartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      }

    default:
      return state
  }
}

export default CartReducer