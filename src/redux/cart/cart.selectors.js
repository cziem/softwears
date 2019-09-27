import { createSelector } from 'reselect'

const selectCart = ({ cart }) => cart

export const selectCartItems = createSelector(
  [selectCart],
  ({ cartItems }) => cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accQty, cartItem) => accQty + cartItem.quantity, 0)
)