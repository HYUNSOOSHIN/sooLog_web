import api from '../../utils/api'
import cookie from '../../utils/cookie'
import app from '../../configs/app'

const url = app.url.api

const getAllTags = async() => {
  const token = cookie.getData('token')

  const result = await api.get(`${url}/tag/allTags`,{
    token: token
  })

  if(result.statusCode === 200){
    return result.result
  } else return false
}

const getTags = async() => {
  const token = cookie.getData('token')

  const result = await api.get(`${url}/tag`,{
    token: token
  })

  if(result.statusCode === 200){
    return result.result
  } else return false
}

const getPostTags = async(postId) => {
  const token = cookie.getData('token')

  const result = await api.get(`${url}/tag/postTags?postId=${postId}`,{
    token: token
  })

  if(result.statusCode === 200){
    return result.result
  } else return false
}

const createTag = async(postData) => {
  const token = cookie.getData('token') 

  const result = await api.post(`${url}/tag?postId=${postData.postId}`,{
    token: token,
    body: postData
  })

  if(result.statusCode === 200){
    return result.result
  } else return false
}

export default {
  getAllTags,
  getTags,
  getPostTags,
  createTag
}