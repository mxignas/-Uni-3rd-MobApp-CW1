const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Lessons
router.get('/', async (req, res) => {
    const lessons = await loadLessonsCollection();
    res.send(await lessons.find({}).toArray());
});

// Add Lessons
router.post('/', async (req, res) => {
    const lessons = await loadLessonsCollection();
    await lessons.insertOne({})
});

// Delete Lessons


// Loading collection and connecting to a MongoDB
async function loadLessonsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://dbAdmin:admin123@mobileappcw2.ovizx.mongodb.net/<dbname>?retryWrites=true&w=majority', {
        useUnifiedTopology: true
    }); 

    return client.db('Coursework2').collection('Lessons');
};



module.exports = router;