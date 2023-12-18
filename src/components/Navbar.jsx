
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css'
import 'swiper/swiper-bundle.css';
import { Modal } from 'react-responsive-modal';
import Swiper from 'swiper';
import Auth from './Auth';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredLogin, setIsHoveredLogin] = useState(false);
    const [modalLogin, setLoginModal] = React.useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const swiper = new Swiper(".swiper", {
        speed: 500,
        allowTouchMove: false,
    });

    const usernames = ["rama", "viona", "zaenal", "arya"];
    const passwords = ["rama1", "viona1", "zaenal1", "arya1"];

    const credentials = usernames.map((username, index) => ({
        username: username,
        password: passwords[index]
    }));

    const loginStyle = {
        padding: '9px 25px',
        backgroundColor: isHoveredLogin ? '#31B4FE' : '#103178',
        color: isHovered ? '#ffffff' : '#ffffff',
        margin: '2rem'
    };
    const regisStyle = {
        padding: '9px 25px',
        backgroundColor: isHovered ? '#31B4FE' : '#ffffff',
        color: isHovered ? '#ffffff' : '#103178',
        transition: 'background-color 0.3s, color 0.3s'
    };

    return (
        <>
            <div className="mainmenu-area transparent v2" data-spy="affix" data-offset-top={197}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 row-flex">
                            <div className="site-brand">
                                <a href="#" className="logo">
                                    <img src="/src/assets/img/logo.png" alt="" style={{ width: '50%' }} />
                                </a>
                            </div>
                            <button className="burger">
                                <span className="bar" />
                                <span className="bar" />
                                <span className="bar" />
                            </button>
                            <div className="mainmenu">
                                <ul className="nav">
                                    <li><a href="#home-area">Home</a></li>
                                    <li><a href="#about-area">About</a></li>
                                    <li><a href="#service-area">Service</a></li>
                                    <li><a href="#testimonial-area">Testimonial</a></li>
                                    <li><a href="#contact-area">Contact</a></li>
                                </ul>
                            </div>
                            <div className="sign">
                                <button href="#product-area" className="bttn-4" style={loginStyle} onMouseEnter={() => setIsHoveredLogin(true)} onMouseLeave={() => setIsHoveredLogin(false)} onClick={() => setLoginModal(true)}>Sign In</button>
                                <button href="#product-area" className="bttn-4" style={regisStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            < Auth Modal={Modal} modalLogin={modalLogin} setInputValue={setInputValue} inputValue={inputValue} swiper={swiper} usernames={usernames} setLoginModal={setLoginModal} credentials={credentials} inputUsername={inputUsername}  setInputUsername={setInputUsername} inputPassword={inputPassword} setInputPassword={setInputPassword} />


        </>
    )
}

export default Navbar