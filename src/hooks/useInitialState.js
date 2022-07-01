import { useState } from 'react';

const initialState = {
  cart: [],
  scartIsOpen: false,
  menuIsOpen: false,
  menuIsOpenMob: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== payload),
    });
  };

  const toggleShopCart = () => {
    setState({
      ...state,
      scartIsOpen: !state.scartIsOpen,
    });
  };

  const toogleMenuDesk = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };
  const toogleMenuMob = () => {
    setState({
      ...state,
      menuIsOpenMob: !state.menuIsOpenMob,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleShopCart,
    toogleMenuDesk,
    toogleMenuMob,
  };
};

export default useInitialState;
