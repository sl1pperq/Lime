// Файл routes/games.js

const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares/games');
const sendAllGames = require('../middlevares/games');

gamesRouter.get('/games', findAllGames, sendAllGames);

module.exports = gamesRouter;