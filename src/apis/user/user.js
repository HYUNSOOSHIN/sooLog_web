import api from "../../utils/api"
import config from "../../configs/app"
import cookie from "../../utils/cookie"

const apiUrl = config.url.api

const getUserInfo = async id => {
  const result = await api.get(`${apiUrl}/user/${id}`)

  if (result.statusCode === 200) {
    return result.data
  } else return false
}

const nicknameNintro = async (newNick, newIntro) => {
  const token = await cookie.getData('token')
  const result = await api.put(`${apiUrl}/user/nicknameNintro`,{
    token,
    body: {newNick, newIntro}
  })

  if(result.statusCode === 200){
    return true
  } else return false
}

export default { getUserInfo, nicknameNintro }
