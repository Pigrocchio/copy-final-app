import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: "http://localhost:5000/api/club",
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  getAllClub = () => this._service.get("/getAllClub");
//   getOneCoaster = id => this._service.get(`/${id}`);
  // postOrganizeMatch = match => this._service.post("/new", match);
}
