import api from "../../utils/api"
import config from "../../configs/app"
import cookie from "../../utils/cookie"

const apiUrl = config.url.api

const getUserInfo = async userId => {
  console.log(userId)
  const result = await api.get(`${apiUrl}/user/${userId}`)

  if (result.statusCode === 200) {
    return result.data
  } else return false
}

export default { getUserInfo }
