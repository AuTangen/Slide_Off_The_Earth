const { Schema, model } = require('mongoose')

const bandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artists: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        ref: 'stage'
    },
    day: {
        type: String,
        
    },
    time: {
        type: String,
        
    },
     setlist: {
        type: String,
        
    },

})

const Band = model('band', bandSchema)

module.exports = Band