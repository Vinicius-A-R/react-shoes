export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
}

export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: 'CART_UPDATE_AMOUNT',
    payload: { id, amount },
  };
}
