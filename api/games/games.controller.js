
const Games = require('./games.dao');

exports.createGame = function (req, res, next) {
    var game = {
        title: req.body.title,
        description: req.body.description,
        categories: req.body.categories
    };

    Games.create(game, function (err, game) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Game uploaded successfully"
        })
    })
}

exports.getGames = function (req, res, next) {
    Games.get({}, function (err, games) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            games: games
        })
    })
}

exports.getGame = function (req, res, next) {
    Games.get({ title: req.params.title }, function (err, games) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            games: games
        })
    })
}

exports.updateGame = function (req, res, next) {
    var game = {
        title: req.body.title,
        description: req.body.description,
        categories: req.body.categories
    }
    Games.update({ _id: req.params.id }, game, function (err, game) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Game updated successfully"
        })
    })
}

exports.removeGame = function (req, res, next) {
    Games.delete({ _id: req.params.id }, function (err, game) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Game deleted successfully"
        })
    })
}