

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
router.get('/artists', async (req, res) => {
    const bands = await Band.find().populate('user')
    res.send(bands)
})

// Get one band by id
router.get('/artists/:id', async (req, res) => {
    const bands = await Band. findById(req.params.id).populate({
        path: 'user',
        select: '-password'
    })
})

// Get favorite bands for user
router.get('/artists/user') 













module.exports = router