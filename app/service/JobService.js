const axios = require('axios')
const { response } = require('express')
axios.defaults.baseURL = process.env.API_URL

URL = '/api/job-roles/'

module.exports.getJobRoles = async function () {
  try {
    const response = await axios.get(URL)
    return response.data
  } catch (e) {
    if (e.response === undefined) {
      throw new Error('Undefined error has occurred')
    } else if (e.response.status === 500) {
      throw new Error('An error occurred while executing this request')
    } else if (e.response.status === 404) {
      throw new Error('Bad request')
    }
  }
}
