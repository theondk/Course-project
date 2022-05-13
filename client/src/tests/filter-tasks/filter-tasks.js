const axios = require('axios')

const delay = (id) => {
    return axios(`http://localhost:8080/task/getByUserId/${id}`)
}

module.exports = delay