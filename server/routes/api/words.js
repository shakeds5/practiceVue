const express = require("express");
const router = express.Router();

const mongodb = require("mongodb");
const uri =
  "mongodb+srv://admin:Aa123456@mycluster-m7al8.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// there are Cursor Methods and Collection Methods
// with collection methods we dont have to use `client.close();`
// mongodb handles connection pooling for you.
// but with Cursor Methods we shold close manually
// to clean up the resource like so-
// db.collection.method(<query>).close()
// ALSO we have-
// autoReconnect(defaults to true) which will attempt to keep the connection available.
// You also have poolSize(defaults to 5)

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
      var records = await collection.find({}).toArray(); //.close();
      res.send(records.reverse());
    } catch (error) {
      res.status(503).send(); // Service Unavailable
    }
  });
});

const Dictionary = require("oxford-dictionary-api");
const http = require("https");

router.get("/:word", (req, res) => {
  const app_id = "45b787bc"; // insert your APP Id
  const app_key = "ecf4ff8aae9baa19ccb047462c4f179e"; // insert your APP Key
  const wordToSearch = req.params.word.trim().toLowerCase();

  function getDefinition(word) {
    return new Promise((resolve, reject) => {
      const options = {
        host: "od-api.oxforddictionaries.com",
        port: "443",
        path: `/api/v2/entries/en-gb/${word}?fields=definitions&strictMatch=false`,
        method: "GET",
        headers: {
          app_id: app_id,
          app_key: app_key,
        },
      };

      http.get(options, (resp) => {
        let body = "";
        resp.on("data", (d) => {
          body += d;
        });
        resp.on("end", () => {
          let parsed = JSON.stringify(body);
          resolve(parsed);
        });
        resp.on("error", () => {
          reject();
        });
      });
    });
  }

  getDefinition(wordToSearch)
    .then((definition) => {
      definition = JSON.parse(JSON.parse(definition));
      definition =
        definition.results[0].lexicalEntries[0].entries[0].senses[0]
          .definitions[0];
      res.send(definition);
    })
    .catch((err) => {
      res.status(503).send(err); // Service Unavailable
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
      let DBresp = await collection.insertOne({
        searchingValue: req.body.searchingValue,
        definition: req.body.definition,
        level: req.body.level,
      });

      res.status(201).send(DBresp.insertedId);
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

      res.status(200).send();
    } catch (error) {
      res.status(503).send(); // Service Unavailable
    }
  });
});

router.post("/:id", (req, res) => {
  console.log("im here!", req.params.id);
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

      res.status(201).send(); // request has been fulfilled
    } catch (error) {
      res.status(503).send({ message: error }); // Service Unavailable
    }
  });
});

module.exports = router;
