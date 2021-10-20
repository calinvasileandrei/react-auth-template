import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {AuthActions} from 'store/auth/auth.action';
import {useAppDispatch} from 'store/store.config';
import {AuthService} from 'service/auth.service';


export const appAxios = axios.create({
    baseURL: 'http://localhost:8080/api',
})

//request interceptor to add the auth token header to requests
appAxios.interceptors.request.use(
    (config:AxiosRequestConfig) => {
        const accessToken = AuthService.getAccessToken()
        console.log("token Header: ",accessToken)
        if (accessToken && config.headers) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        console.log("Conf: ",config)
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);


//response interceptor to refresh token on receiving token expired error
appAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        const originalRequest = error.config;
        const accessToken = localStorage.getItem("accessToken");
        const useDispatch = useAppDispatch();

        if ( accessToken && error.response.status === 401 && !originalRequest._retry ) {
            originalRequest._retry = true;
            return appAxios
                .post(`${process.env.BACKEND}/auth/refresh_token`, { token: accessToken })
                .then((res:AxiosResponse<any>) => {
                    if (res.status === 200) {
                        AuthService.setAccessToken(res.data.token);
                        useDispatch(AuthActions.refreshAuthAction({})) //TODO: complete method
                        console.log("Access token refreshed!");
                        return appAxios(originalRequest);
                    }
                });
        }
        useDispatch(AuthActions.logoutAction())
        return Promise.reject(error);
    }
);
