//import {useAuth0} from "@auth0/auth0-vue";
import axios from "axios";


export default {
    jwtInterceptor: async (app) => {
        //const isAuthenticated = app.$auth0.isAuthenticated

        axios.interceptors.request.use(async request => {
            if (app.$auth0.isAuthenticated) {
                const token = await app.$auth0.getAccessTokenSilently()

                console.log("Interceptor! Config is " + request)
                request.headers.Authorization = `bearer ${token}`
                return request
            }
        })
    }
}

