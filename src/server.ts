import express from 'express';
import mongoose from 'mongoose';
import routes from './api/routes';

const app = express();
const PORT = 3004

app.use(express.json());
app.use('/joke', routes);


mongoose.connect('mongodb://localhost:27017/url_office',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    async () => {
      console.log('Connected to database at 27017');
      app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`)
      })
    })

