import React, {useEffect, useState} from 'react';
import {Box, Button, Center, Flex, FormLabel, Input, InputGroup, InputRightElement, Stack} from '@chakra-ui/react';
import {IoEye, IoEyeOff} from 'react-icons/all';
import {useAppDispatch, useAppSelector} from 'store/store.config';
import {AuthActions} from 'store/auth/auth.action';
import {useHistory} from 'react-router-dom';


interface LoginProps{
}

const Login = (props: LoginProps) => {

    const dispatch = useAppDispatch();
    const history = useHistory()

    const [show, setShow] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isAuth = useAppSelector(state => state.authReducer.isAuth);

    useEffect(()=>{
        if(isAuth){
            history.push('/');
        }
    },[])


    return (
        <Box h={'100vh'} w={'100vw'} bgColor={'#363740'}>
            <Center h={'100vh'} w={'100vw'} >
                <Box  w={380} bgColor={'#FFF'} rounded={8}>
                        <Flex direction={'column'} my={6} mx={6}>
                            <Stack spacing={6}>
                            <Box my={10}>
                                    <Center>LOGO</Center>
                                </Box>
                                <Box>
                                    <Center>
                                        Login in to AppName
                                    </Center>
                                </Box>
                                <Box>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder={'Email'} type={'email'} value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                                </Box>
                                <Box>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup size="md">
                                        <Input
                                            type={show ? 'text' : 'password'}
                                            placeholder='Password'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <InputRightElement mr={2}>
                                            <Button size={'sm'} onClick={() => setShow(!show)}>
                                                {show ? <IoEye/> : <IoEyeOff/>}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Box>
                                    <Button w={'100%'}
                                            color={'#FFF'}
                                            _hover={{bgColor:'rgba(55,81,255,0.8)'}}
                                            h={'3em'}
                                            my={4}
                                            bgColor={'#3751FF'}
                                            size={'sm'}
                                            onClick={()=>dispatch(AuthActions.loginAction({email,password}))}>
                                        Log In
                                    </Button>
                                </Box>
                            </Stack>
                        </Flex>
                </Box>
            </Center>
        </Box>
    )
};

export default Login
