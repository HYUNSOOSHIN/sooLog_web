import cookie from 'react-cookies'

const getData = (key) => {
  return cookie.load(key)
}

const putData = (key,value) => {
  cookie.save(key,value)
}

const removeData = (key) => {
  cookie.remove(key)
}

const removeAllData = () => {
  const data = cookie.loadAll()
  for(const key in data) {
    cookie.remove(key)
  }
}

export default {
  getData,
  putData,
  removeData,
  removeAllData
}