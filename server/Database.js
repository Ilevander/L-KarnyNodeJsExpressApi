const mongoose = require("mongoose");
const Note = require("./Schemas/note");

class Database {
        constructor(){
                this.Url = "mongodb://localhost:27017/test";
            }

    connect(){
        //promise
        mongoose.connect(this.Url , {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Database connected successfully.");
        })
        .catch((error) => {
            console.log("Error in connecting to database ", error);
        })
    }

    addNote(note){
        return new Promise((resolve, reject) => {
            note["createdDate"] = new Date();
            note["updatedDate"] = new Date();
            let newNote = new Note(note);
            //save return promise : 
            newNote.save()
            .then(doc => {
                resolve(doc);
                console.log("Saved successfully", doc);
            })
            .catch(err => {
                reject(err);
                console.log("Problem in saving to database", err);
            });
        });
    }

    getNotes(){
          return new Promise((resolve,reject) => {
              Note.find({})
              .then(data => {
                resolve(data);
              })
              .catch(error => {
                reject(error);
              });
          });
    }

    getNoteById(id){
         return new Promise((resolve,reject) => {
            Note.findById(id)
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
         })
    }
}

module.exports = Database;