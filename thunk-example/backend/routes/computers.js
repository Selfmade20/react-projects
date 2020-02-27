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
    // .then((computer) => res.send(200).computer(d))
    // .catch(err => {
    //     res.status(400).json('Error: ' + err)
    // });
});

router.route('/:id').get(async (req, res) => {
    try {
        const computers = Computers.findById(req.params.id)
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

router.route('/:id').post(async (req, res) => {
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

