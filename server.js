const express = require('express');
const app = express();


require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Welcome to Awesome App about Breads');
})

// Breads
const breadsController = require('./controllers/breads_controllers.js')

app.use('/breads', breadsController)


app.listen(PORT, () => {
    console.log("Listening on ",PORT);
} )