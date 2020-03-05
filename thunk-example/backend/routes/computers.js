const router = require('express').Router();
let Computers = require('../models/computers.model');

// Handles incoming http .get request
router.route('/').get(async (req, res) => {
    try {
        const computers = await Computers.find()
        const computerObj = await computers.map((computer) => {
            return { id: computer._id, name: computer.name }
        })
        return res.status(200).json(computerObj)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});

// Handles incoming http .post request
router.route('/').post(async (req, res) => {
    const name = req.body.name;

    const newComputer = new Computers({ name });
    // Saved to database
    try {
        const computer = await newComputer.save()
        const computerObj = {id : computer._id , name : computer.name}
        return res.send(computerObj)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});

router.route('/:id').get(async (req, res) => {
    try {
        const computers = await Computers.findById(req.params.id)
        return res.status(200).json(computers)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        await Computers.findByIdAndDelete(req.params.id)
        return res.status(200).json("Computer deleted")
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});


module.exports = router;

