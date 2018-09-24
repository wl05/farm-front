import axios from 'axios';
import config from './Config';
import queryString from 'query-string';

class Request {
    async get (url, params) {
        url = params ? `${url}?${queryString.stringify(params)}&version=${config.version}` : url;
        return await axios({
            url: url,
            method: 'get',
            withCredentials: true,
            headers: config.HTTP_HEADER
        });
    }
    async post (url, params) {
        var form_data = new FormData();
        for ( let key in params ) {
            form_data.append(key, params[key]);
        }
        url = `${url}?version=${config.version}`
        return await axios({
            method: 'post',
            url: url,
            headers: config.HTTP_HEADER,
            data: form_data,
            withCredentials: true
        });
    }
    upload (url, formData, progressEvent, successEvent, failEvent) {
        const axiosConfig = {
            onUploadProgress: progressEvent
        }
        axios.post(url, formData, axiosConfig).then((res) => successEvent).catch(failEvent);
    }
}
export default Request;