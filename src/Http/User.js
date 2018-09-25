import Request from "./Request"
import Config from "./Config"
export default class User {
    constructor () {
        this.request = new Request()
    }
    
    async login (username, password) {
        console.log(username, password, `${Config.gateway}/login`)
        console.log(this.request.post)
        await this.request.post(`/login`, {username, password})
    }
}