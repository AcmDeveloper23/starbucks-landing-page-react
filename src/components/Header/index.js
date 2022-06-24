import React, { useState } from 'react'
import "./Header.scss";
import Assets from "../../assets";
import Button from '../Button';

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const { Logo, MarkerIcon } = Assets;

    const toogleMobileMenu = () => {
        const btn = document.getElementById('menu-btn')
        const nav = document.getElementById('header')

        btn.classList.toggle('open')
        nav.classList.toggle('hidden')
        document.body.classList.toggle('no-scroll')
    }

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

            {/* <!-- Hamburger Menu --> */}
            <button onClick={toogleMobileMenu} type="button" className="hamburger" id="menu-btn">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </header>
    )
}

export default Header