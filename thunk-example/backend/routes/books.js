const router = require('express').Router();
let Books = require('../models/books.model');

// Handles incoming http .get request

router.route('/').get(async (req, res) => {
    try {
        const books = await Books.find()
        const bookObj = await books.map((book) => {
            return { id: book.id, bookName: book.bookName, bookAuthor: book.bookAuthor }
        })
        return res.send(bookObj)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }   
    // .then(books => res.json(books))   
    // .catch(err => res.status(400).json("Error: " + err));
});

// Handles incoming http .post request
router.route('/').post(async (req, res) => {
    const bookName = req.body.bookName;
    const bookAuthor = req.body.bookAuthor

    if (bookName.trim().length < 1) {
        return res.status(400).json({ 'message': "Please enter book!" })
    }
    if (bookAuthor.trim().length < 1) {
        return res.status(400).json({ 'message': "Please enter book author!" })
    }
    const findOneByName = await Books.findOne({ bookName: bookName })
    if (findOneByName) {
        return res.status(400).json({ message: "Book not added because it exists!" })
    }
 
    const newBook = new Books({
        bookName,
        bookAuthor,
    });
    try {
        const book = await newBook.save()
        const bookObj = { id: book._id, bookName: book.bookName, bookAuthor: book.bookAuthor }
        return res.send(bookObj);
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});


router.route('/:id').get(async (req, res) => {
    try {
        const books = await Books.findById(req.params.id)
        return res.status(200).json(books)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        await Books.findByIdAndDelete(req.params.id)
        return res.status(200).json("Book deleted")
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});

router.route('/:id').put(async (req, res) => {
    try {
        const { id, name } = req.body
        console.log(id, name)
        const result = await Books.update({ _id: id }, { $set: { bookAuthor: name } })
        res.status(200).json(result)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});



module.exports = router;  