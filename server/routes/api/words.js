const express = require("express");
const router = express.Router();

const mongodb = require("mongodb");
const uri =
  "mongodb+srv://admin:Aa123456@mycluster-m7al8.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get words
router.get("/", (req, res) => {
  client.connect(async (err) => {
    try {
      if (err) {
        res.status(503).send({
          // Service Unavailable
          message: err.name,
        });
      }
      const collection = client
        .db("EnglishStickyNoteStyleDB")
        .collection("words");
      // perform actions on the collection object
      var records = await collection.find({}).toArray();
      // TODO reverse or sort records
      // client.close();
      res.send(records);
    } catch (error) {
      res.status(503).send(); // Service Unavailable
    }
  });
});

// Add word
router.post("/", (req, res) => {
  client.connect(async (err) => {
    try {
      if (err) {
        res.status(503).send({
          // Service Unavailable
          message: err.name,
        });
      }
      const collection = client
        .db("EnglishStickyNoteStyleDB")
        .collection("words");
      await collection.insertOne({
        searchingValue: req.body.searchingValue,
        definition: req.body.definition,
        level: req.body.level,
      });
      // client.close();
      res.status(201).send();
    } catch (error) {
      res.status(503).send(); // Service Unavailable
    }
  });
});

// Delete word
router.delete("/:id", (req, res) => {
  client.connect(async (err) => {
    try {
      if (err) {
        res.status(503).send({
          // Service Unavailable
          message: err.name,
        });
      }
      const collection = client
        .db("EnglishStickyNoteStyleDB")
        .collection("words");
      await collection.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
      // client.close();
      res.status(200).send();
    } catch (error) {
      res.status(503).send(); // Service Unavailable
    }
  });
});

router.post("/:id", (req, res) => {
  client.connect(async (err) => {
    try {
      if (err) {
        res.status(503).send({
          // Service Unavailable
          message: err.name,
        });
      }
      const collection = client
        .db("EnglishStickyNoteStyleDB")
        .collection("words");
      await collection.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            level: req.body.level,
          },
        }
      );

      // client.close();

      res.status(201).send(); // request has been fulfilled
    } catch (error) {
      res.status(503).send({ message: error }); // Service Unavailable
    }
  });
});

module.exports = router;
