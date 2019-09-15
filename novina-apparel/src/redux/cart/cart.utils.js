export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCarItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (exisitingCarItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
