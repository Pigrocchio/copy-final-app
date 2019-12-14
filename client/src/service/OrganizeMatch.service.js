import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: "http://localhost:5000/api/organizematch",
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  getAllCreatedMatch = () => this._service.get("/allCreatedMatch");
  getOneMatch = id => this._service.get(`/${id}`);
  postOrganizeMatch = match => this._service.post("/new", match);
  deleteMatch = id => this._service.get(`delete/${id}`);
  postEditMatch = (id, match) => this._service.post(`edit/${id}`, match);
  joinMatch = (id, match) => this._service.post(`join/${id}`, { id, match });
}
