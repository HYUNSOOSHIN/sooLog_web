import api from "../../utils/api"
import config from "../../configs/app"
import cookie from "../../utils/cookie"

const apiUrl = config.url.api

const getSocial = async (userId) => {

    const result = await api.get(`${apiUrl}/social/${userId}`)

    if(result.statusCode === 200){
        return result.data;
    } else return false;
}

const updateSocial = async (socialData) => {
    const token = await cookie.getData('token')

    const result = await api.put(`${apiUrl}/social`, {
        token,
        body: socialData
    }) 

    if(result.statusCode === 200){
        return true
    } else return false
}

export default {getSocial, updateSocial}