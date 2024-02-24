const mongoose = require('mongoose');

//Schema of "note"  is a collection in MongoDb like a table in Relational Databases: 
const noteSchema = mongoose.Schema({ //id will be added automatically
      title: {type: String ,required: true},
      content: {type: String , require: true},
      createdDate: {type: Date , require: true},
      updatedDate: {type: Date , require: true},

});


module.exports = mongoose.model('Note', noteSchema);