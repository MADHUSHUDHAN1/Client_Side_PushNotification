const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const db = require('./client/model/schema');
const mongoose = require('mongoose');
const http = require('http');
const port = process.env.PORT || 4000 ;
const server = http.createServer();

mongoose.connect('mongodb+srv://Madhushudh:madhu123@sbs.tbynzrf.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error',err=>{
    console.log('Connection failed');
})
mongoose.connection.on('connected',connected=>{
    console.log('Connection established with database');
})



const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey =
  "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
const privateVapidKey = "3KzvKasA2SoCxsp0iIG_o9B0Ozvl1XDwI63JRKNIWBM";




webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  const sub = new db({
    endpoint: subscription
  })

  sub.save();
  


  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  // const payload = JSON.stringify({ title: "hahahhaha" });

  // // Pass object into sendNotification
  // webpush
  //   .sendNotification(subscription, payload)
  //   .catch(err => console.error(err));
});



app.listen(port, () => console.log(`Server started on port ${port}`));
