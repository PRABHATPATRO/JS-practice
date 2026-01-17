class ApiUtils {

    constructor(apiRequest)
    {
       this.apiRequest = apiRequest;
    }
    async getToken(payload) {
        const loginResponse = await  this.apiRequest.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            { data: payload,
                Headers: {
                    'content-type':'application/json'
                }
            })
            return (await loginResponse.json()).token ;
    }

}
module.exports = {ApiUtils}