import cookie from "react-cookies"

const getData = key => {
  const value = cookie.load(key)
  if (value !== null && value !== undefined) {
    return value
  } else return null
}

const putData = (key, value) => {
  cookie.save(key, value)
}

const removeData = key => {
  cookie.remove(key)
}

const removeAllData = () => {
  const data = cookie.loadAll()
  for (const key in data) {
    cookie.remove(key)
  }
}

export default {
  getData,
  putData,
  removeData,
  removeAllData,
}
