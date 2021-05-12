import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  joke_line: {
    type: String,
    required: true
  },
  punch_line: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  like: {
    type: Number,
    defaultValue: 0,
    required: true,
  }

})

module.exports = mongoose.model("Joke", jokeSchema, "jokes")