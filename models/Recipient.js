const mongoose = require('mongoose');
const { schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: boolean, default: false }
});

module.exports = recipientSchema;
