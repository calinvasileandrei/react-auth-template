import {LoginParams, LoginResponseDto} from 'store/auth/types';
import {AxiosResponse} from 'axios';
import {UserService} from 'service/user.service';


const fakeResponse = () => Promise.resolve({
    data: {
        token: 'fakeToken'
    },
    status:200
} as AxiosResponse<LoginResponseDto>);


const loginMethod = async (params: LoginParams) => {
    const response: AxiosResponse<LoginResponseDto> = await fakeResponse()// appAxios.post(`/auth/login`, {userCode: params.userCode})
    if (response && response.data) {
        const token = response.data.token;
        AuthService.setAccessToken(token)
    }
    const user = await UserService.fetchCurrentUsers();
    return {
        user,
        isAuth: !!user
    }
}

const getAccessToken = () => {
    return localStorage.getItem('accessToken');

}

const setAccessToken = (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
}

const resetAccessToken = () => {
    localStorage.removeItem('accessToken')
}

export const AuthService = {
    loginMethod,
    getAccessToken,
    setAccessToken,
    resetAccessToken
}
