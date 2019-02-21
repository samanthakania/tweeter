"use strict";

// Simulates the kind of delay we see with network or filesystem operations
//const simulateDelay = require("./util/simulate-delay");
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function (newTweet, callback) {
      db.collection('tweets').insertOne(newTweet);
        callback(null, true);
    },
    getTweets: function(callback) {
      const sortNewestFirst = (a,b) => a.created_at - b.created_at;
    db.collection("tweets").find().toArray((err, tweets) => {
          callback(null, tweets.sort(sortNewestFirst));
    });
   }
 };
}