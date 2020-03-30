import api from "../../utils/api"
import config from "../../configs/app"
import cookie from "../../utils/cookie"

const apiUrl = config.url.api

const signin = async signData => {
  let jsonData = await api.post(`${apiUrl}/signin`, {
    body: signData,
  })
  if (jsonData.statusCode === 200) {
    const result = jsonData.data
    cookie.putData("token", result.token)
    cookie.putData("_id", result._id)
    cookie.putData("id", result.id)
    cookie.putData("email", result.email)
    cookie.putData("nickname", result.nickname)
    // cookie.putData('image', result.image===null? '':result.image)
    return true
  } else return false
}

export default {
  signin,
}
