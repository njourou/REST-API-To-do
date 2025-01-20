const Todo = require('../models/todo.models');  // Changed from './models/todo.model'
const ApiError = require('../utils/apiError');

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { todo }
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort('-createdAt');
    res.json({
      status: 'success',
      results: todos.length,
      data: { todos }
    });
  } catch (err) {
    next(err);
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return next(new ApiError('Todo not found', 404));
    }
    res.json({
      status: 'success',
      data: { todo }
    });
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!todo) {
      return next(new ApiError('Todo not found', 404));
    }
    res.json({
      status: 'success',
      data: { todo }
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return next(new ApiError('Todo not found', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    next(err);
  }
};