import { useState } from "react"

const initialState = {
  cart: [],
  scartIsOpen: false,
  menuIsOpen: false,
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart:[...state.cart, payload]
    })
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((_,index) => index !== payload)
    })
  }

  const toggleShopCart = () => {
    setState({
      ...state,
      scartIsOpen: !state.scartIsOpen,
    })
  }
  
  const toogleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    toggleShopCart,
    toogleMenu,
  }
}

export default useInitialState
