import axios from 'axios'

const axiosFunction = (method) => {
  return async (url, {body={}, token=''}={}) => {
    let result = await axios({
      method: method,
      url: url,
      data: body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    })
    .catch(function(err) {
      if(err.response) {
        if(err.response.status===400) {
          return false
        } else if(err.response.status===403) {
          window.location.replace('/login')
          return false
        }
      }
    })
    console.log(result)
    const response = result.data

    if(response.statusCode===200) {
      return response
    } else { 
      return false
    }
  }
}

const api = {
  get: axiosFunction('GET'),
  post: axiosFunction('POST'),
  put: axiosFunction('PUT'),
  delete: axiosFunction('DELETE')
}

export default api