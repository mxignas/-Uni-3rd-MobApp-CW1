const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get
router.get('/', async (req, res) => {
    const lessons = await loadLessonsCollection();
    res.send(await lessons.find({}).toArray());
});

async function loadLessonsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://dbAdmin:admin123@mobileappcw2.ovizx.mongodb.net/<dbname>?retryWrites=true&w=majority', {
        useUnifiedTopology: true
    }); 

    return client.db('MobileAppCW2').collection('Lessons');
};



module.exports = router;