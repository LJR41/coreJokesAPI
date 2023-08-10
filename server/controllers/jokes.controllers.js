// 1. Import the model
const Jokes = require("../models/jokes.models")

// 2. export all functions with placeholder

module.exports.testApi = (req, res) => {
    res.json({ message: 'hello' })
}

module.exports.makeJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newJoke=>res.json(newJoke))
        .catch(err => res.json(err))
}

module.exports.allJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err))
}

module.exports.getOneJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err))
}

module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedJoke=>res.json(updatedJoke))
        .catch(err => res.json(err))
}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({_id:req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json(err))
}