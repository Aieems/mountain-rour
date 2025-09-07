
import mountain1 from '../images/mountain1.png';
import mountain3 from '../images/mountain3.png';
import fog1 from '../images/fog1.png';
import fog2 from '../images/fog2.png';
import fog3 from '../images/fog3.png';
import fog4 from '../images/fog4.png';
import fog5 from '../images/fog5.png';
import arrow from '../images/Arrow 1.svg'; 

import React, { useEffect } from 'react';

function Hero() {
    useEffect(() => {
        const mountain3 = document.getElementById('mountain3');
        if (mountain3) {
            mountain3.style.opacity = '0';
            mountain3.onload = function () {
                mountain3.classList.add('animate-mountain3');
            };
            mountain3.onerror = function () {
                mountain3.classList.add('animate-mountain3');
            };
        }
    }, []);
    return (
        <section className="hero" id="hero">
            <div className="mountains">
                <img id="mountain1" src={mountain1} className="mountain mountain-left" alt="Левая гора" />
                <img id="mountain3" src={mountain3} className="mountain mountain-right" alt="Правая гора" />
            </div>

            <h1 id="hero-text__left" className="hero-text">тур</h1>
            <h1 id="hero-text__right" className="hero-text">маршрут</h1>

            <div className="left-info">
                <div className="panel-info">
                <div className="panel-info__block">
                    <h3>2500-2800</h3>
                    <p>метров над <br /> уровнем моря</p>
                </div>
                <div className="panel-info__block">
                    <h3>Много красивых локаций</h3>
                    <p>от долин до озёр, от рассветов до закатов</p>
                </div>
                <div className="panel-info__block">
                    <h3>Для новичков и опытных туристов</h3>
                    <p>потому что горы <br />— для всех</p>
                </div>
                </div>

                <button className="application-button">
                <div className="application-button__circle"></div>
                <p className="application-button__text">Оставить заявку</p>
                <img className="application-button__arrow" src={arrow} alt="Стрелка" />
                </button>

                <p className="bottom-text-button">Ваше время в горах начинается здесь!</p>
            </div>

            <div className="fog">
                <img style={{ '--stork': 1 }} src={fog1} alt="Туман" />
                <img style={{ '--stork': 2 }} src={fog2} alt="Туман" />
                <img style={{ '--stork': 3 }} src={fog3} alt="Туман" />
                <img style={{ '--stork': 4 }} src={fog4} alt="Туман" />
                <img style={{ '--stork': 5 }} src={fog5} alt="Туман" />
                <img style={{ '--stork': 10 }} src={fog1} alt="Туман" />
                <img style={{ '--stork': 9 }} src={fog2} alt="Туман" />
                <img style={{ '--stork': 8 }} src={fog3} alt="Туман" />
                <img style={{ '--stork': 7 }} src={fog4} alt="Туман" />
                <img style={{ '--stork': 6 }} src={fog5} alt="Туман" />
            </div>
        </section>
    );
}

export default Hero;