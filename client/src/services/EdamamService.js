import axios from "axios";

class EdamamService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/edamam",
      withCredentials: true
    })
  }

  getByLabel = (label) => {
    return this.service.post('/recipes', { label })
      .then(response => response)
  }

  advancedSearch = (objectSearch) => {
    objectSearch.ingredientsSelected = objectSearch.ingredientsSelected.join("+");
    return this.service.post('/recipesAdvanced', objectSearch)
      .then(response => {
        return response
      })
  }

  menuSearch = (objectSearch) => {

  }

}

export default EdamamService;