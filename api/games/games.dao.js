const mongoose = require('mongoose');
const gamesSchema = require('./games.model');

gamesSchema.statics = {
    create : function(data, cb) {
        let game = new this(data);
        game.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

const gamesModel = mongoose.model('Games', gamesSchema);
module.exports = gamesModel;