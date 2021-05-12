const express = require('express');
const app = express();

import routes from './routes';
const PORT = 3004

app.use(express.json());
app.use('/joke', routes)

app.listen(PORT, () => {
  console.log(`the server has started on ${PORT}`)
})