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
    const bookName = req.body.book.name;
    const bookAuthor = req.body.book.author

    const newComputer = new Books({
        bookName,
        bookAuthor,
    });

    // Save to database
    newComputer.save()
        .then((book) => res.send(book))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
    Books.findById(req.params.id)
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Books.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Books.findById(req.params.id)
    .then(books => {
        books.bookName = req.body.bookName;
        books.bookAuthor = req.body.bookAuthor;
        books.date = Date.parse(req.body.date);

        books.save()
        .then(() => res.json('Book updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;  