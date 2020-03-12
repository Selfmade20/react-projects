const router = require('express').Router();
//  model
let User = require('../models/user.model');

// Handles incoming http .get request
router.route('/').get(async (req, res) => {
    try {
        const users = await User.find()
        const usersObj = await users.map((user) => {
            return { id: user._id, username: user.username }
        })
        return res.status(200).json(usersObj)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});

//  Handles incoming http .post request
router.route('/').post(async (req, res) => {
    const username = req.body.username;
    if (username.trim().length < 1) {
        return res.status(400).json({ 'message': "Please enter username!" })
    }
    const findOneByName = await User.findOne({ username: username })
    if (findOneByName) {
        return res.status(400).json({ message: "User not added because it exists!" })
    }

    const newUser = new User({ username }); 
    try {
        const user = await newUser.save()
        const userObj = {id : user._id , username : user.username}
        return res.send(userObj)
    } catch (err) {
        res.status(400).json("Error: " + err)
    }
});


router.route('/:id').get(async (req, res) => {
    try {
        const users = await findById(req.params.id)
        return res.send(200).json(users)
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json("User deleted")
    } catch (err) {
        return res.status(400).json("Error: " + err)
    }
});

module.exports = router;