import React from 'react'
import "./Header.scss";
import Assets from "../../assets";
import Button from '../Button';

const Header = () => {

    const { Logo, MarkerIcon } = Assets;

    return (
        <header className="header">
            <img src={Logo} className="header__img" alt="Starbucks Logo" />

            <nav className="header__list header__list--menu">
                <a href="#/" className="header__item">Menu</a>
                <a href="#/" className="header__item">Rewards</a>
                <a href="#/" className="header__item">Gift Cards</a>
            </nav>

            <nav className="header__list header__list--btn">
                <a href="#/" className="header__item header__item--store">
                    <img src={MarkerIcon} className="header__marker" alt="location marker icon" />
                    <span>Find a store</span>
                </a>
                <Button text="Sign in" classType="white" />
                <Button text="Join now" classType="black" />
            </nav>
        </header>
    )
}

export default Header