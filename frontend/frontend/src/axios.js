import axios from 'axios';
import { baseUrl } from './store/constants';

const instance = axios.create({
    baseURL: baseUrl
});

instance.defaults.baseURL = baseUrl;
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
