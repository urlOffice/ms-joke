import Joke from './../../joke/Joke';

const userJokes = async (req: any, res: any) => {
  const { id } = req.params;
  const userJokes = await new Joke().getAllUserJokes(id);
  res.status(200).send({ data: userJokes })
}

const createJoke = async (req: any, res: any) => {
  const { id } = req.params;
  console.log("req", req)
  const newJoke = await new Joke().createJoke(req.body, id);
  res.status(201).send({ data: newJoke })
}
const likeJoke = async (req: any, res: any) => {
  const { id } = req.body;
  const totalJokeLikes = await new Joke().likeJoke(id);
  res.status(200).send({ data: totalJokeLikes })
}
module.exports = {
  userJokes,
  createJoke,
  likeJoke
}