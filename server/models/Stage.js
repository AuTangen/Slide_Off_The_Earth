const { Schema, model } = require('mongoose')

const stageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    bands: {
        type: Schema.Types.ObjectId,
        ref: 'band'
    }

})

const Stage = model('stage', stageSchema)

module.exports = Stage