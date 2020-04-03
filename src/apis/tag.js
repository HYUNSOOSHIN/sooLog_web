import api from "../utils/api"
import config from "../configs/app"
import cookie from "../utils/cookie"

const apiUrl = config.url.api

const readAllTagList = async () => {
  const result = await api.get(`${apiUrl}/tag/all`)

  if (result.statusCode === 200) {
    return result.data
  } else return false
}

const createTag = async tagData => {
  const token = await cookie.getData("token")

  const result = await api.post(`${apiUrl}/tag`, {
    token,
    body: tagData,
  })

  if (result.statusCode === 200) {
    return true
  } else return false
}

export default {
  readAllTagList,
  createTag,
}
