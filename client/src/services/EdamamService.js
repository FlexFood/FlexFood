import axios from "axios";

class EdamamService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/edamam`,
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

  menuLunchSearch = objectSearch => {
    objectSearch.calories = [301,600];
    return this.service.post("/menu", objectSearch)
    .then(response => {
       return response;
    })
  };

  menuDinnerSearch = objectSearch => {
    objectSearch.calories = [0,300];
     return this.service.post("/menu", objectSearch)
     .then(response => {
        return response;
     })
   };
 
}

export default EdamamService;
