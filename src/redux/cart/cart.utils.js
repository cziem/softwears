export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  return existingCartItem ?
    cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 } :
        cartItem) :
    [...cartItems, { ...itemToAdd, quantity: 1 }]
};
