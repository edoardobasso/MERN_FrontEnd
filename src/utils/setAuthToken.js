import axios from 'axios';
const seAuthToken = token => {

    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaultsdefaults.headers.common['x-auth-token'];
    }
}
export default seAuthToken;