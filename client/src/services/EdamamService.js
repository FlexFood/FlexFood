import axios from "axios";

import('dotenv').config();

class EdamamService {
  constructor() {
  
      // this.q: "",
      // this.app_id: "",
      // this.app_key: "",
      // this.from: "",
      // this.to: "",
      // this.calories: "",
      // this.health: ""


    this.service = axios.create({
      baseURL: "https://test-es.edamam.com/search",
    
      // withCredentials: true
    })
  }

  // https://test-es.edamam.com/search?q=toma&app_id=71685624&app_key=40cc36ad5a53b6207a187b1579302729

  // // axios.post("http://localhost:5000/api/auth/login", {user}, {withCredentials: true})
  // find = () => {
  //   return this.service.get(`?q=${this.state.search}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
  //   .then(response => response.data)
  // }

}

export default EdamamService;