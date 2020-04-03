import api from "../../utils/api"
import config from "../../configs/app"
import cookie from "../../utils/cookie"

const apiUrl = config.url.api

const getEamilRecieveOption = async () => {
  const token = await cookie.getData("token")

  const result = await api.get(`${apiUrl}/email`, {
    token,
  })

  if (result.statusCode === 200) {
    return result.data
  } else return false
}

const setEamilRecieveOption = async option => {
  const token = await cookie.getData("token")

  const result = await api.put(`${apiUrl}/email`, {
    token,
    body: option,
  })

  if (result.statusCode === 200) {
    return true
  } else return false
}

export default {
  getEamilRecieveOption,
  setEamilRecieveOption,
}
