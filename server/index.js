const express = require("express");
const cors = require("cors");

// initializing app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000; // PORT for Heroku

app.listen(port, () => console.log('Server started on port ${port}'));