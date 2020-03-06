import api from '../../utils/api'
import app from '../../configs/app'
import cookie from '../../utils/cookie'

const url = app.url.api

const getPostList = async() => {
  const token = cookie.getData('token')

  const result = await api.get(`${url}/post/getPostsList`, {
    token: token
  })
  
  if(result.statusCode==200){
    return result.result.reverse()
  } else return false
}

const createPost = async(postData) => {
  const token = cookie.getData('token')

  const result = await api.post(`${url}/post`, {
    body: postData,
    token: token
  })
 
  if(result.statusCode==200){
    return result.result
  } else return false
}

const readPost = async(postId) => {
  const token = cookie.getData('token')

  const result = await api.get(`${url}/post?postId=${postId}`, {
    token: token
  })

  if(result.statusCode=200){
    return result.result
  } else return false
}

export default {
  getPostList,
  createPost,
  readPost
}