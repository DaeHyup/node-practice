const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('여기는 루트!!');
});

app.get('/login', (req, res) => {
  res.send('여기는 로그인!!');
});

app.listen(3000, () => {
  console.log('서버 가동');
});
