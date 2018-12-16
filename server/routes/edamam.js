const express = require("express");
const edamamRoutes = express.Router();
const axios = require("axios");

edamamRoutes.post("/recipes", (req, res) => {
  const { label } = req.body;
// label = label.join(" ")
// console.log(label)
  axios
    .get(
      `https://api.edamam.com/search?q=${label}&to=12&app_id=${
        process.env.APP_ID
      }&app_key=${process.env.APP_KEY}`
    )
    .then(response => {
      res.status(200).json(response.data.hits);
    })
    .catch(err => console.log("ERROR EN PETICION A API EDAMAM", err));
});


edamamRoutes.post("/recipesAdvanced", (req, res) => {

  const { ingredientsSelected, healthLabels } = req.body;
  //Al menos llega uno lleno
  let urlCommun = `https://api.edamam.com/search?` +
    `app_id=${process.env.APP_ID}` +
    `&app_key=${process.env.APP_KEY}`

    if(ingredientsSelected!=="") {
      urlCommun += `&q=${ingredientsSelected}`
    }  
    if(healthLabels.length) {
      healthLabels.forEach(label => {
        urlCommun += `&health=${label}`
      })
    }

    console.log(urlCommun, 'url vompletaaaaaa')
    
  axios
    .get(urlCommun)
    .then(response => {
      res.status(200).json(response.data.hits);
    })
    .catch(err => console.log("ERROR EN PETICION A API EDAMAM", err));
});

edamamRoutes.post("/menu", (req, res) => {
  const { healthLabels, days, calories } = req.body;
  let urlCommun = `https://api.edamam.com/search?q=&` +
    `app_id=${process.env.APP_ID}` +
    `&app_key=${process.env.APP_KEY}`

    if(days !== 0) {
      urlCommun += `&from=0&to=${days}`
    }  
    if(healthLabels.length) {
      healthLabels.forEach(label => {
        urlCommun += `&health=${label}`
      })
    }
    if(calories.length === 2){
      urlCommun += `&calories=${calories[0]}-${calories[1]}`
    }
  axios
    .get(urlCommun)
    .then(response => {
      res.status(200).json(response.data.hits);

    })
    .catch(err => console.log("ERROR EN PETICION A API MENU EDAMAM", err));
});

module.exports = edamamRoutes;
