const axios = require('axios')

const delay = (motion) => {
    return axios({
        method: 'put',
        url: `http://localhost:8080/user/role/handler/8/${motion}`,
        data: {}
    })
}

module.exports = delay