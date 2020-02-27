const router = require('express').Router();
let Books = require('../models/books.model');

// Handles incoming http .get request

router.route('/').get(async (req, res) => {
    try {
        const books = await Books.find()
        return res.send(books)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
    // .then(books => res.json(books))   
    // .catch(err => res.status(400).json("Error: " + err));
});

// Handles incoming http .post request
router.route('/').post((req, res) => {
    console.log("Yebow", req.body)
    const bookName = req.body.book.bookName;
    const bookAuthor = req.body.book.bookAuthor


    const newComputer = new Books({
        bookName,
        bookAuthor,
    });


    // Save to database
    newComputer.save()
        .then((book) => res.send(book))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get(async (req, res) => {
    try {
        const books = Books.findById(req.params.id)
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

// router.route('/:id').put(async(req,res) =>{
//     try{
//         await 
//     }
// })

module.exports = router;  