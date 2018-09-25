import axios from 'axios';
import config from './Config';
import queryString from 'query-string';

class Request {
    async get (url, params, auth = true) {
        url = params
            ? `${config.gateway}${url}?${JSON.stringify(params)}`
            : `${config.gateway}${url}`;
        const result = await axios({
            url : url,
            method : 'get',
            withCredentials : true,
            headers : config.HTTP_HEADER
        });
        // if (result.data.error_code === "ws_002" && auth) {
        //     global_store.updateUserInfo(null);
        //     window.location = '/login';
        // }
        return result;
    }
    
    async post (url, params) {
        // var form_data = new FormData();
        // for (let key in params) {
        //     form_data.append(key, params[ key ]);
        // }
        url = `${config.gateway}${url}`;
        console.log(url)
        const result = await axios({
            method : 'post',
            url : url,
            headers : config.HTTP_HEADER,
            data : JSON.stringify(params),
            withCredentials : true
        });
        // if (result.data.error_code === "ws_002" && auth) {
        //     global_store.updateUserInfo(null);
        //     window.location = '/login';
        // }
        return result;
    }
}
export default Request;