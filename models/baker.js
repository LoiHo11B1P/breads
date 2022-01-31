const mongoose = require('mongoose');
const Bread = require('./bread');

const { Schema } = mongoose;

const bakerSchema = new Schema({
    name: {
        type: String,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'],
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String 
}, 
    {toJSON: {virtuals: true}}
)

// Virtuals:
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

const Baker = mongoose.model('Baker', bakerSchema);
module.exports = Baker;