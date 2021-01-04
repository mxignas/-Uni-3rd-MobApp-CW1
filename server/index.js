const express = require("express");
const cors = require("cors");

// initializing app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const lessons = require('./routes/api/lessons');

app.use('/api/lessons', lessons); // for the route

const port = process.env.PORT || 5000; // PORT for Heroku

app.listen(port, () => console.log('Server started on port ${port}'));