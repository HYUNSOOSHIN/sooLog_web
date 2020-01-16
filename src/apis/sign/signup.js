import api from '../../utils/api'

const signup = async (signData) => {
  let jsonData = await api.post('http://127.0.0.1:3000/signup', {
    body: signData
  })
  if(jsonData.statusCode===200) {
    return true
  } else return false
}

export default {
  signup,
}