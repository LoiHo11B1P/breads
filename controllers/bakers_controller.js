// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js'); // list of mock up bakers

// delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id) 
      .then(deletedBaker => { 
        res.status(303).redirect('/breads')
      })
})

// show 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit: 2 }
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

// DATA SEEDER
baker.get('/data/seed', async (req, res) => {
    await Baker.deleteMany()
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// INDEX
baker.get('/',(req, res) => {
    Baker.find()
    .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})



// export
module.exports = baker                    