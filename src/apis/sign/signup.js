import api from "../../utils/api"
import config from "../../configs/app"

const apiUrl = config.url.api

const signup = async signData => {
  let jsonData = await api.post(`${apiUrl}/signup`, {
    body: signData,
  })

  if (jsonData.statusCode === 200) {
    return true
  } else return jsonData.message
}

export default {
  signup,
}
