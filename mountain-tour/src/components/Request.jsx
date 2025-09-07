
import mountainFooter from '../images/mountain2.png';
import { useState } from 'react';


function Request() {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async (e) => {
  e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });

        if (response.ok) {
            setSubmitted(true);
        } 
        else {
            alert('Ошибка отправки. Попробуй позже.');
        }
    } 
    catch (error) {
        console.error('Ошибка:', error);
        alert('Не удалось подключиться к серверу');
    }

    e.target.reset();
};

    return (
        <section className="request" id="request">
            <div className="name-about">
                <h2>Заявка</h2>
                <hr />
            </div>

            <img id="mountain-footer" src={mountainFooter} alt="Гора внизу" />

            <div className="request-card">
                <div className="request-card__text">
                    <h3>хочешь присоединиться?</h3>
                    <p>Тогда оставляй заявку и мы с тобой свяжемся :)</p>
                </div>

                <form id="request-card__form" onSubmit={handleSubmit}>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="ФИО"
                        required
                    />
                    <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="Номер телефона"
                        required
                    />
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="Почта"
                        required
                    />
                    <button id="form-button" type="submit">
                        Отправить
                    </button>
                </form>
            </div>
        </section>
  );
}

export default Request;