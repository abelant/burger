import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-fbceb.firebaseio.com/'
});

export default instance;