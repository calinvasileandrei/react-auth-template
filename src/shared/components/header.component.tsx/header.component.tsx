import React, {FC} from 'react';
import {Flex,Text} from '@chakra-ui/react';
import {useAppDispatch, useAppSelector} from 'store/store.config';
import {useHistory} from 'react-router-dom';
import LogoImage from 'assets/logos/logo.png';

export interface HeaderProps {
    pageName: string
}

export const HeaderComponent:FC<HeaderProps> = ({pageName}) => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const isAuth = useAppSelector(state => state.authReducer.isAuth)

    return (
        <Flex w={'100%'} direction={'column'} py={1}>
            <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                <img src={LogoImage} width={120}/>
                <Text fontSize={'lg'} fontWeight={'bold'} color={'gray.600'} >{pageName}</Text>
            </Flex>
        </Flex>
    );
};
