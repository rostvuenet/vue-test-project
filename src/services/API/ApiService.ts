import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, RawAxiosRequestHeaders } from 'axios'

class ApiService {
    readonly axios

    constructor (baseUrl?: string, headers?: Record<string, string>) {
        this.axios = axios.create({
            baseURL: baseUrl || '',
            headers: headers,
            withCredentials: false
        })

        this.axios.interceptors.request.use((config) => this.forceAddContentTypeJSONForPostRequests(config))
        this.axios.interceptors.response.use(
            (val) => val,
            (error) => this.getAxiosResponseOnRejectedMessages(error)
        )
    }

    forceAddContentTypeJSONForPostRequests (originalRequest: InternalAxiosRequestConfig) {
        if (originalRequest.method === 'post' && originalRequest.data === undefined) {
            originalRequest.data = {}
            originalRequest.headers['Content-Type'] = 'application/json'
        }

        /*
            const bearerToken = 'Bearer ' + token
            const config = {
                headers: {
                    Authorization: bearerToken
                }
            }
        */

        return originalRequest
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAxiosResponseOnRejectedMessages (err: AxiosResponse<any, any>) {
        console.error(err)
        return Promise.reject({
            axiosResponse: err
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public post (url: string, data: any, headers?: RawAxiosRequestHeaders) {
        const options = {
            method: 'post',
            url,
            data,
            headers
        }

        return this.request(options)
    }

    public get (url: string, headers?: RawAxiosRequestHeaders) {
        const options = {
            method: 'get',
            url,
            headers
        }
        return this.request(options)
    }

    private request (options: AxiosRequestConfig) {
        return new Promise((resolve, reject) => {
            return this.axios(options)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }
}

export { ApiService }
