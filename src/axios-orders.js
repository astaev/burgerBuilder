import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-34b8d-default-rtdb.firebaseio.com/'
});

export default instance;