const axios = require('axios')
const bandLevel = require('./config')
var Url = process.env.URL

exports.getJobRole = async (id) => {
  try {
    const jobRoleResponse = await axios.get(Url + 'job-specification/' + id)
    return jobRoleResponse.data
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

exports.getTraining = async (id) => {
  try {
    const trainResponse = await axios.get(Url + 'view-band-training/' + id)
    console.log(trainResponse.data)
    return trainResponse.data
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

exports.getCompetencies = async (id) => {
  try {
    const competenciesResponse = await axios.get(Url + 'viewCompetencies/' + id)
    console.log(competenciesResponse.data)
    return competenciesResponse.data
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

exports.getCapabilities = async () => {
  try {
    const viewCapabalility = await axios.get(Url + 'viewCapabilities')
    console.log(viewCapabalility.data)
    return viewCapabalility.data
  } catch (e) {
    return new Error('Could not return Capabilities')
  }
}

exports.getCapabilitiesNames = async () => {
  try {
    const viewCapabilitiesNames = await axios.get(Url + 'viewCapabilitiesNames')
    console.log(viewCapabilitiesNames.data)
    return viewCapabilitiesNames.data
  } catch (e) {
    console.log(e)
    return new Error('Could not return capability names')
  }
}

exports.getJobRoles = async () => {

  try {
    const viewJobRoles = await axios.get(Url + 'job-roles')
    console.log(viewJobRoles.data)
    return viewJobRoles.data
  } catch (e) {
    console.log(e)
  }
  return ('Could not return roles')
}

exports.getJobRolesByCapability = async (id) => {

  try {
    const viewJobRoles = await axios.get(Url + 'job-roles-by-capability/' + id)
    console.log(viewJobRoles.data)
    return viewJobRoles.data
  } catch (e) {
    console.log(e)
  }
  return ('Could not return roles')
}

exports.viewBandLevel = async () => {
  try {
    const response = await axios.get(Url + 'viewBandLevel')
    console.log(response.data)
    return response.data
  } catch (e) {
    return new Error('Could not get band')
  }
}

exports.getBandLevelNames = async () => {

  try {
    const viewBandLevel = await axios.get(Url + 'viewBandLevelNames')
    console.log(viewBandLevel.data)
    return viewBandLevel.data
  } catch (e) {
    return new Error('Could not get band names')
  }
}

exports.deleteJobRoles = async (idList) => {

  try {
    const delJobRoles = await axios.delete(Url + 'delete-job-roles',
      { data: idList })
    console.log(delJobRoles)
    return delJobRoles.status
  } catch (e) {
    return new Error('Could not delete these Jobs')
  }
}

exports.addJobRole = async function (jobRole) {
  try {
    const response = await axios.post(Url + 'add-job-roles', jobRole)
    return response.status
  } catch (e) {
    if (e.response === undefined) {
      throw new Error('Undefined error has occurred')
    } else if (e.response.status === 500) {
      if (e.response.data === undefined) {
        throw new Error('An error occurred while executing this request')
      }
    } else if (e.response.status === 404 || e.response.status === 400) {
      throw new Error('Bad request')
    } else if (e.response.status === 503) {
      throw new Error('Server is unavaliable')
    } else {
      throw new Error('Not handled error had occurred')
    }
  }
}

exports.getUserByEmail = async (email) => {
  try {
    const viewUser = await axios.get(Url + 'user/' + email)
    console.log(viewUser.data)
    return viewUser.data
  } catch (e) {
    return new Error('Could not return User. Please try again.')
  }
}

exports.getGenderBias = async (biasInput) => {

  try {
    const genderBias = await axios.post(Url + 'gender-bias', { biasInput })
    console.log(genderBias.data)
    return genderBias.data
  } catch (e) {
    return new Error('Could not return the gender bias. Please try again.')
  }
}

exports.createJobWithoutLink = async (id, jobRole) => {
  try {
    const response = await axios.put(Url + 'editJobRole/' + id, jobRole)

    return response.status
  } catch (e) {
    if (e.response.status == 400) {
      return new Error('Invalid data')
    }
    if (e.response.status == 500) {
      return new Error('Could not edit employee')
    } else {
      return new Error('went wrong')
    }
  }
}
