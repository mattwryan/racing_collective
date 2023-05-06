const express = require('express');
const { append } = require('express/lib/response');
const controller = require('../controllers/connectionController');
const {isLoggedIn, isAuthor} = require('../middlewares/auth');

const router = express.Router();

// GET /connections: send all connections

router.get('/', controller.index);

// GET /connections/new: send form for creating a new connection

router.get('/new', isLoggedIn, controller.new);

//POST /connections: create a new connection

router.post('/', isLoggedIn, controller.create);

//GET /connections/:id: send details of connection identified by id

router.get('/:id', controller.show);

//GET /connections/:id/edit: send html form for editing an existing connection
router.get('/:id/edit', isLoggedIn, isAuthor, controller.edit);

//PUT /connections/:id: update the connection identified by id
router.put('/:id', isLoggedIn, isAuthor, controller.update);

//DELETE /connections/:id, delete the connection identified by id
router.delete('/:id', isLoggedIn, isAuthor, controller.delete);

//POST /connections/:id, send rsvp request
router.post('/:id/rsvp', isLoggedIn, controller.newRsvp);

module.exports = router;