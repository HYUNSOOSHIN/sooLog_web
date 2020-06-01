import axios from "axios"
import { navigate } from "gatsby"

const axiosFunction = method => {
  try {
    return async (url, { body = {}, token = "" } = {}) => {
      let result = await axios({
        method: method,
        url: url,
        data: body,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      }).catch(function(err) {
        if (err.response) {
          if (err.response.status === 400) {
            return false
          } else if (err.response.status === 403) {
            navigate("/login")
            return false
          }
        }
      })
      console.log(result)
      const response = result.data

      return response
    }
  } finally {
    console.log("^^")
  }
}

const api = {
  get: axiosFunction("GET"),
  post: axiosFunction("POST"),
  put: axiosFunction("PUT"),
  delete: axiosFunction("DELETE"),
}

export default api
