const router = require('express').Router();
let Books = require('../models/books.model');

// Handles incoming http .get request
router.route('/').get((req, res) => {
    Books.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json("Error: " + err));
});

// Handles incoming http .post request
router.route('/add').post((req, res) => {
    const bookName = req.body.bookName;
    const bookAuthor = req.body.bookAuthor
    const date = Date.parse(req.body.date);

    const newComputer = new Books({
        bookName,
        bookAuthor,
        date,
    });

    // Save to database
    newComputer.save()
        .then(() => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;  