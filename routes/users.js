// Создаём роут для запросов пользователей
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const findAllUsers = require('../middlevares/users');
const sendAllUsers = require('../middlevares/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/categories', findAllUsers, sendAllUsers);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;