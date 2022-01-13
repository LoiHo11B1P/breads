const express = require('express');
const app = express();


require('dotenv').config();

const PORT = process.env.PORT;

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to Awesome App about Breads');
})

// Breads
/* If user have /bread ... in url then use the breadsController to 
    determine the appropriate action
*/
const breadsController = require('./controllers/breads_controllers.js')

app.use('/breads', breadsController)


app.listen(PORT, () => {
    console.log("Listening on ",PORT);
} )