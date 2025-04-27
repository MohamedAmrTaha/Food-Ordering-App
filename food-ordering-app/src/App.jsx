import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MealList from './components/MealsList/MealsList'
import Header from './components/Header/Header'
import CartContextProvider from './Store/CartContext'
import UserPreferenceContextProvider from './Store/UserPreferenceContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  
  return (
    <>
      <CartContextProvider>
        <UserPreferenceContextProvider>
          <Header />
          <MealList />
          <Cart/>
          <Checkout/>
        </UserPreferenceContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
