

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
      }, {new: true}).populate('favorites');
  
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
    }, {new: true}).populate('favorites')

    res.send({ user: user })
})


// Create a band
router.post('/artist')


// Delete a band
router.delete('/artist/:id', isAuthenticated, async (req, res) => {
    const band_id = req.params.id

    // Get the band by id
    const band = await Band.findById(band_id)

    if (!band) return res.status(500).send({ error: 'That band doesn\'t exist' })

    if (drink.user !== req.session.user_id)
        return res.status(401).send({ error: 'You are not allowed to delete another user\'s band.'})
})

module.exports = router
