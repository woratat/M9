import { configAuth } from './config';
import axios from 'axios';

const authUser = async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/auth/check', {
            timeout: 2000,
            headers: configAuth()
        });

        if (res.data.token === null) {
            return {};
        } else {
            localStorage.setItem('user_token', res.data.token);
            return { token: res.data.token, username: res.data.username };
        }
    } catch (error) {
        if (error.response === 401) {
            localStorage.removeItem('user_token');
            return {};
        }
    }
}

export default authUser;