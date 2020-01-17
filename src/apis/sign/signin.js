import api from '../../utils/api'
import cookie from '../../utils/cookie'

const signin = async (signData) => {
  let jsonData = await api.post('http://127.0.0.1:3000/signin', {
    body: signData
  })
  if(jsonData.statusCode===200) {
    const result = jsonData.result
    cookie.putData('token', result.token)
    cookie.putData('id', result.id)
    cookie.putData('email', result.email)
    cookie.putData('nickname', result.nickName)
    cookie.putData('introduce', result.introduce)
    cookie.putData('image', result.image===null? '':result.image)
    return true
  } else return false
}

export default {
  signin,
}