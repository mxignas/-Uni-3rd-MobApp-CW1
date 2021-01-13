const express = require("express");
const cors = require("cors");
const path = require('path');

// initializing app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

let publicPath = path.resolve(__dirname, 'assets');
app.use('/static', express.static(path.join(publicPath)));


// routes
const lessons = require('./routes/api/lessons');
const orders = require('./routes/api/orders');
const orderupdate = require('./routes/api/orderupdate');

// for the route
app.use('/api/lessons', lessons); 
app.use('/api/orders', orders);
app.use('/api/orderupdate', orderupdate); 

// hande production
if(process.env.NODE_ENV == 'production') {
    // Static folder
    app.use(express.static(__dirname + '/dist/'));

    // Handle SPA
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/dist/index.html')); // refer to any route and look into index.html
}

const port = process.env.PORT || 5000; // PORT for Heroku

app.listen(port, () => console.log('Server started on port ' + port));
