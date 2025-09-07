import schoolBackpack from '../images/School Backpack.png';
import diningRoom from '../images/Dining Room.png';
import personalTrainer from '../images/Personal Trainer.png';
import clothes from '../images/Clothes.png';
import cap from '../images/Cap.png';
import bottleOfWater from '../images/Bottle of Water.png';
import plane from '../images/Plane.png';
import cash from '../images/Cash.png';

import React, { useEffect } from 'react';

function About(){
    useEffect(() => {
        const adjustDivider = () => {
            const card = document.querySelector(".info-card");
            const hr = document.getElementById("dashed-line");
            if (!card || !hr) return;
            const cardHeight = card.offsetHeight;
            hr.style.height = cardHeight + "px";
        };
        
        adjustDivider();
        window.addEventListener('resize', adjustDivider);

        return () => {
            window.removeEventListener('resize', adjustDivider);
        };
  }, []); 
    return(
        <section className="about" id="about">
            <div className="name-about">
                <h2>о туре</h2>
                <hr/>
            </div>
            <section className="info-card">        
                <div className="column ">
                    <h3>предоставляем:</h3>
                    <ul className="provided">
                        <li className="list">
                            <img src={schoolBackpack} alt=""/> 
                            <div>
                                <span>Снаряжение</span><br/>
                                <small>Рюкзак, палатка, спальный мешок</small>
                            </div>
                        </li>
                        <li className="list">
                            <img src={diningRoom} alt=""/>
                            <div>
                                <span>Питание</span><br/>
                                <small>Все блюда, чай, кофе</small>
                            </div>
                        </li>
                        <li className="list">
                            <img src={personalTrainer} alt=""/>
                            <div>
                                <span>Инструктор</span><br/>
                                <small>Опытный гид, безопасность</small>
                            </div>                  
                        </li>
                    </ul>
                </div>

                <div className="column ">
                    <h3>взять с собой:</h3>
                    <ul className="take-with">
                        <li className="list">
                            <img src={clothes} alt=""/>
                            <div>
                                <span>Теплая одежда</span>                            
                            </div>
                        </li>
                        <li className="list">
                            <img src={cap} alt=""/>
                            <div>
                                <span>Головной убор</span>                            
                            </div>
                        </li>
                        <li className="list">
                            <img src={bottleOfWater} alt=""/>
                            <div>
                                <span>Бутылка воды</span>                            
                            </div>                  
                        </li>
                    </ul>                
                </div>

                <div className="column ">
                    <h3>не включено:</h3>
                    <ul className="not-included">
                        <li className="list">
                            <img src={plane} alt=""/>
                            <div>
                                <span>Перелет туда/ <br/> обратно</span>         
                            </div>
                        </li>
                        <li className="list">
                            <img src={cash} alt=""/>
                            <div>
                                <span>Личные расходы</span>                   
                            </div>
                        </li>                    
                    </ul>           
                </div>

                <hr id="dashed-line"/>

                <div className="column price">
                    <h3><span className='price__text'>стоимость</span> тура с нами:</h3>
                    <div className="price-box">15.000₽</div>
                    <p>У нас нет шумных групп, только люди, которые хотят быть в природе</p>
                </div>
            </section>
        </section>
    );
}

export default About;