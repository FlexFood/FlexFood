import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    })
  }
  signup = (user) => {
    const formData = new FormData();
    Object.keys(user).forEach(key => formData.append(key, user[key]));

    return this.service.post('/signup', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => response.data)
  }

  login = (user) => {
    return this.service.post('/login', user)
      .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
      .then(response => response.data);
  }

  logout = () => {
    return this.service.get('/logout')
      .then(response => response.data);
  }

  edit = (update) => {
    return this.service.post('/edit', update)
      .then(response => response.data);
  }

  saveMenu = (menu) => {
    
    return this.service.post('/menu', menu,{ headers: {
      "Content-Type": "application/json"
    }})
      .then(response => response.data);
  }

  getUserMenus = () => {
    return this.service.get('/menus')
      .then(response => {
        console.log("Llega al front ASIIIIN", response)
        return response.data
      })
  };

}

export default AuthService;