var Games = require('./games.controller');

module.exports = function(router) {
    router.post('/create', Games.createGame);
    router.get('/get', Games.getGames);
    router.get('/get/:title', Games.getGame);
    router.put('/update/:id', Games.updateGame);
    router.delete('/remove/:id', Games.removeGame);
}