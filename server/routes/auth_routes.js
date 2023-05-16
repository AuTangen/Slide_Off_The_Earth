const router = require('express').Router();
const User = require('../models/User');



router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body)
    // .populate({
    //   path: 'favorites',
    //   populate: 'user'
    // });
    req.session.user_id = user._id;
    console.log({user})
    res.send({user})
  } catch (err) {
    res.status(402).send({error: err})
  }
});


router.post('/login', async (req, res) => {
    
      const user = await User.findOne({
        email: req.body.email
      })
//   if no user is found, send error message
      if (!user) return res.status(402).send({error: 'user with that email not found'});


//   if password does not match, send error message
const valid_password = await user.validatePass(req.body.password);
if (!valid_password) return res.status(401).send({error: 'password does not match'})

// log user in if both validations pass
      req.session.user_id = user._id;
      
      res.send({user})
});


router.get('/logout', (req, res) => {
    req.session.destroy();

    res.send({message: 'user logged out'})
})

router.get('/userauth', async (req, res) => {
    const user_id = req.session.user_id;

    if (!user_id) return res.send({user: null})

    const user = await User.findById(user_id).populate({
      path: 'favorites',
      populate: 'user'
    });
    console.log({ user: user })
    res.send({ user: user })
})




module.exports = router;