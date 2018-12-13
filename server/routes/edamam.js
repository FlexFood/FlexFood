const express = require("express");
const edamamRoutes = express.Router();
const axios = require("axios");

edamamRoutes.post("/recipes", (req, res) => {
  const { label } = req.body;
// label = label.join(" ")
// console.log(label)
  axios
    .get(
      `https://test-es.edamam.com/search?q=${label}&app_id=${
        process.env.APP_ID
      }&app_key=${process.env.APP_KEY}`
    )
    .then(response => {
      res.status(200).json(response.data.hits);
    })
    .catch(err => console.log("ERROR EN PETICION A API EDAMAM", err));
});

module.exports = edamamRoutes;
