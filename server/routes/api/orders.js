const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Orders
router.get('/', async (req, res) => {
    const Orders = await loadOrdersCollection();
    res.send(await Orders.find({}).toArray());
});

// Add Orders
router.post('/', async (req, res) => {
    const Orders = await loadOrdersCollection();
    await Orders.insertOne({})
});

// Delete Orders


// Loading collection and connecting to a MongoDB
async function loadOrdersCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://dbAdmin:admin123@mobileappcw2.ovizx.mongodb.net/<Coursework2>?retryWrites=true&w=majority', {
        useUnifiedTopology: true
    });

    return client.db('Coursework2').collection('OrderInfo');
};



module.exports = router;