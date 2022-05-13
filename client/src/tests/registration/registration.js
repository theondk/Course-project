const axios = require('axios')

const delay = (data) => {
    return axios({
        method: 'post',
        url: 'http://localhost:8080/user/add',
        data
    })
}

module.exports = delay