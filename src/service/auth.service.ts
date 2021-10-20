import {LoginParams, LoginResponseDto} from 'store/auth/types';
import {AxiosResponse} from 'axios';
import {UserService} from 'service/user.service';
import {appAxios} from 'api/interceptor/auth.interceptor';


const loginMethod = async (params:LoginParams) =>{
    const response:AxiosResponse<LoginResponseDto> = await appAxios.post(`/auth/login`,{email:params.email,password:params.password})
    if(response && response.data){
        const token = response.data.token;
        AuthService.setAccessToken(token)
    }
    const user = await UserService.fetchCurrentUsers();
    return {
        user,
        isAuth: !!user
    }
}

const getAccessToken = () =>{
    return localStorage.getItem("accessToken");

}

const setAccessToken = (accessToken:string) =>{
    localStorage.setItem("accessToken", accessToken);
}

const resetAccessToken = () =>{
    localStorage.removeItem("accessToken")
}

export const AuthService = {
    loginMethod,
    getAccessToken,
    setAccessToken,
    resetAccessToken
}
