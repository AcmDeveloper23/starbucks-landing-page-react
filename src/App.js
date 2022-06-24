import React from 'react'
import Header from "./components/Header"
import RewardSection from './components/RewardSection'
import DrinksSection from './components/DrinksSection'
import CandySection from './components/CandySection'
import DeliverySection from './components/DeliverySection'
import "./styles/sass/home.scss";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <RewardSection />
        <DrinksSection />
        <CandySection />
        <DeliverySection />
      </div>
    </>
  )
}

export default App