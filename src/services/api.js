import axios from 'axios';

const apiUrl = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';

const api = axios.create({ baseURL: apiUrl });

export default api;
