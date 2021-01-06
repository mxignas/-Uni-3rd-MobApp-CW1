const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

// Put/Update lesson spaces
// router.put('/:id', async (req, res, next) => {
//     const Lessons = await loadLessonsCollection();
//     await Lessons.updateOne({ __id: mongodb.ObjectID(req.params.id) },
//         { $set: { NumberOfSpace: 2 } });
//     res.status(200).send();
// });

// Loading collection and connecting to a MongoDB
async function loadLessonsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://dbAdmin:admin123@mobileappcw2.ovizx.mongodb.net/<Coursework2>?retryWrites=true&w=majority', {
        useUnifiedTopology: true
    });

    // returns connected collection from db
    return client.db('Coursework2').collection('Lessons');
};



module.exports = router;
