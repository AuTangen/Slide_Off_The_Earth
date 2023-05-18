

const router = require('express').Router()
const Band = require('../models/Band')
const Stage = require('../models/Stage')
const User = require('../models/User')
const Vendor = require('../models/Vendor')
const ObjectId = require('mongoose').Types.ObjectId;


function isAuthenticated(req, res, next) {
    if (!req.session.user_id)
        return res.status(401).send({ error: "You must be logged in!" })

    next();
}

// function isAdmin (req, res, next) {
//     const user_id = req.session.user_id;
//     const user = await User.findOne({
//         _id: user_id
//       })
//     if (!user.isAdmin) return res.status(401).send({ error: "You must be an admin to add bands!" })

//     next();
// }


// ********BAND ROUTES********

// Get all bands OR get bands based on search query (possibly?)
router.get('/artists', async (req, res) => {
    const bands = await Band.find()
    res.send(bands)
})


// Get one band by id
router.get('/artists/:id', async (req, res) => {
    // const band = await Band.findOne({name: req.params.name })
    const artist = await Band.findById(new ObjectId(req.params.id))
 
    console.log(artist)
    res.send(artist)
});

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
    
    const artist_id = req.params.id

    await Band.findByIdAndDelete(new ObjectId(artist_id))

    res.send({message: 'Artist was deleted successfully.'})
    // res.redirect('/artists');
    console.log({artists: artist_id })
})

// update a band
router.put('/artist/:id', isAuthenticated, async (req, res) => {
    const user_id = req.session.user_id
    try {
        const band = await Band.findByIdAndUpdate(new ObjectId(req.params.id),{
            ...req.body,
            user: user_id
        },{new: true})
        
        res.send({artists: band })
        console.log({artists: band })
    } catch (err) {
        res.status(500).send({ error: err })
    }
})



// ********STAGE ROUTES********


// Main Stage

router.get('/mainstage', async (req, res) => {
    
    const Stage = "Main Stage"
    const bands = await Band.find({stage: Stage })
  
    console.log(bands)
    res.send(bands)
});

// Almost Famous Stage
router.get('/almoststage', async (req, res) => {
    
    const Stage = "Almost Famous Stage"
    const bands = await Band.find({stage: Stage })
  
    console.log(bands)
    res.send(bands)
});


// Noob Stage
router.get('/noobstage', async (req, res) => {
    
    const Stage = "Noob Stage"
    const bands = await Band.find({stage: Stage })
  
    console.log(bands)
    res.send(bands)
});


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

// Get all vendors
router.get('/vendors', async (req, res) => {
    const vendor = await Vendor.find()
    res.send(vendor)
})

// Get one vendor by id
router.get('/vendors/:id', async (req, res) => {
    // const band = await Band.findOne({name: req.params.name })
    const vendor = await Vendor.findById(new ObjectId(req.params.id))
 
    console.log(vendor)
    res.send(vendor)
});

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

// Update a vendor by id
// update a band
router.put('/vendor/:id', isAuthenticated, async (req, res) => {
    const user_id = req.session.user_id
    try {
        const vendor = await Vendor.findByIdAndUpdate(new ObjectId(req.params.id),{
            ...req.body,
            user: user_id
        },{new: true})
        
        res.send({vendors: vendor })
        console.log({vendors: vendor })
    } catch (err) {
        res.status(500).send({ error: err })
    }
})

// Delete a vendor
router.delete('/vendor/:id', isAuthenticated, async (req, res) => {
    
    const vendor_id = req.params.id

    await Vendor.findByIdAndDelete(new ObjectId(vendor_id))

    res.send({ message: 'Vendor was successfully deleted.'  })

    console.log({vendors: vendor_id})
})

// router.delete('/vendor/:id', isAuthenticated, async (req, res) => {
//     const vendor_id = req.params.id

//     // Get the vendor by id
//     const vendor = await Vendor.findById(vendor_id)

//     if (!vendor) return res.status(500).send({ error: 'That vendor doesn\'t exist' })

//     if (vendor.user !== req.session.user_id)
//         return res.status(401).send({ error: 'You are not allowed to delete a vendor added by another user.' })

//         await Vendor.findByIdAndDelete(vendor_id)

//         res.send({ message: 'Vendor successfully deleted!' })
// })


module.exports = router
