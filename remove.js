var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var url = `mongodb://localhost:27017/`;
mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log(`Connected to `, url);

  var dbo = db.db("fruits"); //here fruits is the name of the db
  dbo.collection("Apples").remove({ name: "Red Apples" }, function (err, res) {
    //here Apples is the name of the collection
    if (err) throw err;
    console.log(`%s`, res);
    db.close();
  });
});
