import validator from 'validator';

const configAuth = () => {
    const token = localStorage.getItem('user_token');

    if (token && validator.isJWT(token)) {
        return { 'Authorization': 'Bearer ' + token }
    } else {
        return {};
    }
}

export { configAuth }