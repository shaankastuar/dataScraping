var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var offtopicThreadsSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  link: {
    type:String,
    required:true
  },
  note: {
      type: Schema.Types.ObjectId,
      ref: 'Note'
  }
});

var offtopicThreads = mongoose.model('offtopicThreads', offtopicThreadsSchema);
module.exports = offtopicThreads;