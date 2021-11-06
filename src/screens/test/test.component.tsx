import React from 'react';
import SimplePage from 'shared/components/simplePage/simplePage.component';
import LogoImage from 'assets/logos/logo.png';
import {Button, Flex, Spacer, Text} from '@chakra-ui/react';

interface TestProps{
}

const TestComponent = (props: TestProps) => {

    return (
            <SimplePage header={{pageName:'Riepilogo'}}>
                        <Flex flexGrow={1} h={'100%'} direction={'column'} align={'center'} >
                            <Spacer/>
                            <img src={LogoImage} width={350}/>
                                <Spacer/>

                                <Button w={'full'} colorScheme={'teal'} color={'white'} mt={6} >Join</Button>
                                <Spacer/>

                                <Text mb={7} fontSize={'sm'} display={'inline-flex'} color={'blackAlpha.500'} mx={2} >Non riesci ad entrare?
                                    <Text fontSize={'sm'} fontWeight={'bold'} color={'blackAlpha.500'} mx={1} >Contattaci</Text>
                                </Text>
                        </Flex>
            </SimplePage>
    )
};

export default TestComponent
