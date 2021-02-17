import express from "express";
import cors from "cors";
import { handleRegister } from "./controllers/register.js";
import { handleSigin } from "./controllers/sigin.js";
import { profileId } from "./controllers/profile.js";
import { handleEntries } from "./controllers/entries.js";
import { handleApiCall } from "./controllers/api.js";
import db from "./controllers/database.js";

const app = express();
app.use(express.json());

var whitelist = ["https://arcane-coast-96493.herokuapp.com/"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  // res.json("database");
  res.send(db.users);
});

app
  .route("/signin")
  .get((req, res) => {
    res.json("sign in page");
  })
  .post((req, res) => {
    handleSigin(req, res);
  });

app
  .route("/register")
  .get((req, res) => {
    res.json("register page");
  })
  .post((req, res) => {
    handleRegister(req, res);
  });

app.get("/profile/:id", (req, res) => {
  profileId(req, res);
});

app.put("/image", (req, res) => {
  handleEntries(req, res);
});

app.post("/imageurl", (req, res) => {
  handleApiCall(req, res);
});

app.listen(process.env.PORT || 3500, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
