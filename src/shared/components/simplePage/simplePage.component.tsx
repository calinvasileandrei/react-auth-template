import React, {FC} from 'react';
import './simplePage.css'
import {Box} from '@chakra-ui/react';
import {HeaderComponent, HeaderProps} from 'shared/components/header.component.tsx/header.component';

interface SimplePageProps{
    header?: HeaderProps
    tabBar?: HeaderProps
}

const SimplePage:FC<SimplePageProps> = ({header,tabBar,children} ) => {
    return (
    <Box w={'100wh'} h={'100vh'} py={0} px={4}>
        { header && <HeaderComponent pageName={header.pageName} />}
        {children}
        { tabBar && <HeaderComponent pageName={tabBar.pageName} />}
    </Box>
    )
};

export default SimplePage
