

const router = require('express').Router()
const Band = require('../models/Band')
const Stage = require('../models/Stage')
const User = require('../models/User')

function isAuthenticated (req, res, next) {
    if (!req.session.user_id)
        return res.status(401).send({ error: "You must be logged in!" })

    next();
}

// Get all bands OR get bands based on search query (possibly?)
router.get('/artist', async (req, res) => {
    const bands = await Band.find().populate('user')
    res.send(bands)
})















module.exports = router