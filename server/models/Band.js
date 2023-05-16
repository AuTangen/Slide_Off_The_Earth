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
        type: Schema.Types.ObjectId,
        ref: 'stage'
    },
    day: {
        type: Date,
        
    },
    time: {
        type: String,
        
    },
    uploaded_file: {
        type: String
    },
    setlist: {
        type: String,
        
    },

})

const Band = model('band', bandSchema)

module.exports = Band