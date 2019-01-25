const express = require("express");
const articlesRoute = require('./articles')
const usersRoute =require('./users');
const donationRoute = require('./donation');
const app = express();
let bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const assert = require("assert");
app.use(bodyParser.json());//Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
const MongoUrl = "mongodb://localhost:27017";
const database = "DonorShop";
MongoClient.connect(MongoUrl,
    { useNewUrlParser: true },
    (err, client) => {
        assert.equal(err, null, "database connection failed");
        const db = client.db(database);
        articlesRoute(app, db);
        usersRoute(app, db);
        donationRoute(app, db);
    })
app.listen(4000, err => {
    if (err) console.log("err");
    console.log("good");
})