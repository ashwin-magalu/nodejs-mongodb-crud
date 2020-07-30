var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var url = `mongodb://localhost:27017/`;
mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log(`Connected to `, url);

  var dbo = db.db("fruits"); //here fruits is the name of the db
  var doc1 = { name: "Red Apples", color: "Red" };
  var doc2 = { name: "Green Apples", color: "Green" };
  var doc = [doc1, doc2];
  dbo.collection("Apples").insertMany(doc, function (err, res) {
    //here Apples is the name of the collection
    if (err) throw err;
    console.log("Documents inserted: ", res.insertedCount);
    db.close;
  });
});
