const router = require('express').Router();
let Computers = require('../models/computers.model');

// Handles incoming http .get request
router.route('/').get(async (req, res) => {
    try {
        const computers = await Computers.find()
        return res.send(computers)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});

// Handles incoming http .post request
router.route('/').post(async (req, res) => {
    const name = req.body.name;

    const newComputer = new Computers({
        name,
    });
    // Saved to database
    try {
        const computer = await newComputer.save()

        return res.send(computer)
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

