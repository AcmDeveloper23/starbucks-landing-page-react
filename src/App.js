import React from 'react';
import Header from "./components/Header";
import "./styles/sass/home.scss";
import ContentBox from './components/ContentBox';
import {homePageData} from "./data";

const App = () => {

  return (
    <>
      <Header />
      <div className="container">
       {homePageData.length >= 1 && homePageData.map((item, i) => (
         <ContentBox key={i} item={item} index={i} />
       ))}
      </div>
    </>
  )
}

export default App