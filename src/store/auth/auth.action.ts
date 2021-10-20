import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {AuthService} from 'service/auth.service';
import {LoginParams} from 'store/auth/types';
import {UserService} from 'service/user.service';

export const enum AUTH_ACTION {
    REFRESH_AUTH = 'refreshAuth',
    LOGIN = 'login',
    REGISTER = 'register',
    LOGOUT = 'logout'
}

const refreshAuthAction = createAction(AUTH_ACTION.REFRESH_AUTH, (payload) => {
    return { payload }
})

const loginAction = createAsyncThunk(AUTH_ACTION.LOGIN, async (params:LoginParams, thunkAPI) => {
    return await AuthService.loginMethod(params);
});

const authenticateWithToken = createAsyncThunk(AUTH_ACTION.LOGIN, async ( thunkAPI) => {
    const token = AuthService.getAccessToken();
    let user;
    if(token){
        AuthService.setAccessToken(token);
        user = await UserService.fetchCurrentUsers();
    }
    return {
        user,
        isAuth: !!user
    }
});

const registerAction = createAsyncThunk(AUTH_ACTION.REGISTER, async (params: any, thunkAPI) => {
    // TODO call api
});

const logoutAction = createAction(AUTH_ACTION.LOGOUT, () => {
    AuthService.resetAccessToken();
    return {payload:{}}
});


export const AuthActions = {
    refreshAuthAction,
    loginAction,
    authenticateWithToken,
    registerAction,
    logoutAction
}
