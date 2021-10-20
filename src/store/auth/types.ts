import {UserModel} from 'models/user.model';

export interface AuthState {
    user?: UserModel,
    isAuth: boolean,
    isLoading: boolean,
    isError: boolean
}

export interface LoginResponseDto{
    token: string
}

export interface LoginParams{
    email:string,
    password:string
}
