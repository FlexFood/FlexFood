import axios from "axios";

class EdamamService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/edamam",
      withCredentials: true
    });
  }

  getByLabel = label => {
    return this.service.post("/recipes", { label }).then(response => response);
  };

  advancedSearch = objectSearch => {
    objectSearch.ingredientsSelected = objectSearch.ingredientsSelected.join("+");
    return this.service
      .post("/recipesAdvanced", objectSearch)
      .then(response => {
        return response;
      });
  };

  menuLunchSearch = () => {
   const menuSearchObj = {healthLabels:["peanut-free", "vegetarian"], days: 3, calories:[301,600]}
    return this.service.post("/menu", menuSearchObj)
    .then(response => {
      console.log(response)
       return response;
    })
  };

  menuDinnerSearch = () => {
    const menuSearchObj = {healthLabels:["peanut-free", "vegetarian"], days: 3, calories:[0,300]}
     return this.service.post("/menu", menuSearchObj)
     .then(response => {
       console.log(response)
       // return response;
     })
   };
  
}

export default EdamamService;
