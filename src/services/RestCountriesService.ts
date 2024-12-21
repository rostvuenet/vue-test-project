import { ApiService } from '@/services/API/ApiService'
import { ICountry } from '@/types'

const PREFIX = 'https://restcountries.com'
const COUNTRY_ENDPOINT = '/v3.1/all'

class RestCountriesService {
    private readonly apiService

    constructor () {
        this.apiService = new ApiService(PREFIX)
    }

    public async getCountryListAll () {
        const params = 'name,capital,region,flag,flags'
        return await this.apiService.get(`${COUNTRY_ENDPOINT}?fields=${params}`) as Array<ICountry>
    }
}

export default new RestCountriesService()
