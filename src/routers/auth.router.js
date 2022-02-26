const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const User = require('../classes/user.class')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/login', async (req, res) => {
    // Initialize a user, then check password
    let user = new User()
    user = await user.initializeFromUsername(req.body.username);
    let submittedPassword = crypto.createHash('sha256').update(req.body.password).digest('hex');
    
    if (user.comparePassword(submittedPassword)) {
        // If password is correct, save userdata in session storage
        // Then, redirect to ROOT
        req.session.user = user;
        req.session.save();
        res.redirect('/');
    } else {
        // Password is invalid, user must try again.
        res.redirect("/auth/login?warning=invalid-password")
    }
})

// Login page
router.get('/login', async (req, res) => {res.render('./login.njk')})

// Register page
router.get('/register', async (req,res) => {res.render('./register.njk')})


module.exports = router