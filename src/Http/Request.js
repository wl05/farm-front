import axios from 'axios'
import config from './Config'

class Request {
    async get (url, params) {
        let headers = {...config.HTTP_HEADER}
        url = params
            ? `${config.gateway}${url}?${JSON.stringify(params)}`
            : `${config.gateway}${url}`
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        headers.authorization = `Bearer ${token}`
        const result = await axios({
            url : url,
            method : 'get',
            withCredentials : true,
            headers : headers
        });
        return result
    }
    
    async post (url, params) {
        let headers = {...config.HTTP_HEADER}
        url = `${config.gateway}${url}`
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        headers.Authorization = `Bearer ${token}`
        const result = await axios({
            method : 'post',
            url : url,
            headers : headers,
            data : JSON.stringify(params),
            withCredentials : true
        })
        return result
    }
}
export default Request