
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json()); 


app.post('/send-email', async (req, res) => {
  const { name, phone, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anna89197674575@gmail.com', 
      pass: 'mkfp fwfa gxsf qisr'       
    }
  });

  const mailOptions = {
    from: 'anna89197674575@gmail.com',
    to: 'anna89197674575@gmail.com', 
    subject: 'Новая заявка с сайта "Тур маршрут"',
    text: `Поступила заявка!\n\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}`,
    html: `
      <h2>Новая заявка с сайта "Тур маршрут"</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><em>Дата: ${new Date().toLocaleString()}</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Письмо отправлено!' });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    res.status(500).json({ error: 'Не удалось отправить письмо' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});