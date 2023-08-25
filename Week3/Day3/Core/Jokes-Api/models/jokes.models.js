const mongoose = require('mongoose');

// Create a schema for the Joke
const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: true,
  },
  punchline: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['general', 'programming', 'puns', 'dad jokes', 'misc'],
    default: 'general',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps:true});

// Create a model based on the schema
const Joke = mongoose.model('Joke', JokeSchema);

// Export the Joke model
module.exports = Joke;
