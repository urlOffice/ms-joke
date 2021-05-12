
const Joke = require('./joke.model');
const ObjectId = require('mongodb').ObjectId;

//types

export default class JokeClass {

  constructor() { }
  public getAllUserJokes = async (userId: any): Promise<any> => {
    const jokes = await Joke.findAll({ user: userId })
    return jokes
  }


  public likeJoke = async (jokeId: any) => {
    let joke = await Joke.findOne({
      _id: ObjectId(jokeId)
    })
    joke.like++
    await joke.save();
    return joke.like
  }

  public deleteJoke = async (id: any) => {
    const deleteJoke = await Joke.delete({
      _id: ObjectId(id)
    })
    return deleteJoke
  }

  public createJoke = async (body: any, userId: any) => {
    const { punchLine, jokeLine } = body;
    const jokeBodyObj = {
      punch_line: punchLine,
      joke_line: jokeLine,
      user: ObjectId(userId),
      like: 0
    }
    console.log("im running here thought ? ")
    const newJoke = new Joke(jokeBodyObj)
    newJoke.save()
    return newJoke
  }
}
