/**
 * Created by ChristopherBorum on 12/09/16.
 */
var mongo = require('../db/db.js')
var mongoDB = require('mongodb')

exports.allJokes = function (callback) {
    mongo.get().collection('jokes').find({}).toArray((err, docs) => {
        if (!err) {
            console.log(docs)
        }
        callback(err, docs)
    })
};

exports.findJoke = function (id, callback) {
    mongo.get().collection('jokes').find({_id: new mongoDB.ObjectID(id.toString())}).toArray((err, docs) => {
        if (!err) {
            console.log(docs)
        }
        callback(err, docs)
    })
};

exports.addJoke = function (jokeToAdd, callback) {
    mongo.get().collection('jokes').insertOne(jokeToAdd, function (err, docs) {
        if (!err) {
            console.log(docs)
        }
        callback(err, docs)
    })
};

exports.editJoke = function (jokeToEdit, callback) {
    mongo.get().collection('jokes').updateOne({_id: new mongoDB.ObjectID(jokeToEdit._id)}, {$set: jokeToEdit}, function (err, docs) {
        if (!err) {
            console.log(docs)
        }
        callback(err, docs)
    })
};

exports.deleteJoke = function (id, callback) {
    mongo.get().collection('jokes').deleteOne({_id: new mongoDB.ObjectID(id)}, function (err, docs) {
        if (!err) {
            console.log(docs)
        }
        callback(err, docs)
    })
};

exports.randomJoke = function randomJoke(callback) {
    mongo.get().collection('jokes').find({}).toArray((err, docs) => {
        if (!err) {
            console.log(docs)
        }
        var rn = Math.floor(Math.random() * docs.length)
        callback(err, docs[rn])
    })
};
