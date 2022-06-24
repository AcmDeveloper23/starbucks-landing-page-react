import React from 'react'
import Assets from '../../assets';
import "./Footer.scss";

const Footer = () => {

    const {
        SpotifyLogo,
        FacebookLogo,
        PinterestLogo,
        InstagramLogo,
        YoutubeLogo,
        TwitterLogo
    } = Assets;

    return (
        <footer className="footer">
            <nav className="footer-socialMedia__lists">
                <a href="#/" className="footer-socialMedia__link">
                    <img src={SpotifyLogo} alt="Spotify Logo" className="footer-socialMedia__img" />
                </a>
                <a href="#/" className="footer-socialMedia__link">
                    <img src={FacebookLogo} alt="Facebook Logo" className="footer-socialMedia__img" />
                </a>
                <a href="#/" className="footer-socialMedia__link">
                    <img src={PinterestLogo} alt="Pinterest Logo" className="footer-socialMedia__img" />
                </a>
                <a href="#/" className="footer-socialMedia__link">
                    <img src={InstagramLogo} alt="Instagram Logo" className="footer-socialMedia__img" />
                </a>
                <a href="#/" className="footer-socialMedia__link">
                    <img src={YoutubeLogo} alt="Youtube Logo" className="footer-socialMedia__img" />
                </a>
                <a href="#/" className="footer-socialMedia__link">
                    <img src={TwitterLogo} alt="Twitter Logo" className="footer-socialMedia__img" />
                </a>
            </nav>

            <ul className="footer-menu">
                <li className="footer-menu__item">
                    <a href="#/" className="footer-menu__link">Privacy Policy</a>
                </li>
                <li className="footer-menu__item">
                    <span>|</span>
                    <a href="#/" className="footer-menu__link">Terms of Use</a>
                </li>
                <li className="footer-menu__item">
                    <span>|</span>
                    <a href="#/" className="footer-menu__link">CA Supplu Chain Act</a>
                </li>
                <li className="footer-menu__item">
                    <span>|</span>
                    <a href="#/" className="footer-menu__link">Cookie Preferences</a>
                </li>
            </ul>

            <p className="footer__copyright-text">&copy; 2022 Starbucks Coffe Company. All rights reserved.</p>
        </footer>
    )
}

export default Footer;