/**
 * Created by ChristopherBorum on 12/09/16.
 */
var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes')

router.get('/jokes', function (req, res, next) {
    jokes.allJokes(function (err, docs) {
        if (err) {
            res.end(JSON.stringify(err))
        }
        res.end(JSON.stringify(docs))
    })
});

router.get('/joke/random', function (req, res, next) {
    jokes.randomJoke((err, docs) => {
        if (err) {
            res.end(JSON.stringify(err))
        }
        res.end(JSON.stringify(docs))
    })
});

router.get('/joke/:id', function (req, res, next) {
    jokes.findJoke(req.params.id, (err, docs) => {
        if (err) {
            res.end(JSON.stringify(err))
        }
        res.end(JSON.stringify(docs))
    })
});

router.post('/joke', function (req, res, next) {
    jokes.addJoke(req.body, (err, docs) => {
        if (err) {
            res.end(JSON.stringify(err))
        }
        res.end(JSON.stringify(docs))
    })
});

router.put('/joke', function (req, res, next) {
    jokes.editJoke(req.body, (err, docs) => {
        if (err) {
            res.end(JSON.stringify(err))
        }
        res.end(JSON.stringify(docs))
    })
});

router.delete('/joke/:id', function (req, res, next) {
    jokes.deleteJoke(req.params.id, (err, docs) => {
        if (err) {
            res.end(JSON.stringify(err))
        }
        res.end(JSON.stringify(docs))
    })
});

module.exports = router;
