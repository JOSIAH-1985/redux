import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Cart/cart'

export default configureStore({
  reducer: {
    cart: cartReducer
  }
})