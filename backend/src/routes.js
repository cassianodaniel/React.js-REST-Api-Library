const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const BookController = require('./controllers/BookController');
const ReservationController = require('./controllers/ReservationController');
const RentController = require('./controllers/RentController');
const DevolutionController = require('./controllers/DevolutionController');

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.delete('/users', UserController.delete);
routes.put('/users', UserController.update);

routes.post('/books', BookController.create);
routes.get('/books', BookController.index);
routes.delete('/books', BookController.delete);

routes.post('/reservations', ReservationController.create);
routes.get('/reservations', ReservationController.index);
routes.put('/reservations', ReservationController.update);
routes.delete('/reservations', ReservationController.delete);

routes.post('/rents', RentController.create);
routes.get('/rents', RentController.index);
routes.delete('/rents', RentController.delete);
routes.put('/rents', RentController.update);

routes.post('/devolutions', DevolutionController.create);
routes.put('/devolutions', DevolutionController.update);
routes.get('/devolutions', DevolutionController.index);
routes.delete('/devolutions', DevolutionController.delete);

module.exports = routes;
