const axios = require('axios')

const delay = (data) => {
    return axios({
        method: 'post',
        url: 'http://localhost:8080/user/authUser',
        data
    })
}

module.exports = delay