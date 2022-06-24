import React from 'react'
import "./CandySection.scss";
import Button from '../Button';
import Assets from '../../assets';

const CandySection = () => {

  const { Candy } = Assets;

  return (
    <section className="candy">
      <div className="candy-imgBox">
        <img src={Candy} alt="Candy image" className="candy-imgBox__img" />
      </div>
      <div className="candy-textBox">
        <h2>Hooray for cookies and cake</h2>
        <p>The new Cookies & Cream Cake Pop is a happy mix of chocolate cake, crumbled cookies and white chocolaty icing.</p>
        <Button classType="btn--outline-white" text="Join Starbucks Rewards" />
      </div>
    </section>
  )
}

export default CandySection;