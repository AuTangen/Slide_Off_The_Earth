

const router = require('express').Router()
const Band = require('../models/Band')
const Stage = require('../models/Stage')
const User = require('../models/User')
const Vendor = require('../models/Vendor')


function isAuthenticated(req, res, next) {
    if (!req.session.user_id)
        return res.status(401).send({ error: "You must be logged in!" })

    next();
}


// ********BAND ROUTES********

// Get all bands OR get bands based on search query (possibly?)
router.get('/artists', async (req, res) => {
    const bands = await Band.find()
    res.send(bands)
})


// Get one band by id
router.get('/artists/:id', async (req, res) => {
    const bands = await Band.findById(req.params.id).populate({
        path: 'user',
        select: '-password'
    })
})


// Get favorite bands for user
router.get('/artists/user', isAuthenticated, async (req, res) => {
    const user_id = req.session.user_id

    const user = await User.findById(user_id).populate('favorites')

    res.send(user.favorites)
})


// Add a favorite band to a user 
router.put('/artists/:id', isAuthenticated, async (req, res) => {
    const artist_id = req.params.id;

    const artist = await Band.findById(artist_id);

    if (!artist) return res.status(404).send({ error: 'No artist found by that id.' });

    try {
        const user = await User.findOneAndUpdate({
            _id: req.session.user_id
        }, {
            $addToSet: {
                favorites: artist._id
            }
        }, { new: true }).populate('favorites');

        res.send({ user: user });
    } catch (err) {
        res.status(500).send({ error: err });
    }
});


// Delete a favorite for a user
router.put('fav/:id', isAuthenticated, async (req, res) => {
    const user = await User.findOneAndUpdate({
        _id: req.session.user_id
    }, {
        '$pull': {
            favorites: req.params.id
        }
    }, { new: true }).populate('favorites')

    res.send({ user: user })
})


// Create a band
router.post('/artist', isAuthenticated, async (req, res) => {
    const user_id = req.session.user_id
    try {
        const band = await Band.create({
            ...req.body,
            user: user_id
        })
        // const user = await User.findOneAndUpdate({
        //     _id: user_id
        // }, {
        //     '$push': {
        //         favorites: band._id
        //     }
        // }, { new: true }).populate('favorites')
        res.send({band: band })
        console.log({band: band })
    } catch (err) {
        res.status(500).send({ error: err })
    }
})


// Delete a band
router.delete('/artist/:id', isAuthenticated, async (req, res) => {
    const band_id = req.params.id

    // Get the band by id
    const band = await Band.findById(band_id)

    if (!band) return res.status(500).send({ error: 'That band doesn\'t exist' })

    if (band.user !== req.session.user_id)
        return res.status(401).send({ error: 'You are not allowed to delete another user\'s band.' })

    await Band.findByIdAndDelete(band_id)

    res.send({ message: 'Band successfully deleted!' })
})



// ********STAGE ROUTES********



// Create a stage
router.post('/stage', isAuthenticated, async (req, res) => {
    try {
        const stage = await Stage.create({
            ...req.body
        })
        res.send({ stage: stage })
    } catch (err) {
        res.status(500).send({ error: err })
    }
})


// Delete a stage
router.delete('/stage/:id', isAuthenticated, async (req, res) => {
    const stage_id = req.params.id

    // Get the band by id
    const stage = await Stage.findById(stage_id)

    if (!stage) return res.status(500).send({ error: 'That stage doesn\'t exist' })

    if (stage.user !== req.session.user_id)
        return res.status(401).send({ error: 'You are not allowed to delete a stage added by another user.' })

        await Stage.findByIdAndDelete(stage_id)

        res.send({ message: 'Stage successfully deleted!' })
})



// ********VENDOR ROUTES********



// Create a vendor
router.post('/vendor', isAuthenticated, async (req, res) => {
    try {
        const vendor = await Vendor.create({
            ...req.body
        })
        res.send({ vendor: vendor })
    } catch (err) {
        res.status(500).send({ error: err })
    }
})


// Delete a vendor
router.delete('/vendor/:id', isAuthenticated, async (req, res) => {
    const vendor_id = req.params.id

    // Get the vendor by id
    const vendor = await Vendor.findById(vendor_id)

    if (!vendor) return res.status(500).send({ error: 'That vendor doesn\'t exist' })

    if (vendor.user !== req.session.user_id)
        return res.status(401).send({ error: 'You are not allowed to delete a vendor added by another user.' })

        await Vendor.findByIdAndDelete(vendor_id)

        res.send({ message: 'Vendor successfully deleted!' })
})


module.exports = router
