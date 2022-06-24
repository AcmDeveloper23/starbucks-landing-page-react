import React, { useState } from 'react'
import "./Header.scss";
import Assets from "../../assets";
import Button from '../Button';

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const { Logo, MarkerIcon } = Assets;

    const toogleMobileMenu = () => {
        document.body.classList.toggle('no-scroll')
        setToggleMenu(!toggleMenu);
    }

    return (
        <>
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
                <button onClick={toogleMobileMenu} className={`hamburger ${toggleMenu && `hamburger--open`}`} id="menu-btn">
                    <span className="hamburger__top"></span>
                    <span className="hamburger__middle"></span>
                    <span className="hamburger__bottom"></span>
                </button>
            </header>

            <div className={`mobile-nav ${!toggleMenu ? 'hidden' : ''}`}>
                <ul className="mobile-nav__menu">
                    <li className="mobile-nav__item">
                        <a href="#/" className="mobile-nav__link">Menu</a>
                    </li>
                    <li className="mobile-nav__item">
                        <a href="#/" className="mobile-nav__link">Rewards</a>
                    </li>
                    <li className="mobile-nav__item">
                        <a href="#/" className="mobile-nav__link">Gift Cards</a>
                    </li>
                </ul>

                <nav className="mobile-nav__join-menu">
                    <Button text="Sign in" classType="white" />
                    <Button text="Join now" classType="black" />
                    <a href="#/" className="mobile-nav__list">
                        <img src={MarkerIcon} className="mobile-nav__icon" alt="location marker icon" />
                        <span>Find a store</span>
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Header