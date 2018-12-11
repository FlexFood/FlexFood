import axios from "axios";

class EdamamService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/edamam",
      withCredentials: true
    })
  }

  getByLabel = (label) => {
    return this.service.post('/recipes', {label})
    .then(response => response)
  }

}

export default EdamamService;