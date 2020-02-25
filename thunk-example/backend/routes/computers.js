const router = require('express').Router();
let Computers = require('../models/computers.model');

// Handles incoming http .get request
router.route('/').get((req, res) => {
    Computers.find()
        .then(computers => res.send(computers))
        .catch(err => res.status(400).json("Error: " + err));
});
 
// Handles incoming http .post request
router.route('/add').post((req, res) => {
    const name = req.body.name;
    
    const newComputer = new Computers({
        name,
    });
    // Saved to database
    newComputer.save()
        .then((computer ) => res.send(computer)).sort()
        .catch(err => {
            console.log(err)
            res.status(400).json('Error: ' + err)});
});

router.route('/:id').get((req,res) => {
    Computers.findById(req.params.id)
    .then(computers => res.json(computers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Computers.findByIdAndDelete(req.params.id)
    .then(() => res.json('Computer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Computers.findById(req.params.id)
    .then(computers => {
        computers.name = req.body.name;
        computers.date = Date.parse(req.body.date);

        computers.save()
        .then(() => res.json('Computer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;  

