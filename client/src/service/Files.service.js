import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
          baseURL: `${process.env.REACT_APP_URL}/files`,
          withCredentials: true // RUTAS PERSISTENTES
        });
    }

    handleUpload = theFile => this._service.post('/upload', theFile)
}