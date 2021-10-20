import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'store/store.config';
import {AuthActions} from 'store/auth/auth.action';
import {Center, Spinner} from '@chakra-ui/react';

export const AuthProvider:FC = ({children}) => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.authReducer.isAuth);
    const isLoading = useAppSelector(state => state.authReducer.isLoading);

    useEffect(()=>{
        if(!isAuth){
            dispatch(AuthActions.authenticateWithToken())
        }
    },[])

    return (
        <>
            {isLoading?
                <Center h={'100vh'} w={'100wh'}>
                    <Spinner />
                </Center>
                :children}
        </>
    );
};

