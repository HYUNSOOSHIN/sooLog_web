import api from "../../utils/api"
import config from "../../configs/app"
import cookie from "react-cookies"

const apiUrl = config.url.api

const signin = async signData => {
  let jsonData = await api.post(`${apiUrl}/signin`, {
    body: signData,
  })
  if (jsonData.statusCode === 200) {
    const result = jsonData.data
    cookie.save("token", result.token)
    cookie.save("_id", result._id)
    cookie.save("id", result.id)
    cookie.save("email", result.email)
    cookie.save("nickname", result.nickname)
    // cookie.save('image', result.image===null? '':result.image)
    return true
  } else return false
}

export default {
  signin,
}
