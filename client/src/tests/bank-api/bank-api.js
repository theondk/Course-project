const axios = require('axios')

const delay = () => {
    return axios('https://developerhub.alfabank.by:8273/partner/1.0.1/public/rates')
}

module.exports = delay