const express = require("express");
const edamamRoutes = express.Router();
const axios = require("axios");

edamamRoutes.post("/recipes", (req, res) => {
  const { label } = req.body;
// label = label.join(" ")
// console.log(label)
  axios
    .get(
      `https://api.edamam.com/search?q=${label}&app_id=${
        process.env.APP_ID
      }&app_key=${process.env.APP_KEY}`
    )
    .then(response => {
      res.status(200).json(response.data.hits);
    })
    .catch(err => console.log("ERROR EN PETICION A API EDAMAM", err));
});


https://test-es.edamam.com/search?
// calories=591-722
// &health=peanut-free%26health=tree-nut-free
// &q=tomate
// &app_id=71685624
// &app_key=40cc36ad5a53b6207a187b1579302729

edamamRoutes.post("/recipesAdvanced", (req, res) => {

  const { ingredientsSelected, healthLabels } = req.body;
  //Al menos llega uno lleno
  let urlCommun = `https://api.edamam.com/search?` +
    `app_id=${process.env.APP_ID}` +
    `&app_key=${process.env.APP_KEY}`

    if(ingredientsSelected!=="") {
      console.log(ingredientsSelected)
      urlCommun += `&q=${ingredientsSelected}`
    }  
    if(healthLabels.length) {
      healthLabels.forEach(label => {
        console.log(label)
        urlCommun += `&health=${label}`
      })
    }

    console.log(urlCommun, 'url vompletaaaaaa')
    
    //console.log(urlCommun,'url con ingrs q added')
  //meter aqui la seguridad
  //Contemplar q lleguen vacios

  // https://api.edamam.com/search?app_id=71685624
  // &app_key=40cc36ad5a53b6207a187b1579302729
  // &q=tomato+tuna&health=peanut-free
  // &health=alcohol-free&health=vegan

  // https://api.edamam.com/search?app_id=71685624
  // &app_key=40cc36ad5a53b6207a187b1579302729
  // &q=tomato+tuna&health=alcohol-free
  // &health=vegan&health=penaut-free
 
  axios
    .get(urlCommun)
    .then(response => {
      console.log(response)
      res.status(200).json(response.data.hits);
    })
    .catch(err => console.log("ERROR EN PETICION A API EDAMAM", err));
});

edamamRoutes.post("/menu", (req, res) => {

  const { healthLabels, days } = req.body;
  const calories = [10, 300]
  //Al menos llega uno lleno
  let urlCommun = `https://api.edamam.com/search?` +
    `app_id=${process.env.APP_ID}` +
    `&app_key=${process.env.APP_KEY}`

    if(ingredientsSelected!=="") {
      console.log(ingredientsSelected)
      urlCommun += `&q=${ingredientsSelected}`
    }  
    if(healthLabels.length) {
      healthLabels.forEach(label => {
        console.log(label)
        urlCommun += `&health=${label}`
      })
    }

    console.log(urlCommun, 'url vompletaaaaaa')
    
    //console.log(urlCommun,'url con ingrs q added')
  //meter aqui la seguridad
  //Contemplar q lleguen vacios

  // https://api.edamam.com/search?app_id=71685624
  // &app_key=40cc36ad5a53b6207a187b1579302729
  // &q=tomato+tuna&health=peanut-free
  // &health=alcohol-free&health=vegan

  // https://api.edamam.com/search?app_id=71685624
  // &app_key=40cc36ad5a53b6207a187b1579302729
  // &q=tomato+tuna&health=alcohol-free
  // &health=vegan&health=penaut-free
 
  axios
    .get(urlCommun)
    .then(response => {
      // axios().get
      console.log(response)
      res.status(200).json(response.data.hits);
    })
    .catch(err => console.log("ERROR EN PETICION A API EDAMAM", err));
});
module.exports = edamamRoutes;
