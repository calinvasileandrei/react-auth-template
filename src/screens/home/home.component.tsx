import React from 'react';
import SimplePage from 'shared/components/simplePage/simplePage.component';

interface HomeProps{
}

export const Home = (props: HomeProps) => {
    return (
        <SimplePage header={{pageName:'Home'}}></SimplePage>
    )
};

