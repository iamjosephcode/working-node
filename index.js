const axios = require('axios');

const getUser = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(
        res => console.log(res.data)
    )
    .catch(
        err => console.log('failed to fetch data')
    )
}

getUser();