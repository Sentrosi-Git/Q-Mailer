const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }, //if you want to assign a preset value to the type,  use an object nice!
});

mongoose.model('users', userSchema);
