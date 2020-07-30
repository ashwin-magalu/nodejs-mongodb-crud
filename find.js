var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var url = `mongodb://localhost:27017/`;
mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log(`Connected to `, url);

  var dbo = db.db("fruits"); //here fruits is the name of the db
  dbo
    .collection("Apples") //here Apples is the name of the collection
    .find()
    .toArray(function (err, res) {
      if (err) throw err;
      if (res.length) {
        console.log(res);
      } else {
        console.log(`No Matches Found!`);
      }
      db.close();
    });
});
