import cookie from "react-cookies"

const getData = async key => {
  const value = await cookie.load(key)
  if (value !== null && value !== undefined) {
    return value
  } else return null
}

const putData = async (key, value) => {
  await cookie.save(key, value)
}

const removeData = async key => {
  await cookie.remove(key)
}

const removeAllData = async () => {
  const data = cookie.loadAll()
  for (const key in data) {
    await cookie.remove(key)
  }
}

export default {
  getData,
  putData,
  removeData,
  removeAllData,
}
