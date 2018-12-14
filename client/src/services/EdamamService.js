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
    console.log(objectSearch, 'Ya en edamService')
    objectSearch.ingredientsSelected = objectSearch.ingredientsSelected.join("+");
    // console.log(objectSearch, 'Ya en edamService,despues del join')

    return this.service.post('/recipesAdvanced', objectSearch)
      .then(response => response)
  }

}

export default EdamamService;