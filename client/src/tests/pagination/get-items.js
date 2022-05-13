const axios = require('axios')

const delay = (url) => {
    return axios(url)
}

module.exports = delay