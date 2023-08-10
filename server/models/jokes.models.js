// 1. import mongoose
const mongoose = require("mongoose");

// 2.1 create the schema with all keys & validation
const JokesSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "You need to setup your joke!"],
        minlength: [3, "Jokes should be a little longer than this, more than 3 characters"]

    },
    punchline:{
        type: String,
        required: [true, "You gotta deliver the punchline!"],
        minlength: [1, "I know punchlines can be short, but there has to be something here!"]
    }

    

}, {timestamps: true}) // 2.2 enable the timestamp for createdAt & updatedAt


// 3. create a mongoose model based on the schema & export it

const Joke = mongoose.model('Joke', JokesSchema)

module.exports = Joke
