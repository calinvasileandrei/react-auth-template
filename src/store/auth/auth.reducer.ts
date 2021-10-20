import {createReducer} from '@reduxjs/toolkit';
import { AuthState } from './types';
import {AuthActions} from 'store/auth/auth.action';

const initialState: AuthState = {
    isAuth:false,
    isError:false,
    isLoading:false
};

export const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(AuthActions.logoutAction,(state, action) => {
        return{
            ...state,
            isAuth:false,
            user:undefined
        }
    })

    builder.addCase(AuthActions.refreshAuthAction, (state, action) => {
        return state
    });

    builder.addCase(AuthActions.loginAction.pending, (state, action) => {
        return{
            ...state,
            isLoading:true,
            isError:false
        }
    });

    builder.addCase(AuthActions.loginAction.fulfilled, (state, action) => {
        return {
            ...state,
            user: action.payload.user,
            isAuth: action.payload.isAuth,
            isError:false,
            isLoading:false
        }
    });

    builder.addCase(AuthActions.loginAction.rejected, (state, action) => {
        return {
            ...state,
            user:undefined,
            isAuth: false,
            isError:false,
            isLoading:false
        }
    });

    builder.addDefaultCase((state, action) => {
        return state;
    });
});
