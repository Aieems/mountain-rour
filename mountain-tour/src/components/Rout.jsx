
import routeImg from '../images/route_point.svg';
import meadows from '../images/meadowsRomb.png';
import peak from '../images/peackRomb.png';
import lake from '../images/lakeRomb.png';
import camp from '../images/campRomb.png';

function Route() {
    return (
        <section className="route" id="route">
            <div className="name-about">
                <h2>маршрут</h2>
                <hr />
            </div>
            <img id="route-img" src={routeImg} alt="Маршрут" />
            <div className="stop-point">
                <div className="point point-1">
                    <div className="point__text">
                        <h3>Долина скворцов</h3>
                        <p>
                        ~<span>1800</span> м<br />
                        Начало пути. Луга, ручьи, птицы. Здесь будет снаряжение и краткий инструктаж.
                        </p>
                    </div>
                    <img src={meadows} alt="Долина Скворцов" className="photo" />
                </div>

                <div className="point point-2">
                    <img src={peak} alt="Перевал Каменный Зуб" className="photo" />
                    <div className="point__text">
                        <h3>Перевал Каменный Зуб</h3>
                        <p>
                        ~<span>2700</span> м<br />
                        Самый высокий пункт маршрута. Вид на всю долину.
                        </p>
                    </div>
                </div>

                <div className="point point-3">
                    <div className="point__text">
                        <h3>Озеро Серебряное</h3>
                        <p>
                        ~<span>2600</span> м<br />
                        Место ночёвки. Кристально чистая вода, зеркальная гладь. Утро здесь начинается с рассвета над водой.
                        </p>
                    </div>
                    <img src={lake} alt="Озеро Серебряное" className="photo" />
                </div>

                <div className="point point-4">
                    <img src={camp} alt="Лагерь Вершины" className="photo" />
                    <div className="point__text">
                        <h3>Лагерь Вершины</h3>
                        <p>~<span>2500</span> м<br />
                        Последняя точка. Здесь вы соберёте вещи, поедите ужин и отправитесь обратно. Но вид на закат заставит задержаться.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Route;