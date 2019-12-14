import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/files',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    handleUpload = theFile => this._service.post('/upload', theFile)
}