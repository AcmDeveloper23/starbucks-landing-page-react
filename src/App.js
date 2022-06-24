import React from 'react';
import "./styles/sass/home.scss";
import Header from "./components/Header";
import ContentBox from './components/ContentBox';
import { homePageData } from "./data";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Header />
      <main className="container">
        {homePageData.length >= 1 && homePageData.map((item, i) => (
          <ContentBox key={i} item={item} index={i} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App