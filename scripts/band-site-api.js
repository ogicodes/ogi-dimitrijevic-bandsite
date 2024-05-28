
// created a function that calls te api and gets the api key
async function getApiKey() {
    const response = await axios.get('https://unit-2-project-api-25c1595833b2.herokuapp.com/register')
    return response.data.api_key
}

// created a variable that stores the key 
const apiKey = getApiKey()

//defining api class

class BandSiteApi {

    //constructor that only takes the key as a parameter
    constructor(apiKey) {
        //constructor has 3 initial properties
        this.apiKey = apiKey 
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/'
        this.api = axios.create()
    }

    // get comments method gets the comments from the api using the base url endpoint and api key
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

    // post comments method takes any data as a parameter and then posts it ot the api 
    async postComment(data) {
        const endpoint ='comments'
        try {
            const response = await this.api.post(`${this.baseUrl}${endpoint}?api_key=<${this.apiKey}>`, data)
            return response.data
        }
        catch (error) {
            console.error('Error', error);
            throw error;
        }  
    }
    
    // get shows does the same as get comments but just for the show data 
    async getShows() {
        const endpoint ='showdates'
        try {
            const response = await this.api.get(`${this.baseUrl}${endpoint}?api_key=<${this.apiKey}>`);
            return response.data
        } 
          
        catch (error) {
            console.error('Error', error);
            throw error;
        }
    }
}

// new instances of the above class used to call the methods in the class 

const bandSiteApiComments = new BandSiteApi(apiKey)

const bandSiteApiPostComment = new BandSiteApi(apiKey)

const bandSiteApiShows = new BandSiteApi(apiKey)





