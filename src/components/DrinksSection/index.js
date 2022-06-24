import React from 'react'
import "./DrinksSection.scss";
import Button from '../Button';
import Assets from '../../assets';

const DrinksSection = () => {

  const { Drinks } = Assets;

  return (
    <section className="drinks">
      <div className="drinks-textBox">
        <h2>Summer’s brightest new drinks</h2>
        <p>Introducing the Pineapple Passionfruit Starbucks Refreshers® beverage and the Starbucks® Paradise Drink with creamy coconutmilk.</p>
        <Button text="Learn more" classType="btn--white" />
      </div>
      <div className="drinks-imgBox">
        <img src={Drinks} alt="Cool Drinks" className="drinks-imgBox__img" />
      </div>
    </section>
  )
}

export default DrinksSection;