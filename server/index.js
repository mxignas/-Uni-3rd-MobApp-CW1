const express = require("express");
const cors = require("cors");

// initializing app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// routes
const lessons = require('./routes/api/lessons');
const orders = require('./routes/api/orders');

// for the route
app.use('/api/lessons', lessons); 
app.use('/api/orders', orders); 

const port = process.env.PORT || 5000; // PORT for Heroku

app.listen(port, () => console.log('Server started on port ${port}'));