const express = require('express');
const app = express();
const mongoose = require('mongoose');


require('dotenv').config();

const PORT = process.env.PORT;

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// MIDDLEWARE
app.use(express.static('public'))
// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
// DEPENDENCIES
const methodOverride = require('method-override')
// MIDDLEWARE
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Welcome to Awesome App about Breads');
})

// Mongoose for Mongodb
// make connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )


// Breads
/* If user have /bread ... in url then use the breadsController to 
    determine the appropriate action
*/
const breadsController = require('./controllers/breads_controllers.js')

// BAKER Controller
const bakersController = require('./controllers/bakers_controller.js');

// Tell app to use these controller to handel routing
app.use('/bakers', bakersController)

app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  
app.listen()