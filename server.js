const express =require('express');
const server = express();

server.use(express.urlencoded({extended: true}));
server.get('/', (req,res) => {
    console.log(req.headers);
    console.log(req.query);
    res.send(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Предложение</title>
 </head>
 <body>
  <h1>Вход </h1>
   
  <form method = "POST">
      <input type="text" name="username">
      <button type="submit">enter</button>
   </form>

 </body>
</html>`);
});

server.post('/', (req, res) => {
    console.log(req.body.username);
    res.cookie('username', req.body.username);

    res.setHeader('Set-Cookie', ['username=Danzan', 'language=javascript']);

    res.send(`!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
     <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <title>Пример веб-страницы</title>
     </head>
     <body>
      <h1>Заголовок</h1>
      <!-- Комментарий -->
      <p> Привет ${req.body.username}</p>
     </body>
    </html>`);
});

server.listen(3000, 'localhost', () => console.log('сервер запущен'));