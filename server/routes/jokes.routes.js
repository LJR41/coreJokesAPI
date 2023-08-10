// 1. import the controller
const JokesController = require('../controllers/jokes.controllers')
// 2. export a function that reads one argument (app)
const routes = (app) =>{
    app.get('/api/testing', JokesController.testApi)
    app.get('/api/alljokes', JokesController.allJokes)
    app.get('/api/onejoke/:id', JokesController.getOneJoke)
    app.post('/api/createjoke', JokesController.makeJoke)
    app.patch('/api/update/:id', JokesController.updateJoke)
    app.delete('/api/delete/:id', JokesController.deleteJoke)

}
// 3. include all the routes with the corresponding logic from controller

module.exports = routes