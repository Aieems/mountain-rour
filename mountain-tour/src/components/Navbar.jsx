
import logo from '../images/logo.png';
import Phone from '../images/Phone.png';
import Email from '../images/Email.png';
import Telegram from '../images/Telegram.png';

function Navbar() {
    return (
        <nav className="main-nav">
            <a href="#hero">
                <img className="main-nav__logo" src={logo} alt="Логотип" />
            </a>
            <ul className="main-nav__menu">
                <li><a href="#about">О туре</a></li>
                <li><a href="#route">Маршрут</a></li>
                <li><a href="#request">Заявка</a></li>
            </ul>
            <ul className="main-nav__icon">
                <li><a href="#"><img src={Phone} alt="Телефон" /></a></li>
                <li><a href="#"><img src={Email} alt="Email" /></a></li>
                <li><a href="https://t.me/aieems"><img src={Telegram} alt="Telegram" /></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;