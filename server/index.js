const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
// cors is going to stop the cross origin chrome error from happening
// so we can make requests from other domains

const app = express();

// Middleware
app.use(bodyParser.json());
// Instead of body-parser, u can use express.json() for json
// or express.urlencoded() for forms
app.use(cors());

const words = require("./routes/api/words");
app.use("/api/words", words);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
