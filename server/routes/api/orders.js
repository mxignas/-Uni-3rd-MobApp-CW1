const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

// Get Orders
router.get('/', async (req, res) => {
    const Orders = await loadOrdersCollection(); // loads collection
    res.send(await Orders.find({}).toArray()); // finds and converts to array
    console.log("GET request for order is succesfull");
});

// Post/Add Orders
router.post('/', async (req, res) => {
    const Orders = await loadOrdersCollection();
    await Orders.insertOne({
        name: req.body.name,
        PhoneNumber: req.body.PhoneNumber,
        LessonID: req.body.LessonID,
        NumberOfSpace: req.body.NumberOfSpace
    });
    // http response if everything is okay and it is created
    res.status(201).send(); 
    console.log("POST request for orders is succesfull");
});

// Loading collection and connecting to a MongoDB
async function loadOrdersCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://dbAdmin:admin123@mobileappcw2.ovizx.mongodb.net/<Coursework2>?retryWrites=true&w=majority', {
        useUnifiedTopology: true
    });

    return client.db('Coursework2').collection('OrderInfo');
};



module.exports = router;