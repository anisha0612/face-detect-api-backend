import Clarifai from "clarifai";
import dotenv from "dotenv";
dotenv.config();

const app = new Clarifai.App({ apiKey: "1ec91d93e3b64c76b1bdc3bf6327a73f" });

const handleApiCall = (req, res) => {
  app.models
    .predict("d02b4508df58432fbb84e800597b8959", req.body.input)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

export { handleApiCall };
