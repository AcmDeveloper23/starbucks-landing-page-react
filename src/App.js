import React from 'react'
import Header from "./components/Header"
import RewardSection from './components/RewardSection'
import DrinksSection from './components/DrinksSection'
import CandySection from './components/CandySection'
import DeliverySection from './components/DeliverySection'
import "./styles/sass/home.scss";
import ContentBox from './components/ContentBox'
import {homePageData} from "./data";

const App = () => {

  const data = []
  return (
    <>
      <Header />
      <div className="container">
        <RewardSection />

       {homePageData.length >= 1 && homePageData.map((item, i) => (
         <ContentBox key={i} item={item} />
       ))}
       
      </div>
    </>
  )
}

export default App