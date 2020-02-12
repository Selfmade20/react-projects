const router = require('express').Router();
//  model
let User = require('../models/user.model');

// Handles incoming http .get request
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//  Handles incoming http .post request
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    // Saved to database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;