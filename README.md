# mountain-rour
Сайт для организации и продвижения горного тура: информирует о программе, маршруте, включённых услугах и позволяет оставить заявку, которая придет на почту админу.

# Технологии
- Frontend: React, JavaScript, HTML5, CSS3 (Flexbox, Grid, переменные)
- Хуки React: useState, useEffect
- Backend: Node.js + Express
- Отправка писем: Nodemailer (через Gmail)
- Безопасность: CORS, валидация формы
- Анимации: CSS @keyframes, transition, transform

### useEffect — для динамических изменений DOM
В компоненте Hero хук useEffect используется для плавного появления правой горы (mountain3) после её загрузки.  
```js
useEffect(() => {
  const mountain3 = document.getElementById('mountain3');
  if (mountain3) {
    mountain3.style.opacity = '0';
    mountain3.onload = () => mountain3.classList.add('animate-mountain3');
  }
}, []);
```
### useEffect с обработчиком ресайза — адаптивная линия-разделитель
В компоненте About хук useEffect добавляет обработчик изменения размера окна, чтобы динамически подстраивать высоту вертикальной пунктирной линии между колонками под высоту самого высокого блока.
```js
useEffect(() => {
  const adjustDivider = () => {
    const card = document.querySelector(".info-card");
    const hr = document.getElementById("dashed-line");
    if (!card || !hr) return;
    hr.style.height = card.offsetHeight + "px";
  };
  adjustDivider();
  window.addEventListener('resize', adjustDivider);
  return () => window.removeEventListener('resize', adjustDivider);
}, []);
```
### useState — управление состоянием формы
В компоненте Request используется useState для отслеживания успешной отправки формы:
```js
const [submitted, setSubmitted] = useState(false);
```
### Бэкенд: Express + Nodemailer
Файл server.js запускает сервер на порту 3001, который:
- Принимает POST-запросы с формы
- Отправляет письмо на указанный email
- Использует Gmail SMTP (с App Password)

# Использование
1. Клонируйте репозиторий:
```sh
git clone https://github.com/aieems/mountain-rout.git
cd mountain-rout
```
3. Установите зависимости:
```sh
npm install
```
5. Запустите сервер (отправка email):
```sh
node server.js
```
7. Запустите фронтенд (в другом терминале):
```sh
npm start
```
