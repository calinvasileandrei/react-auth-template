import React, {useEffect, useState} from 'react';
import {Button, Flex, FormControl, Input, Spacer, Text} from '@chakra-ui/react';
import {useAppDispatch, useAppSelector} from 'store/store.config';
import {AuthActions} from 'store/auth/auth.action';
import {useHistory, useParams} from 'react-router-dom';
import {LoginRouteParams} from 'navigation/routes';
import SimplePage from 'shared/components/simplePage/simplePage.component';
import LogoImage from 'assets/logos/logo.png';


interface LoginProps{
}

const Login = (props: LoginProps) => {
    const isAuth = useAppSelector(state => state.authReducer.isAuth);
    const history = useHistory()
    const dispatch = useAppDispatch();

    const { id } = useParams<LoginRouteParams>();

    const [userCode, setUserCode] = useState('');


    useEffect(() => {
        if(isAuth){
            history.push('/');
        }else{
            if(id){
                setUserCode(id)
                handleLogin()
            }
        }
    }, []);

    const handleLogin = () => {
        dispatch(AuthActions.loginAction({userCode}))
    }

    const handleSupport = () => {
    }

    return (
        <SimplePage>
            <Flex flexGrow={1} h={'100%'} direction={'column'} align={'center'} >
                <Spacer/>
                <img src={LogoImage} width={350}/>
                <Spacer/>
                <FormControl>
                    <Input value={userCode} onChange={(text)=>setUserCode(text.target.value)} placeholder={'Codice Utente'}/>
                    <Text fontSize={'sm'} color={'blackAlpha.500'} mx={2} >Inserire il codice della prenotazione</Text>
                </FormControl>
                <Spacer/>

                <Button w={'full'} colorScheme={'teal'} color={'white'} mt={6} >Join</Button>
                <Spacer/>

                <Text mb={7} fontSize={'sm'} display={'inline-flex'} color={'blackAlpha.500'} mx={2} >Non riesci ad entrare?
                    <Text fontSize={'sm'} fontWeight={'bold'} color={'blackAlpha.500'} mx={1} onClick={handleSupport}>Contattaci</Text>
                </Text>
            </Flex>
        </SimplePage>
    )
};


export default Login
