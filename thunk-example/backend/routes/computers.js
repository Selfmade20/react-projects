const router = require('express').Router();
let Computers = require('../models/computers.model');

// Handles incoming http .get request
router.route('/').get((req, res) => {
    Computers.find()
        .then(computers => res.json(computers))
        .catch(err => res.status(400).json("Error: " + err));
});

// Handles incoming http .post request
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const date = Date.parse(req.body.date);

    const newComputer = new Computers({
        name,
        date,
    });

    // Saved to database
    newComputer.save()
        .then(() => res.json('Computer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;  