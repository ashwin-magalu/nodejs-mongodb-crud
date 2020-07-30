var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var uri = `mongodb://localhost:27017/fruits`; //here fruits is the name of the db
mongoClient.connect(uri, function (err, db) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to our url `, uri);
    db.close();
  }
});
