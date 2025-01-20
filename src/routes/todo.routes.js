const express = require('express');
const { validateTodo } = require('../middleware/validation.middleware');
const todoController = require('../controllers/todo.controller');

const router = express.Router();

router.route('/')
  .get(todoController.getAllTodos)
  .post(validateTodo, todoController.createTodo);

router.route('/:id')
  .get(todoController.getTodo)
  .patch(validateTodo, todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;