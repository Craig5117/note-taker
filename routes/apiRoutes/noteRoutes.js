const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes)
});

router.post('/notes', (req, res) => {
    // req.body.id = notes.length.toString();
    console.log(req.body)
    res.json(req.body)
});

module.exports = router;