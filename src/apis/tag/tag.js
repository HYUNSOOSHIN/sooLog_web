import api from '../../utils/api'
import cookie from '../../utils/cookie'
import app from '../../configs/app'

const url = app.url.api

const getTags = async(postId) => {
  const token = cookie.getData('token')

  const result = await api.get(`${url}/tag?postId=${postId}`,{
    token: token
  })

  if(result.statusCode === 200){
    return result.result
  } else return false
}

export default {
  getTags
}