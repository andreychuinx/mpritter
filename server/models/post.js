const mongoose = require('mongoose')
const Schema = mongoose.Schema

var postSchema = new Schema({
  post : String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  tags: [String]

}, { timestamps : {} })


module.exports = mongoose.model('Posts', postSchema)