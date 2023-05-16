const { Schema, model } = require('mongoose')

const vendorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    category: {
        type: String,
        required: true
    }

})

const Vendor = model('vendor', vendorSchema)

module.exports = Vendor