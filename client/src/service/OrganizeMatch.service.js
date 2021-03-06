import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/organizematch`,
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  getAllCreatedMatch = () => this._service.get("/allCreatedMatch");
  getOneMatch = id => this._service.get(`/${id}`);
  postOrganizeMatch = match => this._service.post("/new", match);
  deleteMatch = id => this._service.get(`delete/${id}`);
  postEditMatch = (id, match) => this._service.post(`edit/${id}`, match);
  joinMatch = (id, match) => this._service.post(`join/${id}`, { id, match });
  resignFromMatch = (logId, matchId) => this._service.post("/resignmatch", { logId, matchId });
  getJoinedMatch = id => this._service.post("/joinedmatch", { id } );
}
