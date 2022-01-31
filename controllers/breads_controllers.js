const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

// INDEX
// INDEX
breads.get('/', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      Bread.find()
    .then(foundBreads => {
      
      res.render('Index',
      {
        breads: foundBreads,
        bakers: foundBakers,
        title: 'Index Page Hello'
      }
    )
  })

    })
  
})

// MASS ADD get
breads.get('/seed',(req, res) => {
  console.log('seeding')
  res.render('seed')
  console.log('seeding')
}) 

breads.post('/seed', (req, res) => {
  console.log('Adding many!')
})

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// NEW
breads.get('/new', (req, res) => {
  Baker.find()
  .then(foundBakers =>  {
    res.render('new', {
      bakers: foundBakers
    })
  })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
        Bread.findById(req.params.id)
          .then(foundBread => {
            res.render('edit', {
                bread: foundBread, 
                bakers: foundBakers 
            })
          })
    })
})

// SHOW
// SHOW
breads.get('/:id', (req, res) => {
  // use model Bread with mongoos findByID method to get a specific bread by id
  Bread.findById(req.params.id)
      // .populate('baker') bring back all information about the baker
      // related to the bread, not just ID
      .populate('baker')
      .then(foundBread => {
        const bakedBy = foundBread.getBakedBy() 
        console.log(bakedBy)
        res.render('show', {
            bread: foundBread
        })
      })
    })
// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id) 
    .then(deletedBread => { 
      res.status(303).redirect('/breads')
    })
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
      console.log(updatedBread) 
      res.redirect(`/breads/${req.params.id}`) 
    })
})



module.exports = breads