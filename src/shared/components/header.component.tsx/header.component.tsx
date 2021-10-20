import React, {useEffect} from 'react';
import {Button, Divider, Flex} from '@chakra-ui/react';
import {useAppDispatch, useAppSelector} from 'store/store.config';
import {AuthActions} from 'store/auth/auth.action';
import {useHistory} from 'react-router-dom';

export const HeaderComponent = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const isAuth = useAppSelector(state => state.authReducer.isAuth)

    useEffect(()=>{
        if (!isAuth){
            history.push('/')
        }
    },[isAuth])

    return (
        <Flex w={'100%'} direction={'column'} py={2} m={1}>
            <Flex w={'100%'} justifyContent={'space-between'} m={2}>
                <Button onClick={()=> dispatch(AuthActions.logoutAction())} >Logout</Button>
            </Flex>
            <Divider/>
        </Flex>
    );
};
