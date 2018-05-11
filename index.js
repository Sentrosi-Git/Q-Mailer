const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ It: '\'d be cooler if you did' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
