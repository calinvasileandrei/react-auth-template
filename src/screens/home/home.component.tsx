import React from 'react';
import {Box} from '@chakra-ui/react';
import {HeaderComponent} from 'shared/components/header.component.tsx/header.component';

interface HomeProps{
}

export const Home = (props: HomeProps) => {
    return (
    <Box>
        <HeaderComponent/>
        <Box>
            Home
        </Box>
    </Box>
    )
};

