import { create } from 'domain';
import express from 'express';

const routes = express.Router();

//services
const { userJokes, createJoke, likeJoke } = require('./jokeServices');
routes.route('/')
  .put(likeJoke);

routes.route('/:id')
  .get(userJokes)
  .post(createJoke);

export default routes;