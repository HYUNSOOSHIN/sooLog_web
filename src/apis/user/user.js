import api from "../../utils/api"
import config from "../../configs/app"
import cookie from "react-cookies"

const apiUrl = config.url.api

const getUserInfo = async id => {
  const result = await api.get(`${apiUrl}/user/${id}`)

  if (result.statusCode === 200) {
    return result.data
  } else return false
}

const updateNicknameNIntro = async (newNick, newIntro) => {
  const token = await cookie.load("token")
  const result = await api.put(`${apiUrl}/user/nicknameNintro`, {
    token,
    body: { newNick, newIntro },
  })

  if (result.statusCode === 200) {
    return true
  } else return false
}

const updateEmail = async email => {
  const token = await cookie.getData("token")
  const result = await api.put(`${apiUrl}/user/email`, {
    token,
    body: email,
  })

  if (result.statusCode === 200) {
    return true
  } else return false
}

const deleteUser = async () => {
  const token = await cookie.getData("token")
  const result = await api.delete(`${apiUrl}/user`, {
    token,
  })

  if (result.statusCode === 200) {
    return true
  } else return false
}

export default { getUserInfo, updateNicknameNIntro, updateEmail, deleteUser }
