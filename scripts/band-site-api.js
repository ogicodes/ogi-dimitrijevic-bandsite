

async function getApiKey() {
    const response = await axios.get('https://unit-2-project-api-25c1595833b2.herokuapp.com/register')
    return response.data.api_key
}

const apiKey = getApiKey()

//defining api class

class BandSiteApi {

    //constructor that only takes the key as a parameter
    constructor(apiKey) {
        this.apiKey = apiKey 
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/'
        this.api = axios.create()
    }

    async getComments() {
        const endpoint ='comments'
        try {
            const response = await this.api.get(`${this.baseUrl}${endpoint}?api_key=<${this.apiKey}>`);
            return response.data
        } 
          
        catch (error) {
            console.error('Error', error);
            throw error;
        }
    }

    async postData(endpoint, data) {
        try {
            const response = await this.api.post(`${this.baseUrl}${endpoint}?api_key=<${this.apiKey}>`, data)
            console.log(response.data)
        }
        catch (error) {
            console.error('Error', error);
            throw error;
        }  
    }  
}



const bandSiteApiComments = new BandSiteApi(apiKey)

const bandSiteApiPostComment = new BandSiteApi(apiKey)
//const postComment = new BandSiteApi(apiKey)




//postComment.postData('comments',)





