const db = require('../config/connection');
const { User } = require('../models');
const adminSeed = require('./adminSeed.json');

db.once('open', async () => {
  try {
    
    await User.create(adminSeed);

    console.log('Admin created');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
