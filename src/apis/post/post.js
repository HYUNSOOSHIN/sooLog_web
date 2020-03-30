import api from "../../utils/api"
import config from "../../configs/app"
import cookie from "../../utils/cookie"

const apiUrl = config.url.api

const getPostList = async () => {
  const token = await cookie.getData("token")

  const result = await api.get(`${apiUrl}/postList`, {
    token: token,
  })

  if (result.statusCode === 200) {
    return result.data.reverse()
  } else return false
}

const getPostListByUserIndex = async userId => {
  const token = await cookie.getData("token")

  const result = await api.get(`${apiUrl}/postList/${userId}`, {
    token: token,
  })

  if (result.statusCode === 200) {
    return result.data.reverse()
  } else return false
}

const readPost = async postId => {
  const result = await api.get(`${apiUrl}/post?postId=${postId}`)

  if ((result.statusCode = 200)) {
    return result.data
  } else return false
}

const createPost = async postData => {
  const token = await cookie.getData("token")

  const result = await api.post(`${apiUrl}/post`, {
    body: postData,
    token: token,
  })

  if (result.statusCode === 200) {
    return result
  } else return false
}

const updatePost = async postData => {
  const token = await cookie.getData("token")

  const result = await api.put(`${apiUrl}/post`, {
    body: postData,
    token: token,
  })

  if (result.statusCode === 200) {
    return result.data
  } else return false
}

const deletePost = async postId => {
  const token = await cookie.getData("token")

  const result = await api.delete(`${apiUrl}/post?postId=${postId}`, {
    token: token,
  })

  if (result.statusCode === 200) {
    return result.data
  } else return false
}

export default {
  getPostList,
  getPostListByUserIndex,
  createPost,
  readPost,
  updatePost,
  deletePost,
}
