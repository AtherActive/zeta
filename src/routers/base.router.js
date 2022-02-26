const express = require('express');
const { redirect } = require('express/lib/response');

const router = express.Router();

router.get('/', (req,res) => {
    data = {user:req.session.user};
    res.render('./index.njk',data);
})

router.get('/test',async (req,res) => {
    let user = new User();
    user.initializeFromUsername(req.session.user.username)
    res.send(req.user)
})

module.exports = router