const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './public/images',
  filename: async function (req, file, cb) {
    const filePath = file.fieldname + '-' + Date.now() + path.extname(file.originalname);

    await req.user.createLaptop({
      heading: req.body.heading,
      price: req.body.price,
      brand: req.body.brand,
      model: req.body.model,
      oper_sys: req.body.oper_sys,
      condition: req.body.condition,
      description: req.body.description,
      filepath: `/images/${filePath}`,
    });

    cb(null, filePath);
  }
});

const upload = multer({
  storage: storage
}).single('image');

module.exports = upload;