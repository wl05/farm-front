import Request from "./Request"
export default class User {
    constructor () {
        this.request = new Request()
    }
    
    async login (phone, password) {
        return await this.request.post(`/login`, {phone, password}, false)
    }
    
    async auth () {
        return await this.request.get(`/auth`)
    }
}