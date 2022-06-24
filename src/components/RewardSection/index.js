import React from 'react';
import "./RewardSection.scss";
import Button from '../Button';
import Assets from '../../assets';

const RewardSection = () => {

    const { Rewards } = Assets;

    return (
        <section className="rewards">
            <div className="rewards-imgBox">
                <img src={Rewards} alt="Coffee Image" className="rewards-imgBox__img" />
            </div>
            <div className="rewards-textBox">
                <h1>Summer is brighter with free treats.*</h1>
                <Button classType="btn--outline-white" text="Join Starbucks Rewards" />
            </div>
        </section>
    )
}

export default RewardSection